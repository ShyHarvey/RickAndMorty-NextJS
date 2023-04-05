import { RickAndMortyApiInstance } from "./axiosInstance";
import { TAllLocations } from "@/types/LocationType";


export const LocationsService = {

    async GetAllLocations() {
        const { data } = await RickAndMortyApiInstance.get<TAllLocations>(`/location`)
        return data
    }
}