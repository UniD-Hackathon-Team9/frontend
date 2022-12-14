import { Place } from "../../../interfaces/place.type"
import { StateType } from "./types"
import { FiCheck } from "react-icons/fi"
import { RecommendPlacesDto } from "../../../interfaces/places.recommends.dto";
import { Tag } from "../../Tag";

interface RecommendListProps {
    selectedRecommendId: number | null;
    recommends: RecommendPlacesDto
    type: StateType
    onClickRecommend: (place: Place) => void
}

export const RecommendList = ({selectedRecommendId, recommends, type, onClickRecommend}:RecommendListProps) => {
    const list = type === "Food" ? recommends?.food : [...recommends.cafe, ...recommends.spots]
    return (
        <div className="border-b my-6 overflow-y-scroll flex-col" style={{maxHeight: "300px"}}>
            {list?.map((rec) => (
                <div onClick={() => onClickRecommend(rec)} key={rec.id} className="cursor-pointer px-2 py-4 border-t flex flex-row flex-1 justify-between items-center">
                    <div className="flex flex-1 flex-col">
                        <p className="text-md font-semibold">{rec.name}</p>
                        <p className="text-sm text-gray-500">{rec.address}</p>
                        <div className="mt-1">
                            {rec.tags.map((item) => (
                                <Tag key={item}>{item}</Tag>
                            ))}
                        </div>
                    </div>
                    {selectedRecommendId === rec.id && (
                        <FiCheck color="#03C04A" size={32} />
                    )}
                </div>
            ))}
        </div>
    )
}