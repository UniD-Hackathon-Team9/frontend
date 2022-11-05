import Header from "./layout/Header";
import MobileLayout from "./layout/MobileLayout";

export default function Map() {
	return (
		<>
			<Header />
			<MobileLayout>
				<div
					id="map"
					className="flex w-full -center content-center"
				></div>
				<script
					type="text/javascript"
					src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=oan7725a3j"
				></script>
			</MobileLayout>
		</>
	);
}
