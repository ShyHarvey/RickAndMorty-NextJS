import { TPageInfo } from "./PageInfoType";

export type TLocation = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}

export type TAllLocations = {
    info: TPageInfo,
    results: TLocation[]
}