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