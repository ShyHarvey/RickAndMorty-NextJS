import React from 'react'
import Image from 'next/image'
import type { TCharacter } from '@/types/CharacterType'
import Link from 'next/link'
import { FavoriteButton } from '@/components/favoriteButton/FavoriteButton'




export const PersonPage: React.FC<TCharacter> = (CharacterData) => {

    return (
        <div className='flex flex-col justify-center w-full text-white px-9 md:flex-row'>
            <div className='w-full relative flex-[1_1_0%] h-fit'>
                <Image
                    className="object-cover object-center w-full rounded-lg h-fit"
                    alt='person photo'
                    src={CharacterData.image}
                    width={500} height={500}
                />
                <div className='absolute bottom-2 right-2'>
                    <FavoriteButton CharacterData={CharacterData} />
                </div>
            </div>
            <div className='flex-[1_1_0%] flex flex-col p-4 w-fit text-2xl relative'>
                <div>
                    <p className='text-5xl font-bold'>{CharacterData.name}</p>
                    <span className='flex items-center'>
                        <span className={`inline-block w-3 h-3 mr-2 shadow-sm  rounded-full
                        ${CharacterData.status == 'Alive' && 'bg-green-700'}
                        ${CharacterData.status == 'Dead' && 'bg-red-600'}
                        ${CharacterData.status == 'unknown' && 'bg-white'}`}></span>
                        {CharacterData.status}-{CharacterData.species}
                    </span>
                </div>
                <div>
                    <p className='text-ram-300'>Last known location:</p>
                    <p>{CharacterData?.location?.name}</p>
                </div>
                <div>
                    <p className='text-ram-300'>First seen in:</p>
                    <p>{CharacterData?.origin?.name}</p>
                </div>
                <div>
                    <p className='text-ram-300'>Episodes:</p>
                    <div className='flex flex-col'>
                        {CharacterData?.episode?.map((item, index) =>
                            <Link className='text-base md:text-2xl hover:text-orange-500' key={index} target='_blank' href={item}>{item}</Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
