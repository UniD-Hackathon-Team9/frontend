import "swiper/css";
import { useState } from "react"
import { Place } from "../../interfaces/place.type";
import { SelectedPlaces } from "./type"
import { Swiper, SwiperSlide } from "swiper/react";
import { PickPlaceCard } from "./place-card";

interface PickPlacesProps {
    food: Place[]
    cafe: Place[]
    spots: Place[]
}

const defaultPlaces:SelectedPlaces = [null, null, null, null, null, null, null, null, null];
const useSelectPlaces = ():[SelectedPlaces, (positionId: number, place?: Place) => void] => {
    const [selectedPlaces, setSelectedPlaces] = useState<SelectedPlaces>(defaultPlaces);
    const togglePlace = (positionId: number, place?: Place) => {
        setSelectedPlaces(prev => {
            const places:SelectedPlaces = [...prev];
            if(place && !places[positionId]) places[positionId] = place;
            else places[positionId] = null;
            return places;
        })
    }
    return [selectedPlaces, togglePlace]
}

const PickPlaces = ({food, cafe, spots}:PickPlacesProps) => {
    const [foodSelectedPlaces, toggleFoodSelectedPlaces] = useSelectPlaces();
    const [cafeSelectedPlaces, toggleCafeSelectedPlaces] = useSelectPlaces();
    const [spotSelectedPlaces, toggleSpotSelectedPlaces] = useSelectPlaces();
    return (
        <div>
            {/* <Swiper>
                <SwiperSlide key={0} >
                    <PickPlaceCard 
                        title="식당"
                        recommends={food}
                        selectedPlaces={foodSelectedPlaces}
                        togglePlace={toggleFoodSelectedPlaces}
                    />
                </SwiperSlide>
                <SwiperSlide key={1}>
                    <PickPlaceCard 
                        title="카페"
                        recommends={cafe}
                        selectedPlaces={cafeSelectedPlaces}
                        togglePlace={toggleCafeSelectedPlaces}
                    />
                </SwiperSlide>
                <SwiperSlide key={2}>
                    <PickPlaceCard 
                        title="식당"
                        recommends={food}
                        selectedPlaces={spotSelectedPlaces}
                        togglePlace={toggleSpotSelectedPlaces}
                    />
                </SwiperSlide>
            </Swiper> */}
        </div>
    )
}

export default PickPlaces