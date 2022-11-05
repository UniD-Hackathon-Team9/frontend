import { Personality } from "../../../interfaces/personality.type"
import { Preference } from "../../../interfaces/preference.type"
import Image from "next/image"

export interface ResultProps {
    personality: Personality
    preferences: Preference[]
}
export default function Result({personality, preferences}:ResultProps){
    return (
        <div className="w-full p-6 flex flex-col">
          <h1 className="text-3xl font-bold text-center">
            당신의 여행 스타일은
            <br />
            <span style={{ color: personality.color }}>{personality.name}</span>
            입니다.
          </h1>
          <hr className="self-center w-11/12 mt-6 mb-8 h-0.5 bg-gray-300 border-0 " />
          <div className="self-center h-80 w-11/12 relative mb-6 cursor-pointer">
            <Image
              src={"/img/test/1_a.png"}
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <p className="w-11/12 self-center text-lg">
            {personality.description}
          </p>
        </div>
    )
}