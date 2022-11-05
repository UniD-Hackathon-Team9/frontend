import Header from "./layout/Header";
import MobileLayout from "./layout/MobileLayout";
import Head from "next/head";
import { useEffect } from "react";

interface NaverMapProps {
	mapX: number,
	mapY: number,
	className: string
}
export default function Map({mapX, mapY, className}:NaverMapProps) {
	const initMap = () => {
		const map = new window.naver.maps.Map("map", {
			center: new window.naver.maps.LatLng(mapX, mapY),
			zoom: 13,
		});
	
		const marker = new window.naver.maps.Marker({
					position: window.naver.maps.TransCoord.fromTM128ToLatLng(new window.naver.maps.Point(238372, 92177)),
					map: map,
					animation: 2,
		});
		// travelapp_place.map((place, index)=> {
		// 	new window.naver.maps.Marker({
		// 		position: new naver.maps.Point(place.latitude, place.longitude),
		// 		map: map,
		// 		animation: 1,
		// 		icon: (index+1).toString()
		// 	});
		// })
	};

	useEffect(() => {
		initMap();
	}, [mapX]);

	return (
		<div id="map" className={className}></div>
	);
}
