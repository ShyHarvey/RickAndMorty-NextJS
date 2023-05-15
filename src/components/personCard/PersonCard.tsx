import React, { forwardRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FavoriteButton } from '../favoriteButton/FavoriteButton'
import type { TCharacter } from '@/types/CharacterType'



export const PersonCard = (CharacterData: TCharacter, ref: React.ForwardedRef<HTMLDivElement>) => {

    return (
        <motion.div
            whileHover={{
                position: 'relative',
                zIndex: 1,
                scale: [1, 1.1, 1.05],
                rotate: [0, 30, -30, 0],
                transition: {
                    duration: 0.5
                },
                // filter: [
                //     'hue-rotate(0) contrast(100%)',
                //     'hue-rotate(360deg) contrast(200%)',
                //     'hue-rotate(45deg) contrast(300%)',
                //     'hue-rotate(0) contrast(100%)'
                // ]
            }}
            className='flex flex-col w-full max-w-2xl mx-4 overflow-hidden text-white transition ease-in-out h-fit rounded-xl bg-ram-500 md:flex-row md:w-132 md:h-56 md:m-0'

        >
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

                    <Link href={`/character/${CharacterData.id}`} scroll={false} className='text-3xl font-bold hover:text-orange-400'>{CharacterData.name}</Link>
                    <span className='flex items-center text-base'>
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
                <div className='absolute bottom-3 right-3'>
                    <FavoriteButton CharacterData={CharacterData} />
                </div>
            </div>
        </motion.div>
    )
}


export const MPersonCard = motion(forwardRef(PersonCard), { forwardMotionProps: true })