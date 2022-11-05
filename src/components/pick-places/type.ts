import { Place } from "../../interfaces/place.type"

export type PlaceOrNull = Place | null
export type SelectedPlaces = [
    PlaceOrNull, PlaceOrNull, PlaceOrNull,  // 1일차 아 - 점 - 저
    PlaceOrNull, PlaceOrNull, PlaceOrNull,  // 2일차 아 - 점 - 저
    PlaceOrNull, PlaceOrNull, PlaceOrNull,  // 3일차 아 - 점 - 저
]