import { FC, PropsWithChildren } from 'react'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { RickAndMorty } from '@/components/svg/RickAndMorty'

export const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div className="relative flex items-center justify-center text-center h-96">
                <RickAndMorty className="absolute w-full h-full -z-20 fill-ram-100" />
                <h1 className="font-black text-8xl text-ram-900 animate-bounce-slow">
                    Rick and Morty
                </h1>
            </div>
            <div className='flex-1 py-20 bg-ram-700'>
                {children}
            </div>
            <Footer />
        </div>
    )
}