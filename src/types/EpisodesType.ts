import { TPageInfo } from "./PageInfoType";

export type TEpisode = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

export type TAllEpisodes = {
    info: TPageInfo,
    results: TEpisode[]
}