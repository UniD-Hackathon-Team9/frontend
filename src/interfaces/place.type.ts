export interface Region {
    region_small: string
    region_large: string
}

export interface Place {
    id: number
    name: string
    description: string
    region: Region
    latitude: number
    longitude: number
}