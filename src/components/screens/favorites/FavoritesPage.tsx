import React, { useEffect, useState } from 'react'
import useLocalStorage from '@/hooks/useLocalStorage'
import { TCharacter } from '@/types/CharacterType'
import { AnimatePresence, Reorder, motion } from 'framer-motion'
import { MFavoritesCard } from '@/components/favoritesCard/FavoritesCard'
import { MSmallFavoritesCard } from '@/components/favoritesCard/SmallFaworitesCard'

export const FavoritesPage: React.FC<{}> = () => {
    const [favorites, setFavorites] = useLocalStorage<TCharacter[]>('favorites')
    const [items, setItems] = useState(favorites ? favorites : [])


    // я так и не понял почему, но если рендерить карточки и список из общего массива favorites, то reorder ломается хддддд
    useEffect(() => {
        setItems(favorites || [])
    }, [favorites])


    return (
        <section className="flex justify-around w-full text-gray-400 bg-ram-700 body-font">
            <div className='flex flex-[3-1] justify-center flex-wrap gap-4'>
                <AnimatePresence>
                    {items.length ? items.map(item =>
                        <MFavoritesCard key={item.id} {...item} />    //тут карточки, а дальше список
                    ) :
                        <p className="flex flex-col items-center justify-center w-full mb-3 text-3xl font-bold h-96 animate-pulse">Favorites is empty</p>
                    }
                </AnimatePresence>

            </div>

            <Reorder.Group
                className='sm:flex hidden justify-start items-center flex-[1-1] mr-4 flex-col gap-2'
                as='div'
                axis='y'
                values={favorites || []}
                onReorder={setFavorites}
            >
                {favorites?.length ?
                    <>
                        <p>grab it &#8595;</p>
                        {favorites.map(item =>
                            <Reorder.Item whileDrag={{ scale: 1.1 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.1 }} as='div' value={item} key={item.id}>
                                <MSmallFavoritesCard {...item} />
                            </Reorder.Item>
                        )}
                    </>
                    :
                    <p className="flex flex-col items-center justify-center w-full mb-3 text-3xl font-bold h-96 animate-pulse">Favorites is empty</p>
                }
            </Reorder.Group>
        </section>
    )
}