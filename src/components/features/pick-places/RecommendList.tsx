import { Place } from "../../../interfaces/place.type"
import { StateType } from "./types"
import { FiCheck } from "react-icons/fi"
import { RecommendPlacesDto } from "../../../interfaces/places.recommends.dto";

interface RecommendListProps {
    selectedRecommendId: number | null;
    recommends: RecommendPlacesDto
    type: StateType
    onClickRecommend: (place: Place) => void
}

export const RecommendList = ({selectedRecommendId, recommends, type, onClickRecommend}:RecommendListProps) => {
    const list = type === "Food" ? recommends.food : [...recommends.cafe, ...recommends.spots]
    return (
        <div className="border-b my-6 max-h-80 overflow-scroll">
            {list.map((rec) => (
                <div key={rec.id} className="p-2 border-t flex flex-row justify-between items-center">
                    <div onClick={() => onClickRecommend(rec)}>
                        <p>{rec.name}</p>
                        <p>{rec.description}</p>
                    </div>
                    {selectedRecommendId === rec.id && (
                        <FiCheck color="#03C04A" size={32} />
                    )}
                </div>
            ))}
        </div>
    )
}