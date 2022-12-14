import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import Header from "../../components/layout/Header";
import MobileLayout from "../../components/layout/MobileLayout";
import Loading from "../../components/loading";
import { questions } from "../../constants";
import { PersonalityWeights } from "../../interfaces/question.type";

export default function Test() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [personality, setPersonality] = useState<PersonalityWeights>([
    0, 0, 0, 0, 0,
  ]);
  const [preferences, setPreferences] = useState<number[]>([]);
  const router = useRouter();
  const questionCount = questions.length;
  const [loading, setLoading] = useState(false);

  const nextQuetion = () => {
    if (questionNumber < questionCount - 1) {
      setQuestionNumber(questionNumber + 1);
    } else {
      setLoading(true);
      router.push({
        pathname: "/result",
        query: {
          personality: String.fromCharCode(
            personality.lastIndexOf(Math.max(...personality)) +
              "a".charCodeAt(0)
          ),
          preferences: Array.from(new Set(preferences)).sort((a, b) => a - b).join(","),
        },
      });
      setLoading(false);
    }
  }

  const chooseFirst = useCallback(() => {
    setPersonality(
      (personality) =>
        personality.map(
          (weight, index) =>
            weight + questions[questionNumber].first.personality[index]
        ) as PersonalityWeights
    );
    setPreferences((preferences) => {
      const { preference } = questions[questionNumber].first;
      return [...preferences, ...preference.map(p => p.id)];
    });
    nextQuetion();
  },[nextQuetion])

  const chooseSecond = useCallback(() => {
    setPersonality(
      (personality) =>
        personality.map(
          (weight, index) =>
            weight + questions[questionNumber].second.personality[index]
        ) as PersonalityWeights
    );
    setPreferences((preferences) => {
      const { preference } = questions[questionNumber].second;
      return [...preferences, ...preference.map(p => p.id)];
    });
    nextQuetion();
  },[nextQuetion])

  const chooseNone = useCallback(() => {
    setPersonality(
      (personality) =>
        personality.map(
          (weight, index) =>
            weight + questions[questionNumber].none.personality[index]
        ) as PersonalityWeights
    );
    setPreferences((preferences) => {
      const { preference } = questions[questionNumber].none;
      return [...preferences, ...preference.map(p => p.id)];
    });
    nextQuetion();
  },[nextQuetion])

  return (
    <>
      <Header />
      <MobileLayout>
        <div className="relative flex w-full -center content-center flex-col mt-5 p-0">
          <div className="flex flex-col justify-center w-10/12 self-center m-0 relative">
            <span className="font-bold text-2xl self-center">
              ?????? ?????? ?????????
            </span>
            {(questionNumber + 1) === questionCount && (
              <span className="text-right text-green-600 font-bold">
                ????????? ??????????????????!
              </span>
            )}
            <span className="self-end">
              <span className="font-semibold">
                {questionNumber + 1}&nbsp;
              </span>
                / {questionCount}
            </span>
          </div>
          <div className="self-center w-10/12 bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-primary-600 h-2 rounded-full"
              style={{
                width: `${((questionNumber + 1) / questionCount) * 100}%`,
              }}
            />
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
                className="h-24 btn-primary-outline border-2 font-bold py-2 px-2 rounded w-11/12 self-center mb-4 text-base"
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
                className="h-24 btn-secondary-outline border-2 font-bold py-2 px-2 rounded w-11/12 self-center mb-4 text-base"
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
      {loading && <Loading />}
    </>
  );
}
