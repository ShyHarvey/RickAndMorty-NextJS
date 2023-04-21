import React, { useState, useEffect } from "react";

import { Layout } from "@/components/layout/Layout";
import { PersonCard } from "@/components/personCard/PersonCard";
import { CharactersService } from '@/services/character.service'
import type { TGetOnePageArguments, TOnePageOfCharacters } from "@/types/CharacterType";
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr'
import { AxiosError } from 'axios';
import { Pagination } from "@/components/pagination/Pagination";
import { CharacterSearchForm } from "@/components/charactersSearchForm/CharacterSearchForm";
import { useRouter } from "next/router";


export default function AllCharacters() {
    const router = useRouter()

    let page = useSearchParams().get('page')

    const [queryString, setQueryString] = useState(router.asPath.split('?')[1])

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            setQueryString(url.split('?')[1]);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
    }, [router])

    const { data: charactersData, error, isLoading } = useSWR<TOnePageOfCharacters, AxiosError>(`charactersPage=${queryString}`,
        async () => {
            const data = await CharactersService.GetOnePageOfCharacters(queryString)
            return data
        })


    //сразу запрашиваем и кэшируем следующую страницу, чтобы избежать задержки и отображения самой первой страницы во время загрузки

    let nextPageQueryString = queryString
    nextPageQueryString = nextPageQueryString.replace(/page=(\d+)/, `page=${Number(page) + 1}`);

    const { data: charactersDataNextPage } = useSWR(`charactersPage=${nextPageQueryString}`,
        async () => {

            const data = await CharactersService.GetOnePageOfCharacters(nextPageQueryString)
            return data
        },)


    const charactersArray = charactersData?.results

    return (

        <Layout>
            <section className="flex flex-wrap justify-center gap-6 text-gray-400 bg-ram-700 body-font ">
                <CharacterSearchForm />
                {isLoading && <p className="flex flex-col items-center justify-center w-full mb-3 text-3xl font-bold h-96 animate-pulse">Loading...</p>}
                {error?.isAxiosError ?
                    <p className="flex flex-col items-center justify-center w-full mb-3 text-3xl font-bold h-96 animate-pulse">Not found</p>
                    :
                    <>
                        {charactersData && <div className="flex flex-col items-center justify-center w-full mb-3">
                            <Pagination totalPage={charactersData.info.pages} currentPage={page ? page : '1'} nextPage={`/character/all?${nextPageQueryString}`} />
                        </div>}
                        {charactersArray && charactersArray.map(item => <PersonCard key={item.id} {...item} />)}
                    </>
                }
            </section>
        </Layout>
    )
}
