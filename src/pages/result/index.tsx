import { NextPage } from "next";
import Header from "../../components/layout/Header";
import MobileLayout from "../../components/layout/MobileLayout";

const Result:NextPage = () => {

    const mytype = "감귤형";
    return (
        <div>
            <Header />
            <MobileLayout>
                <div className="w-full p-6 flex flex-col">
                    <h1 className="text-3xl font-bold">
                        당신은 
                        <span>{mytype}</span>
                    </h1>
                    <button className="btn-primary">
                        이건 감귤색
                    </button>
                    <div className="mt-4" />

                    <button className="btn-primary-outline">
                        이건 감귤색
                    </button>
                    <div className="mt-4" />

                    <button className="btn-secondary">
                        이건 녹차색
                    </button>
                    <div className="mt-4" />

                    <button className="btn-secondary-outline">
                        이건 녹차색
                    </button>
                </div>

                </MobileLayout>
        </div>
    )
}

export default Result;