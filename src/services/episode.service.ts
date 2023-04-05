import { TAllEpisodes } from "@/types/EpisodesType";
import { RickAndMortyApiInstance } from "./axiosInstance";



export const EpisodesService = {

    async GetAllEpisodes() {
        const { data } = await RickAndMortyApiInstance.get<TAllEpisodes>(`/episode`)
        return data
    }
}