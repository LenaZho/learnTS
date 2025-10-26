/* eslint-disable @typescript-eslint/no-explicit-any */
import { DbService } from './db.service';
import { ShelterDto, AnimalDto } from './animal.dto';
import { AnimalService } from './animal.service';

export class ShelterService {
    public dbService: DbService;
    public animalService: AnimalService;

    public constructor(dbService: DbService, animalService: AnimalService) {
        this.dbService = dbService;
        this.animalService = animalService;
    }

    public async find(id: number): Promise<ShelterDto | null> {
        const result = await this.dbService.find<ShelterDto>('shelters', id);
        return result;
    }

    public async create(data: any): Promise<ShelterDto> {
        const newShelter = await this.dbService.create<ShelterDto>('shelters', data);
        return newShelter;
    }

    public async addAnimalToShelter(shelterId: number, animalId: number): Promise<ShelterDto | null> {
        const shelter = await this.find(shelterId);
        if (!shelter) {
            return null;
        }

        const oldAnimalIds = shelter.animalIds;
        const newAnimalIds = [];

        for (const existingAnimalId of oldAnimalIds) {
            newAnimalIds.push(existingAnimalId);
        }
        newAnimalIds.push(animalId);

        const updatedShelter = await this.dbService.update<ShelterDto>('shelters', shelterId, {
            animalIds: newAnimalIds
        });
        return updatedShelter;
    }

    public async getAnimalsInShelter(shelterId: number): Promise<AnimalDto[]> {
        const shelter = await this.find(shelterId);
        if (!shelter) {
            return [];
        }

        const animals = [];
        for (const animalId of shelter.animalIds) {
            const animal = await this.animalService.find(animalId);
            if (animal) {
                animals.push(animal);
            }
        }
        return animals;
    }

    public async getSheltersWithCapacity(minCapacity: number): Promise<ShelterDto[]> {
        const allShelters = await this.dbService.selectAll<ShelterDto>('shelters');
        const bigShelters = [];

        for (const shelter of allShelters) {
            if (shelter.capacity >= minCapacity) {
                bigShelters.push(shelter);
            }
        }

        return bigShelters;
    }

    public async getAllShelters(): Promise<ShelterDto[]> {
        const shelters = await this.dbService.selectAll<ShelterDto>('shelters');
        return shelters;
    }
}
