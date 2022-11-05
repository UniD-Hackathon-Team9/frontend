import "swiper/css";
import { Place } from "../../../interfaces/place.type";
import { Swiper, SwiperSlide } from "swiper/react";
import { PickPlaceCard } from "./place-card";
import { PlaceByDay } from "./types";
import { RecommendPlacesDto } from "../../../interfaces/places.recommends.dto";

export interface PickPlacesProps {
    recommends: RecommendPlacesDto
    myPlaces: PlaceByDay
    addPlace: (day: number, place: Place, state: number) => void,
    toSummary: () => void
}   


const PickPlaces = ({recommends, toSummary, myPlaces, addPlace}:PickPlacesProps) => {
    return (
        <div className="w-screen h-full">
            <Swiper className="h-full">
                {myPlaces.map((places, id) => (
                    <SwiperSlide key={id}>
                        <PickPlaceCard 
                            day={id}
                            lastDay={myPlaces.length - 1}
                            title={`${id + 1}일차`}
                            recommends={recommends}
                            myPlaces={places}
                            addPlace={addPlace}
                            toResult={toSummary}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default PickPlaces