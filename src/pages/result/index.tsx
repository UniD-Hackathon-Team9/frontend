import { GetServerSideProps, NextPage } from "next";
import Result, { ResultProps } from "../../components/features/Result";
import Header from "../../components/layout/Header";
import MobileLayout from "../../components/layout/MobileLayout";
import {
  getPersonalityById,
  personalities,
  preferences,
} from "../../constants";
import { PersonalityType } from "../../interfaces/personality.type";

const ResultPage: NextPage = (props: ResultProps) => {
  return (
    <div>
      <Header />
      <MobileLayout>
        <Result
          personality={props.personality}
          preferences={props.preferences}
        />
      </MobileLayout>
    </div>
  );
};

export default ResultPage;

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
  return {
    props: {
      preferences: userPreferences,
      personality: userPersonality,
    },
  };
};
