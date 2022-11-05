import { NextPage } from "next";
import { useState } from "react";
import Header from "../components/layout/Header";
import MobileLayout from "../components/layout/MobileLayout";
import PickPlaces from "../components/features/pick-places";
import { PlaceByDay, PlaceWithState } from "../components/features/pick-places/types";
import { Place } from "../interfaces/place.type";
import Summary from "../components/features/summary";

const MockPlace1:Place[] = [
    {
        id: 1,
        name: "장소 1입니다.",
        description: "그냥 설명 들어갈자리",
        region: {
            region_large: "제주시",
            region_small: "노형동"
        },
        latitude: 33.483098,
        longitude: 126.4772312
    },
    {
        id: 2,
        name: "장소 2입니다.",
        description: "그냥 설명 들어갈자리",
        region: {
            region_large: "제주시",
            region_small: "노형동"
        },
        latitude: 33.483098,
        longitude: 126.4772312
    },
    {
        id: 3,
        name: "장소 3입니다.",
        description: "그냥 설명 들어갈자리",
        region: {
            region_large: "제주시",
            region_small: "노형동"
        },
        latitude: 33.483098,
        longitude: 126.4772312
    },
    {
        id: 4,
        name: "장소 4입니다.",
        description: "그냥 설명 들어갈자리",
        region: {
            region_large: "제주시",
            region_small: "노형동"
        },
        latitude: 33.483098,
        longitude: 126.4772312
    },
]
const MockPlace2:Place[] = [
    {
        id: 5,
        name: "장소 5입니다.",
        description: "그냥 설명 들어갈자리",
        region: {
            region_large: "제주시",
            region_small: "노형동"
        },
        latitude: 33.483098,
        longitude: 126.4772312
    },
    {
        id: 6,
        name: "장소 6입니다.",
        description: "그냥 설명 들어갈자리",
        region: {
            region_large: "제주시",
            region_small: "노형동"
        },
        latitude: 33.483098,
        longitude: 126.4772312
    },
    {
        id: 7,
        name: "장소 7입니다.",
        description: "그냥 설명 들어갈자리",
        region: {
            region_large: "제주시",
            region_small: "노형동"
        },
        latitude: 33.483098,
        longitude: 126.4772312
    },
    {
        id: 8,
        name: "장소 8입니다.",
        description: "그냥 설명 들어갈자리",
        region: {
            region_large: "제주시",
            region_small: "노형동"
        },
        latitude: 33.483098,
        longitude: 126.4772312
    },
]
const MockPlace3:Place[] = [
    {
        id: 9,
        name: "장소 9입니다.",
        description: "그냥 설명 들어갈자리",
        region: {
            region_large: "제주시",
            region_small: "노형동"
        },
        latitude: 33.483098,
        longitude: 126.4772312
    },
    {
        id: 10,
        name: "장소 10입니다.",
        description: "그냥 설명 들어갈자리",
        region: {
            region_large: "제주시",
            region_small: "노형동"
        },
        latitude: 33.483098,
        longitude: 126.4772312
    },
    {
        id: 11,
        name: "장소 11입니다.",
        description: "그냥 설명 들어갈자리",
        region: {
            region_large: "제주시",
            region_small: "노형동"
        },
        latitude: 33.483098,
        longitude: 126.4772312
    },
    {
        id: 12,
        name: "장소 12입니다.",
        description: "그냥 설명 들어갈자리",
        region: {
            region_large: "제주시",
            region_small: "노형동"
        },
        latitude: 33.483098,
        longitude: 126.4772312
    },
]

const mockFetched = {
    food: MockPlace1,
    cafe: MockPlace2,
    spots: MockPlace3,
}

const useSelectPlaces = ():[
    PlaceByDay,
    (day: number, place: Place, state: number) => void,
    // (day: number, placeId: number) => void
] => {
    const [selectedPlaces, setSelectedPlaces] = useState<PlaceByDay>([[],[],[]]);
    const addPlace = (day: number, place: Place, state: number) => {
        setSelectedPlaces(prev => {
            const dayPlaces:PlaceWithState[] = [...prev[day], {...place, state}];
            return [
                ...prev.slice(0, day),
                dayPlaces,
                ...prev.slice(day+1)
            ] as PlaceByDay
        })
    }
    // const removePlace = (day: number, placeId: number) => {
    //     setSelectedPlaces(prev => {
    //         const placeIndex = prev[day].findIndex(p => p.id === placeId);
    //         if(placeIndex === -1) return prev;
    //         const dayPlaces = [
    //             ...prev[day].slice(0, placeIndex),
    //             ...prev[day].slice(placeIndex + 1),
    //         ];
    //         return [
    //             ...prev.slice(0, day),
    //             dayPlaces,
    //             ...prev.slice(day+1)
    //         ] as PlaceByDay
    //     })
    // }
    return [selectedPlaces, addPlace];
    // return [selectedPlaces, addPlace, removePlace];
}

const PickPage:NextPage = () => {
    const [myPlaces, addPlace] = useSelectPlaces();
    // const [myPlaces, addPlace, removePlace] = useSelectPlaces();

    const [summary, setSummary] = useState<boolean>(false);
    const toSummary = () => setSummary(true);
    const backToPick = () => setSummary(false);
    return (
        <div>
            <Header />
            <MobileLayout>
                {summary ? (
                    <Summary myPlaces={myPlaces}/>
                ) : (
                    <PickPlaces 
                        toSummary={toSummary} 
                        recommends={mockFetched}
                        myPlaces={myPlaces}
                        addPlace={addPlace}
                    />
                )}
            </MobileLayout>
        </div>
    )
}

export default PickPage;