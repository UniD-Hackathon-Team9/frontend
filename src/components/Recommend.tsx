import { STATES } from "./features/pick-places/types";

interface Props {
  day: number;
  index: number;
  name: string;
  address: string;
  tag: string[];
}

export default function Recommend({ day, index, name, address, tag }: Props) {
  return (
    <div className="flex h-20 border-b-2 w-full border-gray-300">
      <div className="text-center border-r-2 border-gray-300 w-28 flex flex-col justify-center">
        <p className="font-bold">{day}일차</p>
        <p>{STATES[index].name}</p>
      </div>
      <div className="flex-1 ml-3 my-auto flex flex-col">
        <div className="font-bold">{name}</div>
        <div className="text-xs">{address}</div>
        <div>{tag.map((item, index) => (<span className={`text-sm rounded-full bg-${index%2 ? "green-400" : "orange-400"} text-white mr-1 px-2 py-0.5`}>{item}</span>))}</div>
      </div>
    </div>
  );
}
