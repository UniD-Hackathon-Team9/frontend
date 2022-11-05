import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import Header from "../../components/layout/Header";
import MobileLayout from "../../components/layout/MobileLayout";
import { getPersonalityById, personalities, preferences } from "../../constants";
import { Personality, PersonalityType } from "../../interfaces/personality.type";

interface ResultQuery {
    preference: number // preferenceId
    personality: PersonalityType
}
const _preferences = preferences.map(p => p.id);
const _personalities = personalities.map(p => p.type);

const Result:NextPage = (props) => {
    const router = useRouter()
    const preferenceId = Number(router.query.preference);
    const personalityId = router.query.personality as unknown as PersonalityType;

    console.log(preferenceId)
    console.log(personalityId)

    useEffect(() => {
        // if(!_preferences.includes(preferenceId) 
        //     || !_personalities.includes(personalityId)
        // ){
        //     router.push('/');
        // }

    },[])
    const personality:Personality = useMemo(
        () => getPersonalityById(personalityId), 
        [personalityId]
    )

    return (
        <div>
            <Header />
            <MobileLayout>
                <div className="w-full p-6 flex flex-col">
                    <h1 className="text-3xl font-bold">
                        당신은 
                        <span style={{color: personality.color}}>
                            {personality.name}
                        </span>
                    </h1>
                    
                </div>

                </MobileLayout>
        </div>
    )
}

export default Result;