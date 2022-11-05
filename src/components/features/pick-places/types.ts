import { Place } from "../../../interfaces/place.type"

export type PlaceByDay = [PlaceWithState[], PlaceWithState[], PlaceWithState[]];
export type StateType = "Food" | "Visit";  // visit = cafe + spot
export interface State {
    index: number
    name: string
    type: StateType
}

export const STATES:State[] = [
    {index: 0, name: "아침", type: "Food"},
    {index: 1, name: "오전 일정", type: "Visit"},
    {index: 2, name: "점심", type: "Food"},
    {index: 3, name: "오후 일정", type: "Visit"},
    {index: 4, name: "저녁", type: "Food"},
    {index: 5, name: "저녁 일정", type: "Visit"},
    {index: 6, name: "야식", type: "Food"},
]

export const typeNameOf = {
    Food: "식당",
    Visit: "카페/볼거리"
}
export interface PlaceWithState extends Place {
    state: number
}