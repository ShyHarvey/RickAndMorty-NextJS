import { Layout } from "@/components/layout/Layout";
import { PersonCard } from "@/components/personCard/PersonCard";
import { CharactersService } from '@/services/character.service'
import type { TGetOnePageArguments, TOnePageOfCharacters } from "@/types/CharacterType";
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr'
import { AxiosError } from 'axios';
import { Pagination } from "@/components/pagination/Pagination";
import { CharacterSearchForm } from "@/components/charactersSearchForm/CharacterSearchForm";

export default function AllCharacters() {

    //массив всех возможных параметров запроса
    const paramsArray = ['page', 'name', 'gender', 'species', 'status', 'type']

    // Создание пустой карты, в которую будут добавлены значения параметров запроса
    let paramsMap = new Map<string, string | null>()

    // Получение текущих параметров запроса
    const searchParams = useSearchParams();
    let page = searchParams.get('page')

    // Заполнение карты значениями параметров запроса
    paramsArray.map(item => { paramsMap.set(item, searchParams.get(item)) })

    // Создание объекта с аргументами запроса из карты
    const queryArguments = Object.fromEntries(paramsMap.entries()) as TGetOnePageArguments

    // Создание строки запроса из объекта параметров
    const queryString = Object.entries(queryArguments)
        .map(([key, value]) => { if (value !== null) return `${key}=${value}` })
        .filter(Boolean) // фильтруем нулевые значения
        .join('&');

    const { data: charactersData, error, isLoading } = useSWR<TOnePageOfCharacters, AxiosError>(`charactersPage=${page}`,
        async () => {
            const data = await CharactersService.GetOnePageOfCharacters(queryString)
            return data
        })


    //сразу запрашиваем и кэшируем следующую страницу, чтобы избежать задержки и отображения самой первой страницы во время загрузки

    let nextPageQueryString = queryString
    nextPageQueryString = nextPageQueryString.replace(/page=(\d+)/, `page=${Number(page) + 1}`);

    const { data: charactersDataNextPage } = useSWR(`charactersPage=${page ? +page + 1 : 2}`,
        async () => {

            const data = await CharactersService.GetOnePageOfCharacters(nextPageQueryString)
            return data
        },)


    const charactersArray = charactersData?.results

    return (

        <Layout>
            <section className="flex flex-wrap justify-center gap-6 text-gray-400 bg-ram-700 body-font ">
                <CharacterSearchForm />
                {error?.isAxiosError ?
                    <p className="w-full text-5xl text-center text-ram-300">Not found</p>
                    :
                    <>
                        {charactersData && <div className="flex flex-col items-center justify-center w-full mb-3">
                            <Pagination totalPage={charactersData.info.pages} currentPage={page ? page : '1'} nextPage={`/character/all?${nextPageQueryString}`} />
                        </div>}
                        {charactersArray ? charactersArray.map(item => <PersonCard key={item.id} {...item} />) : <p className="text-3xl font-bold animate-pulse">Not found</p>}
                    </>
                }
            </section>
        </Layout>
    )
}
