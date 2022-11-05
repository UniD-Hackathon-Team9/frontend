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
		const mapMarker = new window.naver.maps.Marker({
			position: new window.naver.maps.LatLng(mapX, mapY),
			map: map,
		});
	};

	useEffect(() => {
		initMap();
	}, [mapX]);

	return (
		<div id="map" className={className}></div>
	);
}
