import Header from "./layout/Header";
import MobileLayout from "./layout/MobileLayout";
import Head from "next/head";
import { useEffect } from "react";

interface NaverMapProps {
	mapX: number,
	mapY: number
}
export default function Map({mapX, mapY}:NaverMapProps) {
	const initMap = () => {
		const map = new naver.maps.Map("map", {
			center: new naver.maps.LatLng(mapX, mapY),
			zoom: 13,
		});
		const mapMarker = new naver.maps.Marker({
			position: new naver.maps.LatLng(mapX, mapY),
			map: map,
		});
	};
	useEffect(() => {
		initMap();
	}, [mapX]);

	return (
		<>
			<Header />
			<Head>
				<script
					type="text/javascript"
					src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=oan7725a3j"
				></script>
			</Head>

			<MobileLayout>
				<div id="map" style={{ width: 192, height: 192, marginTop:50, marginLeft: 20 }}></div>
			</MobileLayout>
		</>
	);
}
