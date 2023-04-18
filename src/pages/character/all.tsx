import AllCharacters from '@/components/screens/allCharacters/AllCharacters'
import { CharactersService } from '@/services/character.service'
import { EpisodesService } from '@/services/episode.service'
import { LocationsService } from '@/services/location.service'
import { TOnePageOfCharacters } from '@/types/CharacterType'
import { GetStaticProps, NextPage } from 'next'
import { SWRConfig } from 'swr'

interface Props {
    fallback: any
    charactersData: TOnePageOfCharacters
}

const All: NextPage<Props> = ({ fallback, charactersData }) => {
    return (
        <>
            <SWRConfig value={{ fallback }}>

                {/* прокинуть fallback в конфиг недостаточно в данном случае, так как useSWR внутри компонента AllCharacters
                 использует динамический ключ зависящи от квери параметров, поэтому данные будут запрашиваться на
                  стадии клиентского рендеринга, даже если они были предварительно получены на стадии серверного 
                  рендеринга. Это происходит потому, что при каждом рендеринге компонента, ключ charactersPage=${page} будет
                   меняться в зависимости от значения page, которое может быть определено только на стадии клиентского рендеринга. 
                   
                   В общем чтобы это всё предотвратить отрендерить первую страницу на сервере придётся прокинуть Initial параметры 
                   для useSWR через пропсы в AllCharacters
                   
                   */}
                <AllCharacters
                // к сожалению пока что придётся отказаться от этой идеи
                //  charactersInitialData={charactersData} 
                />
            </SWRConfig>
        </>
    )
}

export const getStaticProps: GetStaticProps<{ fallback: any, charactersData: TOnePageOfCharacters }> = async () => {

    //создаём fallback значение для серверного рендеринга первой страницы всех персонажей
    const charactersFirstPage = (await CharactersService.GetOnePageOfCharacters(''))

    //создаём fallback значение для серверного рендеринга колличества персонажей в футере
    const charactersInfo = (await CharactersService.GetOnePageOfCharacters('')).info

    //далее то же самое для локаций и эпизодов
    const locationsInfo = (await LocationsService.GetAllLocations()).info
    const episodesInfo = (await EpisodesService.GetAllEpisodes()).info

    return {
        props: {
            charactersData: charactersFirstPage,
            fallback: {
                'charactersPage=1': charactersFirstPage,
                'charactersInfo': charactersInfo,
                'locationsInfo': locationsInfo,
                'episodesInfo': episodesInfo,
            }
        },
        revalidate: 600
    }
}

export default All