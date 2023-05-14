import PageTransition from '@/components/pageTransition/PageTransition'
import { FavoritesPage } from '@/components/screens/favorites/FavoritesPage'
import { NextPage } from 'next'
import Head from 'next/head'
import { forwardRef } from 'react'


interface Props { }
const Favorites = (props: Props, ref: React.ForwardedRef<HTMLDivElement>) => {
    return <>
        <Head>
            <title>Favorites</title>
        </Head>
        <PageTransition ref={ref}>
            <FavoritesPage />
        </PageTransition>
    </>

}

export default forwardRef(Favorites)