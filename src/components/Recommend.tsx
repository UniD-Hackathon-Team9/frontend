import { STATES } from "./features/pick-places/types";

interface Props {
  day: number;
  index: number;
  name: string;
  address: string;
  tag: string[];
}

export default function Reccomend({ day, index, name, address, tag }: Props) {
  return (
    <div className="flex h-20 border-b-2 w-full border-gray-300">
      <div className="text-center border-r-2 border-gray-300 w-20">
        <p>{day}일차</p>
        <p>{STATES[index].name}</p>
      </div>
    </div>
  );
}
