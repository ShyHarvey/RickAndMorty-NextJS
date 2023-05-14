import { CharactersService } from '@/services/character.service'
import { EpisodesService } from '@/services/episode.service'
import { LocationsService } from '@/services/location.service'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr/immutable'

export const Footer: React.FC<{}> = () => {

    const { data: charactersData } = useSWR('charactersInfo',
        async () => {
            const data = (await CharactersService.GetOnePageOfCharacters('')).info
            return data
        })
    const { data: locationsData } = useSWR('locationsInfo',
        async () => {
            const data = (await LocationsService.GetAllLocations()).info
            return data
        })
    const { data: episodesData } = useSWR('episodesInfo',
        async () => {
            const data = (await EpisodesService.GetAllEpisodes()).info
            return data
        })


    return (
        <div className='flex-shrink-0 h-40 p-4 bg-ram-900'>
            <div className='flex flex-col items-center justify-center gap-5 mt-4 md:flex-row'>
                <Link className='text-ram-300 hover:text-orange-500' href={'/character/all?page=1'} scroll={false}
                // onMouseOver={() => preload(`charactersPage=1`, async () => {
                //     const data = await CharactersService.GetOnePageOfCharacters('page=1')
                //     return data
                // })}
                >
                    <p className='font-bold text-md'>
                        CHARACTERS:&nbsp;
                        <span>
                            {charactersData ? charactersData.count : 'Error'}
                        </span>
                    </p>
                </Link>
                <Link className='text-ram-300 hover:text-orange-500' href={'/'} scroll={false}>
                    <p className='font-bold text-md'>
                        LOCATIONS:&nbsp;
                        <span>
                            {locationsData ? locationsData.count : 'Error'}
                        </span>
                    </p>
                </Link>
                <Link className='text-ram-300 hover:text-orange-500' href={'/'} scroll={false}>
                    <p className='font-bold text-md '>
                        EPISODES:&nbsp;
                        <span >
                            {episodesData ? episodesData.count : 'Error'}
                        </span>
                    </p>
                </Link>
            </div>

        </div>
    )
}
