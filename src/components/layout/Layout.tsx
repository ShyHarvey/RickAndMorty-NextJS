import { FC, PropsWithChildren } from 'react'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { RickAndMorty } from '@/components/svg/RickAndMorty'
import { motion } from 'framer-motion'

export const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen overflow-y-hidden'>
            <Header />
            <div className="relative flex items-center justify-center text-center h-96">
                <RickAndMorty className="absolute w-full h-full -z-20 fill-ram-100" />

                <motion.h1
                    initial={{ y: -300 }}
                    animate={{ y: 0 }}
                    transition={{
                        type: "spring",
                        damping: 7,
                        stiffness: 100

                    }}
                    drag
                    whileDrag={{
                        cursor: 'grabbing'
                    }}
                    dragConstraints={{
                        top: -50,
                        left: -50,
                        right: 50,
                        bottom: 50,
                    }}
                    className="font-black cursor-grab text-8xl text-ram-900 ">
                    Rick and Morty
                </motion.h1>

            </div>
            <div className='flex-1 py-20 bg-ram-700'>
                {children}
            </div>
            <Footer />
        </div>
    )
}