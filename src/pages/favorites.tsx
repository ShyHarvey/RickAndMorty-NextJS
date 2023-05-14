import PageTransition from '@/components/pageTransition/PageTransition'
import { FavoritesPage } from '@/components/screens/favorites/FavoritesPage'
import { NextPage } from 'next'
import Head from 'next/head'

type FavoritesPageRef = React.ForwardedRef<HTMLDivElement>
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

export default Favorites