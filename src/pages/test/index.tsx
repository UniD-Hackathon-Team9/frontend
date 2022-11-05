import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../../components/layout/Header";
import MobileLayout from "../../components/layout/MobileLayout";
import { questions } from "../../components";
import { PersonalityWeights } from "../../interfaces/question.type";

export default function Test() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [personality, setPersonality] = useState<PersonalityWeights>([
    0, 0, 0, 0, 0,
  ]);
  const [preferences, setPreferences] = useState<number[]>([]);
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
            personality.lastIndexOf(Math.max(...personality)) +
              "a".charCodeAt(0)
          ),
          preferences: preferences.join(","),
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
    setPreferences((preferences) => {
      const { preference } = questions[questionNumber].first;
      if (preference && !preferences.includes(preference.id))
        preferences.push(preference.id);
      return preferences;
    });
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
    setPreferences((preferences) => {
      const { preference } = questions[questionNumber].second;
      if (preference && !preferences.includes(preference.id))
        preferences.push(preference.id);
      return preferences;
    });
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
    setPreferences((preferences) => {
      const { preference } = questions[questionNumber].none;
      if (preference && !preferences.includes(preference.id))
        preferences.push(preference.id);
      return preferences;
    });
    nextQuetion();
  }
  console.log(personality);
  return (
    <>
      <Header />
      <MobileLayout>
        <div className="relative flex w-full -center content-center flex-col mt-5 p-0">
          <div className="flex flex-col justify-center h-14 w-10/12 self-center m-0 relative">
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
          <div className="self-center content-center w-8/12 my-10">
            <p className="relative text-center text-xl w-fit self-center m-auto">
              <Image
                src="/img/star.png"
                alt="star"
                width={80}
                height={80}
                className="absolute -top-6 -right-20"
              />
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
                className="h-24 btn-primary-outline border-2 font-bold py-2 px-4 rounded w-11/12 self-center mb-4 text-base"
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
                className="h-24 btn-secondary-outline border-2 font-bold py-2 px-4 rounded w-11/12 self-center mb-4 text-base"
                onClick={chooseSecond}
              >
                {questions[questionNumber].second.title}
              </button>
            </div>
          </div>
          <button
            className="h-16 underline font-bold self-center mb-4 text-gray-600"
            onClick={chooseNone}
          >
            {questions[questionNumber].none.title}
          </button>
        </div>
      </MobileLayout>
    </>
  );
}
