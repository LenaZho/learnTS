import { DbService } from '../../animals/db.service';

// Mock the database for testing
jest.mock('../../animals/db.service');

interface TestAnimal {
    id: number;
    name: string;
    breed: string;
}

describe('Database Service Tests', () => {
    let dbService: DbService;

    beforeEach(() => {
        dbService = new DbService();
    });

    test('can create data in database', async () => {
        const mockData = { name: 'Test', breed: 'Lion' };
        (dbService.create as jest.Mock).mockResolvedValue({ id: 1, ...mockData });

        const result = await dbService.create<TestAnimal>('animals', mockData);
        expect(result.id).toBe(1);
        expect(result.name).toBe('Test');
    });

    test('can find data by id', async () => {
        const mockAnimal = { id: 1, name: 'Simba', breed: 'Lion' };
        (dbService.find as jest.Mock).mockResolvedValue(mockAnimal);

        const result = await dbService.find<TestAnimal>('animals', 1);
        expect(result?.name).toBe('Simba');
    });

    test('can update data', async () => {
        const updatedData = { id: 1, name: 'Updated', breed: 'Tiger' };
        (dbService.update as jest.Mock).mockResolvedValue(updatedData);

        const result = await dbService.update<TestAnimal>('animals', 1, { name: 'Updated' });
        expect(result.name).toBe('Updated');
    });

    test('can get all data from table', async () => {
        const mockAnimals = [
            { id: 1, name: 'Lion1', breed: 'Lion' },
            { id: 2, name: 'Tiger1', breed: 'Tiger' }
        ];
        (dbService.selectAll as jest.Mock).mockResolvedValue(mockAnimals);

        const result = await dbService.selectAll<TestAnimal>('animals');
        expect(result.length).toBe(2);
    });

    test('can delete data', async () => {
        (dbService.delete as jest.Mock).mockResolvedValue(true);

        const result = await dbService.delete('animals', 1);
        expect(result).toBe(true);
    });

    test('returns null when data not found', async () => {
        (dbService.find as jest.Mock).mockResolvedValue(null);

        const result = await dbService.find<TestAnimal>('animals', 999);
        expect(result).toBeNull();
    });
});
