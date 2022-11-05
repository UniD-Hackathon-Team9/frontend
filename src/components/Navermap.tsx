import Header from "./layout/Header";
import MobileLayout from "./layout/MobileLayout";
import Head from "next/head";
import { useEffect } from "react";
import { Place } from "../interfaces/place.type"

interface NaverMapProps {
	mapX: number,
	mapY: number,
	className: string,
	places: Place[]
}
export default function Map({mapX, mapY, className, places}:NaverMapProps) {

	const initMap = () => {
		const map = new window.naver.maps.Map("map", {
			center: new window.naver.maps.LatLng(mapX, mapY),
			zoom: 13,
		});
		places.map((place, index) => {
			const coord = new window.naver.maps.Point(place.latitude, place.longitude)
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
	}, [mapX]);

	return (
		<div id="map" className={className}></div>
	);
}
