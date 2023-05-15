import React, { forwardRef } from 'react'
import Link from 'next/link'
import { motion, Reorder } from 'framer-motion'
import type { TCharacter } from '@/types/CharacterType'



export const SmallFavoritesCard = (CharacterData: TCharacter, ref: React.ForwardedRef<HTMLDivElement>) => {

    return (
        <div
            ref={ref}
            className='relative flex justify-center px-4 py-2 overflow-hidden text-white rounded-md cursor-grab h-fit bg-ram-500'
        >
            <p className='text-xl font-bold w-60 hover:text-orange-400'>{CharacterData.name}</p>
        </div>
    )
}

export const MSmallFavoritesCard = motion(forwardRef(SmallFavoritesCard), { forwardMotionProps: true })