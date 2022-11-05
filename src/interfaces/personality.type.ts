
export enum PersonalityType {
    a = "a", 
    b = "b", 
    c = "c", 
    d = "d", 
    e = "e",
}

export interface Personality {
    name: string;
    type: PersonalityType
    keyword: string[];
    description: string;
    color: string
}