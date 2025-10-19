import { describe, it, expect, jest } from '@jest/globals';
import { actionOfAnimal, organizeHunt, felineSizes } from '../animals/animal-care';
import { Lion } from '../animals/lion';
import { Tiger } from '../animals/tiger';

describe('Animal Tests', () => {
    let consoleSpy: ReturnType<typeof jest.spyOn>;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {
            // do nothing
        });
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    it('should test actionOfAnimal with lion', () => {

        const lion = new Lion('Simba');

        actionOfAnimal(lion);

        expect(consoleSpy).toHaveBeenCalled();
        expect(lion.name).toBe('Simba');
        expect(lion.breed).toBe('Lion');
        expect(consoleSpy.mock.calls.length).toBeGreaterThan(0);
    });

    it('should test actionOfAnimal with tiger', () => {
        const tiger = new Tiger('Tony');

        actionOfAnimal(tiger);

        expect(tiger.name).toBe('Tony');
        expect(consoleSpy).toHaveBeenCalled();
        expect(tiger.breed).toBe('Tiger');
    });

    // Test organizeHunt function
    it('should test organizeHunt function', () => {
        const lion = new Lion('Mufasa');

        organizeHunt(lion);

        expect(consoleSpy).toHaveBeenCalled();
        expect(lion.name).toBe('Mufasa');
    });

    it('should test felineSizes function', () => {
        const tiger = new Tiger('Rajah');

        felineSizes(tiger);

        expect(consoleSpy).toHaveBeenCalled();
        expect(tiger.name).toBe('Rajah');
        expect(tiger).toBeInstanceOf(Tiger);
    });

    it('should not break objects when testing', () => {
        const lion = new Lion('Simba');
        const originalName = lion.name;

        actionOfAnimal(lion);
        organizeHunt(lion);
        felineSizes(lion);

        expect(lion.name).toBe(originalName);
        expect(lion.breed).toBe('Lion');
    });
});
