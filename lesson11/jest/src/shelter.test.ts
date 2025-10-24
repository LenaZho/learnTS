import { DbService } from '../../animals/db.service';
import { ShelterService } from '../../animals/shelter.service';
import { AnimalService } from '../../animals/animal.service';

// Mock the database
jest.mock('../../animals/db.service');

describe('Shelter Database Tests', () => {
    let mockDbService: jest.Mocked<DbService>;
    let shelterService: ShelterService;
    let animalService: AnimalService;

    beforeEach(() => {
        mockDbService = new DbService() as jest.Mocked<DbService>;
        animalService = new AnimalService(mockDbService);
        shelterService = new ShelterService(mockDbService, animalService);
    });

    test('can create shelter in database', async () => {
        const shelterData = { name: 'Big Cats', location: 'Texas', capacity: 50, animalIds: [] };
        mockDbService.create.mockResolvedValue({ id: 1, ...shelterData });

        const result = await shelterService.create(shelterData);
        expect(result.name).toBe('Big Cats');
        expect(result.capacity).toBe(50);
    });

    test('can find shelter by id', async () => {
        const shelter = { id: 1, name: 'Wildlife', location: 'Florida', capacity: 30, animalIds: [] };
        mockDbService.find.mockResolvedValue(shelter);

        const result = await shelterService.find(1);
        expect(result?.name).toBe('Wildlife');
    });

    test('can add animal to shelter', async () => {
        const shelter = { id: 1, name: 'Rescue', location: 'California', capacity: 25, animalIds: [] };
        const updatedShelter = { ...shelter, animalIds: [1] };

        mockDbService.find.mockResolvedValue(shelter);
        mockDbService.update.mockResolvedValue(updatedShelter);

        const result = await shelterService.addAnimalToShelter(1, 1);
        expect(result?.animalIds).toContain(1);
    });

    test('can get all shelters', async () => {
        const shelters = [
            { id: 1, name: 'Shelter1', location: 'Texas', capacity: 20, animalIds: [] },
            { id: 2, name: 'Shelter2', location: 'Florida', capacity: 30, animalIds: [] }
        ];
        mockDbService.selectAll.mockResolvedValue(shelters);

        const result = await shelterService.getAllShelters();
        expect(result.length).toBe(2);
    });

    test('can find shelters with big capacity', async () => {
        const shelters = [
            { id: 1, name: 'Small', location: 'Texas', capacity: 10, animalIds: [] },
            { id: 2, name: 'Big', location: 'Florida', capacity: 50, animalIds: [] }
        ];
        mockDbService.selectAll.mockResolvedValue(shelters);

        const result = await shelterService.getSheltersWithCapacity(25);
        expect(result.length).toBe(1);
        expect(result[0].name).toBe('Big');
    });

    test('returns empty if shelter not found', async () => {
        mockDbService.find.mockResolvedValue(null);

        const result = await shelterService.getAnimalsInShelter(999);
        expect(result.length).toBe(0);
    });
});
