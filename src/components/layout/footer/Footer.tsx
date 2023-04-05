import { CharactersService } from '@/services/character.service'
import { EpisodesService } from '@/services/episode.service'
import { LocationsService } from '@/services/location.service'
import React from 'react'
import useSWR from 'swr/immutable'

export const Footer: React.FC<{}> = () => {

    const { data: charactersData } = useSWR('charactersInfo',
        async () => {
            const data = await CharactersService.GetAllCharacters()
            console.log('characters info:', data)
            return data
        })
    const { data: locationsData } = useSWR('locationsInfo',
        async () => {
            const data = await LocationsService.GetAllLocations()
            console.log('locations info:', data)
            return data
        })
    const { data: episodesData } = useSWR('episodesInfo',
        async () => {
            const data = await EpisodesService.GetAllEpisodes()
            console.log('episodes info:', data)
            return data
        })


    return (
        <div className='flex-shrink-0 h-40 p-4 bg-ram-900'>
            <div className='flex justify-center gap-5 mt-4'>
                <p className='font-bold text-md text-ram-300'>
                    CHARACTERS:&nbsp;
                    <span className='text-orange-400'>
                        {charactersData ? charactersData.info.count : 'Error'}
                    </span>
                </p>
                <p className='font-bold text-md text-ram-300'>
                    LOCATIONS:&nbsp;
                    <span className='text-orange-400'>
                        {locationsData ? locationsData.info.count : 'Error'}
                    </span>
                </p>
                <p className='font-bold text-md text-ram-300'>
                    EPISODES:&nbsp;
                    <span className='text-orange-400'>
                        {episodesData ? episodesData.info.count : 'Error'}
                    </span>
                </p>
            </div>

        </div>
    )
}