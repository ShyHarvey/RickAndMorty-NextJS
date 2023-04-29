import useLocalStorage from '@/hooks/useLocalStorage'
import { TCharacter } from '@/types/CharacterType'
import { HeartIcon } from '@heroicons/react/20/solid'
import React from 'react'

export const FavoriteButton: React.FC<{ CharacterData: TCharacter }> = ({ CharacterData }) => {
    const [favorites, setFavorites] = useLocalStorage<TCharacter[]>('favorites')
    //ищем данного персонажа в избранном
    let currentCharacterIndex = favorites ? favorites.findIndex((item) => item.id == CharacterData.id) : -1

    const handleAddToFavorites = () => {
        if (favorites) {
            setFavorites([...favorites, CharacterData])
        } else {
            setFavorites([CharacterData])
        }
    }

    const handleHeartClick = () => {
        if (!favorites) {
            handleAddToFavorites();// если массив не существует, то сразу добавляем
        } else if (currentCharacterIndex === -1) {

            handleAddToFavorites();//если не найден в избранном, то добавляем
        } else {
            const newFavorites = favorites.slice();
            newFavorites.splice(currentCharacterIndex, 1);//если персонаж найден , то удаляем
            setFavorites(newFavorites);
        }
    }


    return (
        <HeartIcon
            onClick={() => handleHeartClick()}
            className={`cursor-pointer stroke-white  
                        ${currentCharacterIndex > -1 ? 'fill-white' : 'fill-none hover:fill-white/30'}`}
            width={35} height={35} />
    )
}