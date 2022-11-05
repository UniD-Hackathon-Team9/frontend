import { PlaceByDay, PlaceWithState } from "../pick-places/types";
import NaverMap from "../../Navermap";

interface SummaryProps {
    myPlaces: PlaceByDay
}
const Summary = ({myPlaces}:SummaryProps) => {

    return (
        <div className="w-screen">
            <NaverMap mapX={33.506} mapY={126.4917} className="w-full aspect-video" places={myPlaces[0]}  />
            {/* <Recommend day,  /> */}
        </div>
    )
}

export default Summary;