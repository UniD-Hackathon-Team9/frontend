import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/layout/Header";
import MobileLayout from "../components/layout/MobileLayout";

export default function Home() {
  return (
    <div>
      <Header />
      <MobileLayout>
        <div
          className="w-full p-6 flex flex-col items-center border-x-2 border-gray-200"
          style={{ backgroundColor: "#F6F6F6" }}
        >
          <div className="self-center h-60 w-full relative cursor-pointer mt-20 mb-12">
            <Image
              src={"/img/hero.png"}
              alt="Picture of the author"
              layout="fill"
              objectFit="scale-down"
            />
          </div>
          <Link href="/test" className="w-full self-center flex justify-center">
            <button className="btn-primary self-center w-9/12 h-12 mt-12">
              테스트 시작하기
            </button>
          </Link>
        </div>
      </MobileLayout>
    </div>
  );
}
