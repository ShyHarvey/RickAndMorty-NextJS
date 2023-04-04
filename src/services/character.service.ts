import { GenerateSixRandomNumbers } from "@/helpers/SixRandomNumbers";
import { TCharacter } from "@/types/CharacterType";
import axios from "axios";

const API_URL = 'https://rickandmortyapi.com/api'

const apiInstance = axios.create({
    baseURL: API_URL
})

export const CharactersService = {
    async GetSixRandomCharacters() {
        const SixRandomNumbers = GenerateSixRandomNumbers()
        const { data } = await apiInstance.get<TCharacter[]>(`/character/${SixRandomNumbers.join(',')}`)
        return data
    }
}