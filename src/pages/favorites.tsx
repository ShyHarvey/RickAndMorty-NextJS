import { FavoritesPage } from '@/components/screens/favorites/FavoritesPage'
import { NextPage } from 'next'
import Head from 'next/head'

interface Props { }

const Favorites: NextPage<Props> = ({ }) => {
    return <>
        <Head>
            <title>Favorites</title>
        </Head>
        <FavoritesPage />
    </>

}

export default Favorites