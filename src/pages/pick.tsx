import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { useState } from "react";
import Header from "../components/layout/Header";
import MobileLayout from "../components/layout/MobileLayout";
import PickPlaces from "../components/features/pick-places";
import { PlaceByDay, PlaceWithState } from "../components/features/pick-places/types";
import { Place } from "../interfaces/place.type";
import Summary from "../components/features/summary";
import { getPersonalityById, personalities, preferences } from "../constants";
import { PersonalityType } from "../interfaces";
import axios from "axios";
import { RecommendPlacesDto } from "../interfaces/places.recommends.dto";

const useSelectPlaces = ():[
    PlaceByDay,
    (day: number, place: Place, state: number) => void,
] => {
    const [selectedPlaces, setSelectedPlaces] = useState<PlaceByDay>([[],[],[]]);
    const addPlace = (day: number, place: Place, state: number) => {
        setSelectedPlaces(prev => {
            const dayPlaces:PlaceWithState[] = [...prev[day], {...place, state}];
            return [
                ...prev.slice(0, day),
                dayPlaces,
                ...prev.slice(day+1)
            ] as PlaceByDay
        })
    }

    return [selectedPlaces, addPlace];
}

const PickPage:NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [myPlaces, addPlace] = useSelectPlaces();
    // const [myPlaces, addPlace, removePlace] = useSelectPlaces();

    const [summary, setSummary] = useState<boolean>(false);
    const toSummary = () => setSummary(true);
    const backToPick = () => setSummary(false);
    return (
        <div>
            <Header />
            <MobileLayout>
                {summary ? (
                    <Summary myPlaces={myPlaces}/>
                ) : (
                    <PickPlaces 
                        toSummary={toSummary} 
                        recommends={props.recommends}
                        myPlaces={myPlaces}
                        addPlace={addPlace}
                    />
                )}
            </MobileLayout>
        </div>
    )
}

export default PickPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const _preferences = preferences.map((p) => p.id);
    const _personalities = personalities.map((p) => p.type);
  
    const userPreferenceIds = ((query.preferences || "") as string)
      .split(",")
      .map(Number);
    if (userPreferenceIds.some((pre) => !_preferences.includes(pre))) {
      return { props: { personality: null, preferences: [] } };
    }
    const userPersonalityId = query.personality as unknown as PersonalityType;
    if (!_personalities.includes(userPersonalityId)) {
      return { props: { personality: null, preferences: [] } };
    }
  
    const userPreferences = userPreferenceIds.map(
      (pId) => preferences.find((pref) => pref.id === pId)!
    );
    const userPersonality = getPersonalityById(userPersonalityId)!;

    const {data} = await axios.post<RecommendPlacesDto>('http://localhost:5000/recommend', {
        preferences: userPreferences.map(p => p.id),
        personality: userPersonality.type
    })

    return {
      props: {
        preferences: userPreferences,
        personality: userPersonality,
        recommends: data
      },
    };
  };
  