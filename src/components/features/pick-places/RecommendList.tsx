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
        <div className="border-b my-6 overflow-scroll max-h-full flex-col">
            {list.map((rec) => (
                <div key={rec.id} className="p-2 border-t flex flex-row flex-1 justify-between items-center">
                    <div onClick={() => onClickRecommend(rec)}>
                        <p className="text-md font-semibold">{rec.name}</p>
                        <p className="text-sm text-gray-500">{rec.address}</p>
                    </div>
                    {selectedRecommendId === rec.id && (
                        <FiCheck color="#03C04A" size={32} />
                    )}
                </div>
            ))}
        </div>
    )
}