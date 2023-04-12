import { Layout } from "@/components/layout/Layout";
import { PersonCard } from "@/components/personCard/PersonCard";
import { CharactersService } from '@/services/character.service'
import { TOnePageOfCharacters } from "@/types/CharacterType";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr'


export default function AllCharacters({ charactersInitialData }: { charactersInitialData: TOnePageOfCharacters }) {

    const searchParams = useSearchParams();

    const page = searchParams.get('page');



    const { data: charactersData, isLoading } = useSWR(`charactersPage=${page}`,
        async () => {
            const data = await CharactersService.GetOnePageOfCharacters(page ? +page : 1)
            return data
        }, { fallbackData: charactersInitialData })


    //сразу запрашиваем и кэшируем следующую страницу, чтобы избежать задержи и отображения самой первой страницы во время загрузки

    const { data: charactersDataNextPage } = useSWR(`charactersPage=${page ? +page + 1 : 2}`,
        async () => {
            const data = await CharactersService.GetOnePageOfCharacters(page ? +page + 1 : 2)
            return data
        },)


    const charactersArray = charactersData?.results

    return (

        <Layout>
            <Link className="z-50 text-5xl text-ram-300" href={`/character/all?page=${page ? +page + 1 : 2}`}>Next</Link>
            <section className="flex flex-wrap justify-center gap-6 text-gray-400 bg-ram-700 body-font ">
                {isLoading && <p>Loading</p>}
                {charactersArray ? charactersArray.map(item => <PersonCard key={item.id} {...item} />) : <p className="text-3xl font-bold animate-pulse">Not found</p>}
            </section>
        </Layout>
    )
}
