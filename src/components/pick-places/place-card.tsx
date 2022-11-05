import { Place } from "../../interfaces/place.type"
import { SelectedPlaces } from "./type"

export interface PickPlaceCardProps {
    title: string
    recommends: Place[]
    togglePlace: (positionId: number, place:Place) => void
    selectedPlaces: SelectedPlaces
}

export const PickPlaceCard = ({title, recommends, togglePlace, selectedPlaces}: PickPlaceCardProps) => {
    return (
        <div className="border border-red-50">
            <p className="text-3xl">
                {title}
            </p>
        </div>
    )
}
