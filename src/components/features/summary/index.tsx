import { PlaceByDay } from "../pick-places/types";
import NaverMap from "../../Navermap";

interface SummaryProps {
    myPlaces: PlaceByDay
}
const Summary = ({myPlaces}:SummaryProps) => {

    const places = {
        "food": [
            {
                "id": 29,
                "name": "새빌",
                "placeType": "FOOD",
                "latitude": 247864,
                "longtitude": 86605,
                "address": "제주 제주시",
                "region": {
                    "small": "애월읍",
                    "large": "제주시",
                    "position": "4"
                },
                "tags": [
                    "힐링"
                ]
            },
            {
                "id": 18,
                "name": "호텔샌드",
                "placeType": "FOOD",
                "latitude": 236502,
                "longtitude": 90064,
                "address": "제주 제주시",
                "region": {
                    "small": "한림읍",
                    "large": "제주시",
                    "position": "4"
                },
                "tags": [
                    "감성",
                    "오션뷰"
                ]
            },
            {
                "id": 27,
                "name": "해송수산물회센타",
                "placeType": "FOOD",
                "latitude": 244074,
                "longtitude": 97983,
                "address": "제주 제주시",
                "region": {
                    "small": "애월읍",
                    "large": "제주시",
                    "position": "4"
                },
                "tags": [
                    "회",
                    "술"
                ]
            },
            {
                "id": 30,
                "name": "우영담",
                "placeType": "FOOD",
                "latitude": 243713,
                "longtitude": 97759,
                "address": "제주 제주시",
                "region": {
                    "small": "애월읍",
                    "large": "제주시",
                    "position": "4"
                },
                "tags": [
                    "맛집",
                    "전복"
                ]
            },
            {
                "id": 1,
                "name": "도민상회 제주협재한림본점",
                "placeType": "FOOD",
                "latitude": 238372,
                "longtitude": 92177,
                "address": "제주 제주시",
                "region": {
                    "small": "한림읍",
                    "large": "제주시",
                    "position": "4"
                },
                "tags": [
                    "맛집",
                    "술"
                ]
            }
        ],
        "cafe": [
            {
                "id": 19,
                "name": "<b>카페</b>이면",
                "placeType": "CAFE",
                "latitude": 235198,
                "longtitude": 89502,
                "address": "제주 제주시",
                "region": {
                    "small": "한림읍",
                    "large": "제주시",
                    "position": "4"
                },
                "tags": [
                    "감성",
                    "오션뷰"
                ]
            },
            {
                "id": 20,
                "name": "스타벅스 제주협재점",
                "placeType": "CAFE",
                "latitude": 236504,
                "longtitude": 90058,
                "address": "제주 제주시",
                "region": {
                    "small": "한림읍",
                    "large": "제주시",
                    "position": "4"
                },
                "tags": [
                    "감성",
                    "오션뷰"
                ]
            }
        ],
        "spots": [
            {
                "id": 24,
                "name": "한림공원",
                "placeType": "SPOT",
                "latitude": 236476,
                "longtitude": 89565,
                "address": "제주 제주시",
                "region": {
                    "small": "한림읍",
                    "large": "제주시",
                    "position": "4"
                },
                "tags": [
                    "힐링",
                    "체험",
                    "가든뷰"
                ]
            },
            {
                "id": 23,
                "name": "제주맥주",
                "placeType": "SPOT",
                "latitude": 236505,
                "longtitude": 86134,
                "address": "제주 제주시",
                "region": {
                    "small": "한림읍",
                    "large": "제주시",
                    "position": "4"
                },
                "tags": [
                    "체험",
                    "오션뷰"
                ]
            },
            {
                "id": 21,
                "name": "금능해수욕장",
                "placeType": "SPOT",
                "latitude": 235939,
                "longtitude": 89572,
                "address": "제주 제주시",
                "region": {
                    "small": "한림읍",
                    "large": "제주시",
                    "position": "4"
                },
                "tags": [
                    "감성",
                    "오션뷰"
                ]
            },
            {
                "id": 22,
                "name": "금오름",
                "placeType": "SPOT",
                "latitude": 242513,
                "longtitude": 85602,
                "address": "제주 제주시",
                "region": {
                    "small": "한림읍",
                    "large": "제주시",
                    "position": "4"
                },
                "tags": [
                    "감성",
                    "오션뷰"
                ]
            }
        ]
    }

    return (
        <div className="w-screen">
            <NaverMap mapX={33.506} mapY={126.4917} className="w-full aspect-video" places={}  />

            {/* <Recommend day,  /> */}
        </div>
    )
}

export default Summary;