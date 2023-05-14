import { forwardRef } from 'react'
import { GetStaticProps, NextPage } from 'next'
import Head from "next/head"
import HomePage from '@/components/screens/home/Home'
import type { TCharacter } from "@/types/CharacterType"
import { CharactersService } from "@/services/character.service"
import { SWRConfig, preload } from 'swr'
import { LocationsService } from '@/services/location.service'
import { EpisodesService } from '@/services/episode.service'
import { TPageInfo } from '@/types/PageInfoType'
import PageTransition from '@/components/pageTransition/PageTransition'


//тип для fallback, за полчаса ничего лучше не придумал, зато не any
type IndexFallback = {
  charactersInfo: TPageInfo;
  locationsInfo: TPageInfo;
  episodesInfo: TPageInfo;
}


const Home = ({ characters, fallback }: { characters: TCharacter[], fallback: IndexFallback }, ref: React.ForwardedRef<HTMLDivElement>) => {

  return <>
    <Head>
      <title>Home page</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <PageTransition ref={ref}>
      <SWRConfig value={{ fallback }}>
        <HomePage characters={characters} />
      </SWRConfig>
    </PageTransition>
  </>
}

export const getStaticProps: GetStaticProps<{ characters: TCharacter[], fallback: IndexFallback }> = async () => {

  //получение 6 рандомных персонажей для главной страницы
  const characters = await CharactersService.GetSixRandomCharacters()

  //создаём fallback значение для серверного рендеринга колличества персонажей в футере
  const charactersInfo = (await CharactersService.GetOnePageOfCharacters('')).info

  //далее то же самое для локаций и эпизодов
  const locationsInfo = (await LocationsService.GetAllLocations()).info
  const episodesInfo = (await EpisodesService.GetAllEpisodes()).info

  return {
    props: {
      characters,
      fallback: {
        'charactersInfo': charactersInfo,
        'locationsInfo': locationsInfo,
        'episodesInfo': episodesInfo,
      }
    },
    revalidate: 60000
  }
}



export default forwardRef(Home)