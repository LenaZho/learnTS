export interface AnimalDto {
    id: number;
    name: string;
    breed: string;
    age?: number;
    habitat?: string;
    isRescued?: boolean;
}

export interface ShelterDto {
    id: number;
    name: string;
    location: string;
    capacity: number;
    animalIds: number[];
}
