import { NextPage } from "next";
import Header from "../../components/layout/Header";
import MobileLayout from "../../components/layout/MobileLayout";

const Result:NextPage = () => {

    const mytype = "감귤형";
    return (
        <div>
            <Header />
            <MobileLayout>
                <div className="w-full p-6">
                    <h1 className="text-3xl font-bold">
                        당신은 
                        <span>{mytype}</span>
                    </h1>
                </div>
                </MobileLayout>
        </div>
    )
}

export default Result;