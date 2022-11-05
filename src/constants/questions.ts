import { Question } from "../interfaces/question.type";
import { preferences } from "./preferences";

/* personality */
// a. 돌하르방
// b. 감귤
// c. 노을
// d. 흑돼지
// e. 유채꽃
// [a, b, c, d, e]

export const questions: Question[] = [
  // 1
  {
    index: 1,
    title: "여행 가기 전 나는 ..",
    first: {
      title: "계획? 일단 가는거지",
      image: "/img/test/1_a.png",
      personality: [0, 0, 2, 0, 0],
      preference: null,
    },
    second: {
      title: "세부적인 계획은 필수!",
      image: "/img/test/1_b.png",
      personality: [0, 0, 2, 0, 0],
      preference: null, // 선호 유형 관계 없는 경우
    },
    none: {
      title: "상관 없음",
      image: "",
      personality: [0, 0, 0, 0, 2],
      preference: null,
    },
  },
  // 2
  {
    index: 2,
    title: "식당과 숙소를 예약할 때 나는 ..",
    first: {
      title: "돈 조금 더 쓰더라도 좋은 곳과 맛있는 음식",
      image: "/img/test/2_a.png",
      personality: [2, 0, 2, 3, 0],
      preference: null,
    },
    second: {
      title: "돈은 절약할 수 있는 만큼 절약",
      image: "/img/test/2_b.png",
      personality: [0, 0, 0, 0, 0],
      preference: null,
    },
    none: {
      title: "상관 없음",
      image: "",
      personality: [0, 0, 0, 0, 2],
      preference: null,
    },
  },
  // 3
  {
    index: 3,
    title: "여행을 가는 나의 목적은 ..",
    first: {
      title: "관광보다는 조용한 휴식을 즐기며",
      image: "/img/test/3_a.png",
      personality: [2, 0, 2, 1, 0],
      preference: preferences[7],
    },
    second: {
      title: "명소 관광은 물론, 할 수 있는 액티비티는 다 해야지",
      image: "/img/test/3_b.png",
      personality: [0, 3, 0, 2, 0],
      preference: preferences[6],
    },
    none: {
      title: "상관 없음",
      image: "",
      personality: [0, 0, 0, 0, 2],
      preference: null,
    },
  },
  // 4
  {
    index: 4,
    title: "새벽이 되면 ..",
    first: {
      title: "평소 고민과 못다한 이야기를 털어놓는다",
      image: "/img/test/4_a.png",
      personality: [2, 0, 3, 0, 0],
      preference: preferences[7],
    },
    second: {
      title: "왁자지껄, 시끌벅적. 텐션 UP!",
      image: "/img/test/4_b.png",
      personality: [0, 3, 0, 0, 0],
      preference: preferences[6],
    },
    none: {
      title: "상관 없음",
      image: "",
      personality: [0, 0, 0, 0, 2],
      preference: null,
    },
  },
  // 5
  {
    index: 5,
    title: "여행 다닐 때 나는 ..",
    first: {
      title: "여유롭게 둘러보며 유연하게 일정 맞추기",
      image: "/img/test/5_a.png",
      personality: [2, 0, 2, 0, 0],
      preference: preferences[7],
    },
    second: {
      title: "여행 온 김에 많은 것을 둘러보고 체험하기",
      image: "/img/test/5_b.png",
      personality: [0, 0, 3, 2, 0],
      preference: preferences[6],
    },
    none: {
      title: "상관 없음",
      image: "",
      personality: [0, 0, 0, 0, 2],
      preference: null,
    },
  },
  // 6
  {
    index: 6,
    title: "여행 중에 지출 발생! 이때 나는 ..",
    first: {
      title: "바로 계산해서 기록",
      image: "/img/test/6_a.png",
      personality: [0, 1, 0, 0, 0],
      preference: null,
    },
    second: {
      title: "우선 쓰고 나중에 체크",
      image: "/img/test/6_b.png",
      personality: [1, 0, 0, 1, 0],
      preference: null,
    },
    none: {
      title: "상관 없음",
      image: "",
      personality: [0, 0, 0, 0, 2],
      preference: null,
    },
  },
  // 7
  {
    index: 7,
    title: "다음 갈 장소는 어디지?",
    first: {
      title: "계획대로 ㄱㄱ",
      image: "/img/test/7_a.png",
      personality: [0, 0, 0, 2, 0],
      preference: null,
    },
    second: {
      title: "저기 괜찮아 보이는데? 저기로 가자!",
      image: "/img/test/7_b.png",
      personality: [2, 0, 2, 0, 0],
      preference: null,
    },
    none: {
      title: "상관 없음",
      image: "",
      personality: [0, 0, 0, 0, 2],
      preference: null,
    },
  },
  // 8
  {
    index: 8,
    title: "여행 중 틈틈이 나는 ..",
    first: {
      title: "스마트폰은 내 사랑. 인스타 스토리 업로드는 덤!",
      image: "/img/test/8_a.png",
      personality: [0, 2, 0, 1, 0],
      preference: null,
    },
    second: {
      title: "여행까지 왔는데 휴대폰은 무슨! 자연을 느끼자",
      image: "/img/test/8_b.png",
      personality: [2, 0, 0, 1, 0],
      preference: null,
    },
    none: {
      title: "상관 없음",
      image: "",
      personality: [0, 0, 0, 0, 2],
      preference: null,
    },
  },
  // 9
  {
    index: 9,
    title: "여행에서 돌아온 나는 …",
    first: {
      title: "짐 정리와 사진 정리는 나중에 .. 우선 침대로",
      image: "/img/test/9_a.png",
      personality: [2, 0, 0, 0, 0],
      preference: preferences[7],
    },
    second: {
      title: "할 일을 다 하고 편하게 쉬자! 인스타 업로드는 바로!",
      image: "/img/test/9_b.png",
      personality: [0, 2, 0, 0, 0],
      preference: preferences[6],
    },
    none: {
      title: "상관 없음",
      image: "",
      personality: [0, 0, 0, 0, 2],
      preference: null,
    },
  },
  // 10
  {
    index: 10,
    title: "숙소와 음식점의 창문으로는 ..",
    first: {
      title: "탁 트인 바다가 보인다",
      image: "/img/test/10_a.png",
      personality: [0, 0, 0, 0, 0],
      preference: preferences[1],
    },
    second: {
      title: "초록초록 파릇파릇",
      image: "/img/test/10_b.png",
      personality: [0, 0, 0, 0, 0],
      preference: preferences[0],
    },
    none: {
      title: "상관 없음",
      image: "",
      personality: [0, 0, 0, 0, 1],
      preference: null,
    },
  },
  // 11
  {
    index: 11,
    title: "갈 수 있는 카페가 여러개? 그렇다면 ..",
    first: {
      title: "다 필요 없어! 인스타 업로드용 예쁘고 감성 카페로",
      image: "/img/test/11_a.png",
      personality: [0, 0, 0, 0, 0],
      preference: preferences[2],
    },
    second: {
      title: "맛, 가격, 위치, 종류 모두 따져야지",
      image: "/img/test/11_b.png",
      personality: [0, 0, 0, 0, 0],
      preference: preferences[3],
    },
    none: {
      title: "상관 없음",
      image: "",
      personality: [0, 0, 0, 0, 1],
      preference: null,
    },
  },
  // 12
  {
    index: 12,
    title: "여행까지 왔는데 ..",
    first: {
      title: "술이 빠질 수 없지",
      image: "/img/test/12_a.png",
      personality: [0, 0, 0, 0, 0],
      preference: preferences[4],
    },
    second: {
      title: "굳이 술을..?",
      image: "/img/test/12_b.png",
      personality: [0, 0, 0, 0, 0],
      preference: preferences[5],
    },
    none: {
      title: "상관 없음",
      image: "",
      personality: [0, 0, 0, 0, 1],
      preference: null,
    },
  },
  // 13
  {
    index: 13,
    title: "선호하는 음식은?",
    first: {
      title: "해산물",
      image: "/img/test/13_a.png",
      personality: [0, 0, 0, 0, 0],
      preference: preferences[8],
    },
    second: {
      title: "육류",
      image: "/img/test/13_b.png",
      personality: [0, 0, 0, 0, 0],
      preference: preferences[9],
    },
    none: {
      title: "상관 없음",
      image: "",
      personality: [0, 0, 0, 0, 1],
      preference: null,
    },
  },
];
