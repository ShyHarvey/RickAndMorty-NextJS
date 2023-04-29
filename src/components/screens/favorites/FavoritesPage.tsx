import { Layout } from '@/components/layout/Layout'
import { PersonCard } from '@/components/personCard/PersonCard'
import useLocalStorage from '@/hooks/useLocalStorage'
import { TCharacter } from '@/types/CharacterType'
import React from 'react'

export const FavoritesPage: React.FC<{}> = () => {
    const [favorites] = useLocalStorage<TCharacter[]>('favorites')
    return (
        <Layout>
            <section className="flex flex-wrap justify-center gap-6 text-gray-400 bg-ram-700 body-font ">
                {favorites?.length ? favorites.map(item => <PersonCard key={item.id} {...item} />) :
                    <p className="flex flex-col items-center justify-center w-full mb-3 text-3xl font-bold h-96 animate-pulse">Favorites is empty</p>}
            </section>
        </Layout>
    )
}