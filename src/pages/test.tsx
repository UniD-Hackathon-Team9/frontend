import Image from "next/image";

export default function Test() {
  return (
    <div className="flex justify-center content-center flex-col mt-5 p-0">
      <div className="flex flex-col justify-center h-14 w-11/12 self-center m-0">
        <span className="font-bold text-2xl self-center">여행 유형 테스트</span>
        <span className="self-end">4/9</span>
      </div>
      <div className="self-center w-11/12 bg-gray-200 rounded-full h-2">
        <div
          className="bg-gray-600 h-2 rounded-full"
          style={{ width: "45%" }}
        ></div>
      </div>
      <div className="self-center h-64 w-96 relative my-16">
        <Image
          src="/cafe.jpeg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <button className="h-16 bg-orange-300 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded w-5/6 self-center mb-4">
        어쩌구 저쩌구 이런 선택지
      </button>
      <button className="h-16 bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded w-5/6 self-center">
        어쩌구 저쩌구 저런 선택지
      </button>
    </div>
  );
}
