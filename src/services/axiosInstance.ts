import axios from "axios";

export const API_URL = 'https://rickandmortyapi.com/api'

export const RickAndMortyApiInstance = axios.create({
    baseURL: API_URL
})