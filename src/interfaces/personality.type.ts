
export enum PersonalityType {
    a, b, c, d, e
}

export interface Personality {
    name: string;
    type: PersonalityType
    keyword: string[];
    description: string;
}