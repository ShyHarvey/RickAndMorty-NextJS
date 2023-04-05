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
    info: {
        count: number,
        pages: number,
        next: string | null,
        prev: string | null
    },
    results: TLocation[]
}