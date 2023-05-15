import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FavoriteButton } from '@/components/favoriteButton/FavoriteButton'
import { motion } from 'framer-motion'
import type { TCharacter } from '@/types/CharacterType'


let imageRevealAnimations = {
    hidden: {
        x: -400,
        opacity: 0
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}
let textRevealAnimations = {
    hidden: {
        y: 400,
        opacity: 0
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: custom * 0.2,
            duration: 0.1
        }
    })
}


export const PersonPage: React.FC<TCharacter> = (CharacterData) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <motion.div
            initial={'hidden'}
            animate={isLoaded && 'visible'}
            transition={{
                duration: 0.5,
                ease: 'easeInOut'
            }}
            className='flex flex-col justify-center w-full text-white px-9 md:flex-row'
        >
            <motion.div
                variants={imageRevealAnimations}
                custom={1}
                className='w-full relative flex-[1_1_0%] h-fit'
            >
                <Image
                    className="object-cover object-center w-full rounded-lg h-fit"
                    alt='person photo'
                    src={CharacterData.image}
                    width={500} height={500}
                    onLoad={() => setIsLoaded(true)}

                />
                <div className='absolute bottom-2 right-2'>
                    <FavoriteButton CharacterData={CharacterData} />
                </div>
            </motion.div>
            <div className='flex-[1_1_0%] flex flex-col p-4 w-fit text-2xl relative'>
                <div>
                    <motion.p
                        variants={textRevealAnimations}
                        custom={2}
                        className='text-5xl font-bold'>{CharacterData.name}</motion.p>
                    <motion.span
                        variants={textRevealAnimations}
                        custom={3}
                        className='flex items-center'>
                        <span className={`inline-block w-3 h-3 mr-2 shadow-sm  rounded-full
                        ${CharacterData.status == 'Alive' && 'bg-green-700'}
                        ${CharacterData.status == 'Dead' && 'bg-red-600'}
                        ${CharacterData.status == 'unknown' && 'bg-white'}`}></span>
                        {CharacterData.status}-{CharacterData.species}
                    </motion.span>
                </div>
                <motion.div
                    variants={textRevealAnimations}
                    custom={4}
                >
                    <p className='text-ram-300'>Last known location:</p>
                    <p>{CharacterData?.location?.name}</p>
                </motion.div>
                <motion.div
                    variants={textRevealAnimations}
                    custom={5}
                >
                    <p className='text-ram-300'>First seen in:</p>
                    <p>{CharacterData?.origin?.name}</p>
                </motion.div>
                <motion.div
                    variants={textRevealAnimations}
                    custom={6}
                >
                    <p className='text-ram-300'>Episodes:</p>
                    <div className='flex flex-col'>
                        {CharacterData?.episode?.map((item, index) =>
                            <motion.div
                                key={index}
                                variants={textRevealAnimations}
                                custom={index + 7}
                            >
                                <Link className='text-base md:text-2xl hover:text-orange-500' target='_blank' href={item}>{item}</Link>
                            </motion.div>

                        )}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}
