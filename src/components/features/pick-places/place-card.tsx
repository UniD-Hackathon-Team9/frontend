import { useEffect, useState } from "react"
import { useSwiper } from "swiper/react"
import { Place } from "../../../interfaces/place.type"
import { RecommendPlacesDto } from "../../../interfaces/places.recommends.dto"
import { RecommendList } from "./RecommendList"
import { PlaceWithState, STATES, typeNameOf } from "./types"

export interface PickPlaceCardProps {
    day: number
    lastDay: number
    title: string
    recommends: RecommendPlacesDto
    myPlaces: PlaceWithState[]
    addPlace: (day: number, place:Place, state: number) => void
    toResult: () => void
    // removePlace: (day: number, placeId:number) => void
}



export const PickPlaceCard = ({day, title, recommends, myPlaces, addPlace, lastDay, toResult}: PickPlaceCardProps) => {
    const [state, setState] = useState<number>(0);
    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null)
    const swiper = useSwiper();
    useEffect(() => {
        swiper.allowSlideNext = false;
    },[])

    const toPrev = () => {
        if(state === 0) return;
        swiper.slidePrev();
        setSelectedPlace(myPlaces.find(p => p.state === state - 1) ?? null);
        setState(prev => prev -1);
    }
    const toNext = () => {
        setSelectedPlace(null);
        if(selectedPlace)addPlace(day, selectedPlace, state);

        if(state < STATES.length - 1) setState(p => p + 1);
        else if(day === lastDay) toResult();
        else swiper.slideNext();
    }

    return (
        <div className="w-full p-6" style={{
            maxHeight: "calc(100vh - 56px)"
        }}>
            <p className="text-3xl font-800 mb-4">
                {title} {STATES[state].name}
            </p>
            <div style={{aspectRatio: "5/2"}} className="flex flex-row">
                {selectedPlace ? (
                    <>
                        <div className="w-48 h-48 rounded bg-green-50">
                            지도
                        </div>
                        <div className="flex flex-col justify-center ml-4">
                            <p className="text-xl font-semibold">
                                {selectedPlace?.name}
                            </p>
                            <p className="text-lg">
                                {selectedPlace?.description}
                            </p>
                        </div>
                    </>
                ) : (
                    <div className="flex justify-center items-center w-full h-full">
                        <p className="text-xl">
                            방문하고 싶은 {typeNameOf[STATES[state].type]}을 선택해보세요!
                        </p>
                    </div>
                )}
            </div>
            <RecommendList 
                selectedRecommendId={selectedPlace ? selectedPlace.id : null}
                recommends={recommends}
                type={STATES[state].type}
                onClickRecommend={setSelectedPlace} 
            />
            <div className="flex flex-row justify-around items-center h-full">
                <button disabled={state === 0} className="btn-primary-outline w-48" onClick={toPrev}>
                    이전
                </button>
                <button className={`btn-${selectedPlace ? "primary" : "primary-outline"} w-48`} onClick={toNext}>
                    {selectedPlace ? "다음" : "패스할래요"}
                </button>
            </div>
        </div>
    )
}
