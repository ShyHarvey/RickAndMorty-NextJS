import { TPageInfo } from "./PageInfoType";

export type TCharacter = {
    id: number,
    name: string,
    status: 'Alive' | 'Dead' | 'unknown',
    species: string,
    type: string | null,
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown',
    origin: {
        name: string;
        url: string;
    },
    location: {
        name: string;
        url: string;
    },
    image: string,
    episode: string[],
    url: string,
    created: string,
}

export type TOnePageOfCharacters = {
    info: TPageInfo,
    results: TCharacter[]
}


export type TGetOnePageArguments = {
    page: string,
    name?: string | null,
    status?: 'alive' | 'dead' | 'unknown' | null,
    gender?: 'female' | 'male' | 'genderless' | 'unknown' | null,
    species?: string | null,
    type?: string | null
}