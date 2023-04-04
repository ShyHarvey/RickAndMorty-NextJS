import React from 'react'
import Image from 'next/image'
import type { TCharacter } from '@/types/CharacterType'



export const PersonCard: React.FC<TCharacter> = (CharacterData) => {
    return (
        <div className='flex flex-col w-full max-w-2xl mx-4 overflow-hidden text-white h-fit rounded-xl bg-ram-500 md:flex-row md:w-132 md:h-56 md:m-0'>
            <div className='w-full flex-[2_1_0%] '>
                <Image
                    className="object-cover object-center w-full max-h-80"
                    alt='person photo'
                    src={CharacterData.image}
                    width={300} height={300}
                />
            </div>
            <div className='flex-[3_1_0%] flex flex-col justify-between p-4'>
                <div>
                    <p className='text-3xl font-bold'>{CharacterData.name}</p>
                    <span className='flex items-center text-base'>
                        <span className='inline-block w-3 h-3 mr-2 bg-red-700 rounded-full'></span>
                        {CharacterData.status}-{CharacterData.species}
                    </span>
                </div>
                <div>
                    <p className='text-ram-300'>Last known location:</p>
                    <p>Citadel of Ricks</p>
                </div>
                <div>
                    <p className='text-ram-300'>First seen in:</p>
                    <p>One Crew Over the Crewcoo Morty</p>
                </div>
            </div>
        </div>
    )
}