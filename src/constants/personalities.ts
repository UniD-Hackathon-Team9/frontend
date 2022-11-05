import { Personality, PersonalityType } from "../interfaces/personality.type";

export const personalities: Personality[] = [
  {
    name: "돌하르방",
    type: PersonalityType.a,
    color: "#888888",
    keyword: ["힐링", "느긋", "치유"],
    description:
      "당신은 돌하르방 유형!\n여행의 목적은 힐링이며, 느긋하게 다니는 것을 좋아하고 힘든 여행은 딱 질색",
  },
  {
    name: "감귤",
    type: PersonalityType.b,
    color: "#F89B00",
    keyword: ["활발", "체험", "액티비티"],
    description:
      "당신은 감귤 유형! 활발하게 여행 다니는 것을 좋아하며 체험, 액티비티, 관광은 할 수 있다면 최대한 많이",
  },
  {
    name: "노을",
    type: PersonalityType.c,
    color: "#FD5e53",
    keyword: ["낭만", "감성", "feel"],
    description:
      "당신은 노을 유형!\n낭만에 죽고 낭만에 산다. 감성 사진은 물론이고 여행은 음악과 함께. 일출과 노을 코스는 필수",
  },
  {
    name: "흑돼지",
    color: "#F9A195",
    type: PersonalityType.d,
    keyword: ["맛집", "음식"],
    description:
      "당신은 흑돼지 유형! Food is my life. Life is food. 여행에서 남는 건 음식 뿐",
  },
  {
    name: "유채꽃",
    color: "#EACB1A",
    type: PersonalityType.e,
    keyword: ["밸런스"],
    description:
      "당신은 유채꽃 유형!\n다양한 여행 방식을 모두 선호하며 여행 당시의 기분에 따라 달라짐. 때로는 같이 가는 사람의 의견을 따르곤 함.",
  },
];

export const getPersonalityById = (type: PersonalityType) => {
  const found = personalities.find((p) => p.type === type);
  return found;
};
