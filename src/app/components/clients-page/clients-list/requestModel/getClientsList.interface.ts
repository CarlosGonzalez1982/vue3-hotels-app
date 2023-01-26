export interface GetClientsListInterface {
    address: string;
    age: number;
    company: string;
    email: string;
    eyeColor: EyeColor;
    gender: Gender;
    id: number;
    isActive: boolean;
    name: string;
    phone: string;
    picture: string;
}

export enum EyeColor {
    Blue = "blue",
    Brown = "brown",
    Green = "green",
}

export enum Gender {
    Female = "female",
    Male = "male",
}
