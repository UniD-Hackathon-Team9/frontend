import { useEffect, useState } from "react"
import { useSwiper } from "swiper/react"
import { Place } from "../../../interfaces/place.type"
import { RecommendPlacesDto } from "../../../interfaces/places.recommends.dto"
import Map from "../../Navermap"
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
        <div className="max-w-full p-6" style={{
            maxHeight: "calc(100vh - 56px)"
        }}>
            <p className="text-3xl font-800 mb-4">
                {title} {STATES[state].name}
            </p>
            <div className="flex flex-row flex-1 w-full">
                {selectedPlace ? (
                    <>
                        <div className="w-32 h-32 rounded bg-green-50">
                            <Map places={[]} mapX={selectedPlace.longitude} mapY={selectedPlace.latitude} className="w-full h-full" />
                        </div>
                        <div className="flex flex-col justify-center ml-4">
                            <p className="text-lg font-semibold">
                                {selectedPlace.name}
                            </p>
                            <p className="text-sm text-gray-500">
                                {selectedPlace.address}
                            </p>
                        </div>
                    </>
                ) : (
                    <div className="flex justify-center items-center w-full h-32">
                        <p className="text-xl">
                            방문하고 싶은 {typeNameOf[STATES[state].type]}을 선택해보세요!
                        </p>
                    </div>
                )}
            </div>
            <div className="max-h-full h-96">
                <RecommendList 
                    selectedRecommendId={selectedPlace ? selectedPlace.id : null}
                    recommends={recommends}
                    type={STATES[state].type}
                    onClickRecommend={setSelectedPlace} 
                />
            </div>
            <div className="flex flex-1 flex-row justify-around items-center fixed bottom-0 left-0 right-0 px-6 py-8" style={{
                flex: "0 0 auto"
            }}>
                <button disabled={state === 0} className="btn-primary-outline flex-1" onClick={toPrev}>
                    이전
                </button>
                <span className="w-8" />
                <button className={`btn-${selectedPlace ? "primary" : "primary-outline"} flex-1`} onClick={toNext}>
                    {selectedPlace ? "다음" : "패스할래요"}
                </button>
            </div>
        </div>
    )
}
