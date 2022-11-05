import { Preference } from "./preference.type";

export interface Question {
  index: number;
  title: string;
  first: Choice;
  second: Choice;
  none: Choice;
}

export type PersonalityWeights = [number, number, number, number, number];

interface Choice {
  title: string;
  image: string;
  personality: PersonalityWeights;
  preference: Preference | null;
}
