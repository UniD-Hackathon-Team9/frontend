import { Personality } from "../../../interfaces/personality.type";
import { Preference } from "../../../interfaces/preference.type";
import Image from "next/image";
import Link from "next/link";

export interface ResultProps {
  personality: Personality;
  preferences: Preference[];
}
export default function Result({ personality, preferences }: ResultProps) {
  return (
    <div className="w-full p-6 flex flex-col">
      <h1 className="text-3xl font-bold text-center">
        당신의 여행 스타일은
        <br />
        <span style={{ color: personality.color }}>{personality.name}</span>
        입니다.
      </h1>
      <hr className="self-center w-11/12 mt-6 mb-4 h-0.5 bg-gray-300 border-0 " />
      <div className="self-center h-80 w-11/12 relative mb-3 cursor-pointer">
        <Image
          src={`/img/result/${personality.type}.png`}
          alt="result"
          layout="fill"
          objectFit="scale-down"
          className="rounded-xl"
        />
      </div>
      <p className="w-11/12 self-center text-lg">{personality.description}</p>
      <Link
        href={`/pick?personality=${personality.type}&preferences=${preferences
          .map((preference) => preference.id)
          .join(",")}`}
        className="text-center flex justify-center items-center text-xl h-20 mt-6 btn-secondary text-white font-bold py-2 px-4 rounded w-9/12 self-center mb-4"
      >
        나에게 딱 맞는
        <br /> 추천 코스 보러가기!
      </Link>
    </div>
  );
}
