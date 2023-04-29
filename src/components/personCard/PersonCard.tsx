import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { TCharacter } from '@/types/CharacterType'
import { FavoriteButton } from './FavoriteButton'



export const PersonCard: React.FC<TCharacter> = (CharacterData) => {

    return (
        <div className='flex flex-col w-full max-w-2xl mx-4 overflow-hidden text-white transition ease-in-out h-fit rounded-xl bg-ram-500 md:flex-row md:w-132 md:h-56 md:m-0 hover:-translate-y-1 hover:scale-105'>
            <div className='w-full flex-[2_1_0%] '>
                <Image
                    className="object-cover object-center w-full max-h-80"
                    alt='person photo'
                    src={CharacterData.image}
                    width={300} height={300}
                />
            </div>
            <div className='flex-[3_1_0%] flex flex-col justify-between p-4 relative'>
                <div>

                    <Link href={`/character/${CharacterData.id}`} className='text-3xl font-bold hover:text-orange-400'>{CharacterData.name}</Link>
                    <span className='flex items-center text-base'>
                        <span className='inline-block w-3 h-3 mr-2 bg-red-700 rounded-full'></span>
                        {CharacterData.status}-{CharacterData.species}
                    </span>
                </div>
                <div>
                    <p className='text-ram-300'>Last known location:</p>
                    <p>{CharacterData.location.name}</p>
                </div>
                <div>
                    <p className='text-ram-300'>First seen in:</p>
                    <p>{CharacterData.origin.name}</p>
                </div>
                <div className='absolute bottom-3 right-3'>
                    <FavoriteButton CharacterData={CharacterData} />
                </div>
            </div>
        </div>
    )
}