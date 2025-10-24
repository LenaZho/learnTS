import { DbService } from '../../animals/db.service';
import { AnimalService } from '../../animals/animal.service';

// Mock the database
jest.mock('../../animals/db.service');

describe('Animal Database Tests', () => {
    let mockDbService: jest.Mocked<DbService>;
    let animalService: AnimalService;

    beforeEach(() => {
        mockDbService = new DbService() as jest.Mocked<DbService>;
        animalService = new AnimalService(mockDbService);
    });

    test('can create animal in database', async () => {
        const animalData = { name: 'Simba', breed: 'Lion', age: 5 };
        mockDbService.create.mockResolvedValue({ id: 1, ...animalData });

        const result = await animalService.create(animalData);
        expect(result.name).toBe('Simba');
        expect(result.id).toBe(1);
    });

    test('can find animal by id', async () => {
        const animal = { id: 1, name: 'Tiger', breed: 'Tiger', age: 3 };
        mockDbService.find.mockResolvedValue(animal);

        const result = await animalService.find(1);
        expect(result?.name).toBe('Tiger');
    });

    test('can find old animals', async () => {
        const animals = [
            { id: 1, name: 'Young', breed: 'Lion', age: 2 },
            { id: 2, name: 'Old', breed: 'Tiger', age: 8 }
        ];
        mockDbService.selectAll.mockResolvedValue(animals);

        const result = await animalService.findOlder(5);
        expect(result.length).toBe(1);
        expect(result[0].name).toBe('Old');
    });

    test('can find animals by breed', async () => {
        const animals = [
            { id: 1, name: 'Lion1', breed: 'Lion', age: 4 },
            { id: 2, name: 'Tiger1', breed: 'Tiger', age: 3 }
        ];
        mockDbService.selectAll.mockResolvedValue(animals);

        const result = await animalService.findByBreed('Lion');
        expect(result.length).toBe(1);
        expect(result[0].breed).toBe('Lion');
    });

    test('can update animal data', async () => {
        const updatedAnimal = { id: 1, name: 'Updated', breed: 'Lion', age: 6 };
        mockDbService.update.mockResolvedValue(updatedAnimal);

        const result = await animalService.update(1, { age: 6 });
        expect(result.age).toBe(6);
    });

    test('can find rescued animals', async () => {
        const animals = [
            { id: 1, name: 'Wild', breed: 'Lion', isRescued: false },
            { id: 2, name: 'Rescued', breed: 'Tiger', isRescued: true }
        ];
        mockDbService.selectAll.mockResolvedValue(animals);

        const result = await animalService.findRescued();
        expect(result.length).toBe(1);
        expect(result[0].isRescued).toBe(true);
    });
});
