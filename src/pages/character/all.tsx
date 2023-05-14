import PageTransition from '@/components/pageTransition/PageTransition'
import AllCharacters from '@/components/screens/allCharacters/AllCharacters'
import { CharactersService } from '@/services/character.service'
import { EpisodesService } from '@/services/episode.service'
import { LocationsService } from '@/services/location.service'
import { TPageInfo } from '@/types/PageInfoType'
import { GetStaticProps, NextPage } from 'next'
import { SWRConfig } from 'swr'

interface Props {
    fallback: {
        charactersInfo: TPageInfo,
        locationsInfo: TPageInfo,
        episodesInfo: TPageInfo,
    }
}

const All: NextPage<Props> = ({ fallback }, ref: React.ForwardedRef<HTMLDivElement>) => {

    return (
        <PageTransition ref={ref}>
            <SWRConfig value={{ fallback }}>
                <AllCharacters />
            </SWRConfig>
        </PageTransition>
    )
}

export const getStaticProps: GetStaticProps<{ fallback: any }> = async () => {

    //создаём fallback значение для серверного рендеринга колличества персонажей в футере
    const charactersInfo = (await CharactersService.GetOnePageOfCharacters('')).info

    //далее то же самое для локаций и эпизодов
    const locationsInfo = (await LocationsService.GetAllLocations()).info
    const episodesInfo = (await EpisodesService.GetAllEpisodes()).info

    return {
        props: {
            fallback: {
                'charactersInfo': charactersInfo,
                'locationsInfo': locationsInfo,
                'episodesInfo': episodesInfo,
            }
        },
        revalidate: 600
    }
}

export default All