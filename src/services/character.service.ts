import { GenerateSixRandomNumbers } from "@/helpers/SixRandomNumbers";
import { TAllCharacters, TCharacter } from "@/types/CharacterType";
import { RickAndMortyApiInstance } from "./axiosInstance";

export const CharactersService = {
    async GetSixRandomCharacters() {
        const SixRandomNumbers = GenerateSixRandomNumbers()
        const { data } = await RickAndMortyApiInstance.get<TCharacter[]>(`/character/${SixRandomNumbers.join(',')}`)
        return data
    },
    async GetOneCharacter(id: number | string) {
        const { data } = await RickAndMortyApiInstance.get<TCharacter>(`/character/${id}`)
        return data
    },
    async GetAllCharacters() {
        const { data } = await RickAndMortyApiInstance.get<TAllCharacters>(`/character`)
        return data
    }
}