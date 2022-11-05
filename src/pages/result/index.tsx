import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import Header from "../../components/layout/Header";
import MobileLayout from "../../components/layout/MobileLayout";
import {
  getPersonalityById,
  personalities,
  preferences,
} from "../../constants";
import {
  Personality,
  PersonalityType,
} from "../../interfaces/personality.type";

interface ResultQuery {
  preference: number; // preferenceId
  personality: PersonalityType;
}
const _preferences = preferences.map((p) => p.id);
const _personalities = personalities.map((p) => p.type);

const Result: NextPage = (props) => {
  const router = useRouter();
  const preferenceId = Number(router.query.preference);
  const personalityId = router.query.personality as unknown as PersonalityType;

  console.log(preferenceId);
  console.log(personalityId);

  useEffect(() => {
    // if(!_preferences.includes(preferenceId)
    //     || !_personalities.includes(personalityId)
    // ){
    //     router.push('/');
    // }
  }, []);
  /*
  const personality: Personality = useMemo(
    () => getPersonalityById(personalityId),
    [personalityId]
  );
  */
  const personality: Personality = {
    name: "돌하르방",
    type: "a",
    keyword: ["d"],
    description:
      "당신은 멋쟁이 돌하르방 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려가ㅣㅇ산 대한사람 대한으로 길이 보전하세",
    color: "red",
  };

  console.log(personality);

  return (
    <div>
      <Header />
      <MobileLayout>
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
      </MobileLayout>
    </div>
  );
};

export default Result;
