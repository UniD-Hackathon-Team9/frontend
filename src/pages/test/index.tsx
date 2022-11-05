import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../../components/layout/Header";
import MobileLayout from "../../components/layout/MobileLayout";
import { questions } from "../../constants";
import { PersonalityWeights } from "../../interfaces/question.type";

export default function Test() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [personality, setPersonality] = useState<PersonalityWeights>([
    0, 0, 0, 0, 0,
  ]);
  const router = useRouter();
  const questionCount = questions.length;
  function nextQuetion() {
    if (questionNumber < questionCount - 1) {
      setQuestionNumber(questionNumber + 1);
    } else {
      router.push({
        pathname: "/result",
        query: {
          personality: String.fromCharCode(
            personality.indexOf(Math.max(...personality)) + "a".charCodeAt(0)
          ),
        },
      });
    }
  }
  function chooseFirst() {
    setPersonality(
      (personality) =>
        personality.map(
          (weight, index) =>
            weight + questions[questionNumber].first.personality[index]
        ) as PersonalityWeights
    );
    nextQuetion();
  }
  function chooseSecond() {
    setPersonality(
      (personality) =>
        personality.map(
          (weight, index) =>
            weight + questions[questionNumber].second.personality[index]
        ) as PersonalityWeights
    );
    nextQuetion();
  }
  function chooseNone() {
    setPersonality(
      (personality) =>
        personality.map(
          (weight, index) =>
            weight + questions[questionNumber].none.personality[index]
        ) as PersonalityWeights
    );
    nextQuetion();
  }
  console.log(personality);
  return (
    <>
      <Header />
      <MobileLayout>
        <div className="flex w-full -center content-center flex-col mt-5 p-0">
          <div className="flex flex-col justify-center h-14 w-10/12 self-center m-0">
            <span className="font-bold text-2xl self-center">
              여행 유형 테스트
            </span>
            <span className="self-end">
              {questionNumber + 1}/{questionCount}
            </span>
          </div>
          <div className="self-center w-10/12 bg-gray-200 rounded-full h-2">
            <div
              className="bg-gray-600 h-2 rounded-full"
              style={{
                width: `${((questionNumber + 1) / questionCount) * 100}%`,
              }}
            ></div>
          </div>
          <div className="self-center content-center w-8/12 my-12">
            <p className="text-center text-lg">
              {questions[questionNumber].title}
            </p>
          </div>
          <div className="flex justify-center px-3">
            <div className="flex flex-col w-6/12">
              <div
                className="self-center h-48 w-11/12 relative mb-6 cursor-pointer"
                onClick={chooseFirst}
              >
                <Image
                  src={questions[questionNumber].first.image}
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <button
                className="h-20 bg-orange-300 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded w-9/12 self-center mb-4"
                onClick={chooseFirst}
              >
                {questions[questionNumber].first.title}
              </button>
            </div>
            <div className="flex flex-col w-6/12">
              <div
                className="self-center h-48 w-11/12 relative mb-6 cursor-pointer"
                onClick={chooseSecond}
              >
                <Image
                  src={questions[questionNumber].second.image}
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <button
                className="h-20 bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded w-9/12 self-center mb-4"
                onClick={chooseSecond}
              >
                {questions[questionNumber].second.title}
              </button>
            </div>
          </div>
          <button
            className="h-16 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded w-8/12 self-center mb-4"
            onClick={chooseNone}
          >
            {questions[questionNumber].none.title}
          </button>
        </div>
      </MobileLayout>
    </>
  );
}
