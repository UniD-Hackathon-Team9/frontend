import { PlaceByDay, PlaceWithState } from "../pick-places/types";
import NaverMap from "../../Navermap";
import Recommend from "../../Recommend";

interface SummaryProps {
    myPlaces: PlaceByDay
}
const Summary = ({myPlaces}:SummaryProps) => {
    return (
        <div className="w-screen">
            <NaverMap mapX={33.506} mapY={126.4917} className="w-full aspect-video" places={myPlaces[0]}  />
            {myPlaces.map((daily, day) => (daily.map((item, index) => <Recommend address={item.address} day={day + 1} index={index} name={item.name} tag={item.tags} key={day*10 + index}></Recommend>)))}
        </div>
    )
}

export default Summary;