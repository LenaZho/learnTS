/* eslint-disable @typescript-eslint/no-explicit-any */
import { DbService } from './db.service';
import { AnimalDto } from './animal.dto';

export class AnimalService {
    public dbService: DbService;

    public constructor(dbService: DbService) {
        this.dbService = dbService;
    }

    public async find(id: number): Promise<AnimalDto | null> {
        const result = await this.dbService.find<AnimalDto>('animals', id);
        return result;
    }

    public async create(data: any): Promise<AnimalDto> {
        const newAnimal = await this.dbService.create<AnimalDto>('animals', data);
        return newAnimal;
    }

    public async update(id: number, data: any): Promise<AnimalDto> {
        const updatedAnimal = await this.dbService.update<AnimalDto>('animals', id, data);
        return updatedAnimal;
    }

    public async findOlder(age: number): Promise<AnimalDto[]> {
        const allAnimals = await this.dbService.selectAll<AnimalDto>('animals');
        const olderAnimals = [];

        for (const animal of allAnimals) {
            if (animal && animal.age && animal.age > age) {
                olderAnimals.push(animal);
            }
        }

        return olderAnimals;
    }

    public async findByBreed(breed: string): Promise<AnimalDto[]> {
        const allAnimals = await this.dbService.selectAll<AnimalDto>('animals');
        const matchingAnimals = [];

        for (const animal of allAnimals) {
            if (animal.breed === breed) {
                matchingAnimals.push(animal);
            }
        }

        return matchingAnimals;
    }

    public async findRescued(): Promise<AnimalDto[]> {
        const allAnimals = await this.dbService.selectAll<AnimalDto>('animals');
        const rescuedAnimals = [];

        for (const animal of allAnimals) {
            if (animal.isRescued === true) {
                rescuedAnimals.push(animal);
            }
        }

        return rescuedAnimals;
    }

    public async getAllAnimals(): Promise<AnimalDto[]> {
        const animals = await this.dbService.selectAll<AnimalDto>('animals');
        return animals;
    }

    public async delete(id: number): Promise<boolean> {
        const result = await this.dbService.delete('animals', id);
        return result;
    }
}
