import { NextPage } from "next";
import Link from "next/link";
import Header from "../components/layout/Header";
import MobileLayout from "../components/layout/MobileLayout";
import PickPlaces from "../components/pick-places";
import { Place } from "../interfaces/place.type";

const MockPlaces:Place[] = [
    {
        id: 1,
        name: "장소 제목입니다.",
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
        name: "장소 제목입니다.",
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
        name: "장소 제목입니다.",
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
        name: "장소 제목입니다.",
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
    food: MockPlaces,
    cafe: MockPlaces,
    spots: MockPlaces,
}

const PickPage:NextPage = () => {
    return (
        <div>
            <Header />
            <MobileLayout>
                <PickPlaces {...mockFetched} />
            </MobileLayout>
        </div>
    )
}

export default PickPage;