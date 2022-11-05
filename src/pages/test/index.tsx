import Image from "next/image";
import Header from "../../components/layout/Header";
import MobileLayout from "../../components/layout/MobileLayout";

export default function Test() {
  return (
    <>
      <Header />
      <MobileLayout>
        <div className="flex w-full -center content-center flex-col mt-5 p-0">
          <div className="flex flex-col justify-center h-14 w-10/12 self-center m-0">
            <span className="font-bold text-2xl self-center">
              여행 유형 테스트
            </span>
            <span className="self-end">4/9</span>
          </div>
          <div className="self-center w-10/12 bg-gray-200 rounded-full h-2">
            <div
              className="bg-gray-600 h-2 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
          <div className="self-center content-center w-8/12 my-12">
            <p className="text-center text-lg">
              나는 어쩌구 저쩌구 궁시렁궁시렁 절씨구 어쩌구 카페를 좋아한다.
            </p>
          </div>
          <div className="flex justify-center px-3">
            <div className="flex flex-col w-6/12">
              <div className="self-center h-48 w-11/12 relative mb-6 cursor-pointer">
                <Image
                  src="/cafe.jpeg"
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <button className="h-20 bg-orange-300 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded w-9/12 self-center mb-4">
                어쩌구 저쩌구 이런 선택지
              </button>
            </div>
            <div className="flex flex-col w-6/12">
              <div className="self-center h-48 w-11/12 relative mb-6 cursor-pointer">
                <Image
                  src="/cafe.jpeg"
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <button className="h-20 bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded w-9/12 self-center mb-4">
                어쩌구 저쩌구 저런 선택지
              </button>
            </div>
          </div>
        </div>
      </MobileLayout>
    </>
  );
}
