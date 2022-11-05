import Header from "./layout/Header";
import MobileLayout from "./layout/MobileLayout";
import Head from "next/head";
import { useEffect } from "react";

export default function Map() {
	const initMap = () => {
		const map = new naver.maps.Map("map", {
			center: new naver.maps.LatLng(33.506, 126.4917),
			zoom: 15,
			zoomControl: true,
		});
		const mapMarker = new naver.maps.Marker({
			position: new naver.maps.LatLng(33.506, 126.4917),
			map: map,
		});
	};
	useEffect(() => {
		initMap();
	}, []);

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
				<div id="map" style={{ width: "80%", height: "50%" }}></div>
			</MobileLayout>
		</>
	);
}
