import { useEffect } from "react";
import { PlaceWithState } from "./features/pick-places/types";

interface NaverMapProps {
	mapX: number,
	mapY: number,
	className: string,
	places: PlaceWithState[]
}
export default function Map({mapX, mapY, className, places}:NaverMapProps) {
	console.log("places:", places)
	const initMap = () => {
		const map = new window.naver.maps.Map("map", {
			center: new window.naver.maps.LatLng(mapX, mapY),
			zoom: 13,
		});
		places.map((place, index) => {
			const coord = new window.naver.maps.Point(place.latitude, place.longtitude)
			console.log("Coord를 출력해볼까:", coord)
			new window.naver.maps.Marker({
				position: window.naver.maps.TransCoord.fromTM128ToLatLng(coord),
				map: map,
				animation: 2,
				icon: (index + 1).toString()
			});
		})
	};

	useEffect(() => {
		initMap();
	}, []);

	return (
		<div id="map" className={className}></div>
	);
}
