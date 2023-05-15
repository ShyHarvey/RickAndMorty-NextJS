import React, { forwardRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FavoriteButton } from '../favoriteButton/FavoriteButton'
import type { TCharacter } from '@/types/CharacterType'



export const FavoritesCard = (CharacterData: TCharacter, ref: React.ForwardedRef<HTMLDivElement>) => {

    return (
        <motion.div
            ref={ref}
            layout
            layoutId={String(CharacterData.id)}
            className='relative flex w-full max-w-xs overflow-hidden text-white rounded-md h-fit bg-ram-500'
        >
            <div className='w-full flex-[1_1_0%] '>
                <Image
                    className="object-cover object-center w-full max-h-80"
                    alt='person photo'
                    src={CharacterData.image}
                    width={300} height={300}
                />
            </div>
            <div className='flex-[1_1_0%] flex justify-center items-center w-fit p-4 relative'>
                <Link href={`/character/${CharacterData.id}`} scroll={false} className='text-xl font-bold w-fit hover:text-orange-400'>{CharacterData.name}</Link>
            </div>
            <div className='absolute bottom-3 right-3'>
                <FavoriteButton CharacterData={CharacterData} />
            </div>
        </motion.div >
    )
}

export const MFavoritesCard = motion(forwardRef(FavoritesCard), { forwardMotionProps: true })