import { Question } from "../interfaces/question.type";
import { Preferences } from "./preferences";

export const questions:Question[] = [
    {
        index: 1,
        title: "",
        first: {
            title: "",
            image: "",
            personality: [0, 0, 0, 0, 0],
            preference: Preferences[0]  //view, garden
        },
        second: {
            title: "",
            image: "",
            personality: [2, 0, 2, 0, 0],
            preference: null // 선호 유형 관계 없는 경우
        },
    }
]