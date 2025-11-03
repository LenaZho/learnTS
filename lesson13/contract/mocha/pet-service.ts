import { PetPutDto } from './src/models/pets.dto';

export class PetService {
    public updatePet(pet: PetPutDto): PetPutDto | null {
        if (!pet) {
            return null;
        }

        if (!pet.id) {
            return null;
        }

        if (!pet.name) {
            return null;
        }

        return pet;
    }

    public getPet(): PetPutDto {
        return {
            id: 19,
            name: 'doggie',
            status: 'available',
            category: {
                id: 1,
                name: 'Dogs'
            },
            photoUrls: ['https://example.com/photo.jpg'],
            tags: [
                {
                    id: 1,
                    name: 'friendly'
                }
            ]
        };
    }
}
