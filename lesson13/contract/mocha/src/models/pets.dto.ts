export interface Category {
    id: number;
    name: string;
}

export interface Tag {
    id: number;
    name: string;
}

export interface PetPutDto {
    id: number;
    name: string;
    status: string;
    category: {
        id: number;
        name: string;
    };
    photoUrls: string[];
    tags: {
        id: number;
        name: string;
    }[];
}

export interface PetPutRequest {
    body: PetPutDto;
}

export interface PetUpdateDto {
    id: number;
    name: string;
    status: string;
    category: {
        id: number;
        name: string;
    };
    photoUrls: string[];
    tags: {
        id: number;
        name: string;
    }[];
}
