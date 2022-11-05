export interface Region {
    region_small: string
    region_large: string
    position: string
}

export interface Place {
    id: number
    name: string
    address: string
    placeType: string
    latitude: number
    longitude: number
    region: Region
    tags: string[]
}