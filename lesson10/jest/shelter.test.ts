import { Lion, Tiger, Leopard } from '../animals';
import { actionOfAnimal, organizeHunt, felineSizes } from '../animals/animal-care';

describe('Big Cat Shelter', () => {
    test('can create and test lion', () => {
        const lion = new Lion('Simba');

        expect(lion.name).toBe('Simba');
        expect(lion.breed).toBe('Lion');
        expect(lion.leadPride()).toContain('Simba');
    });

    test('can create and test tiger', () => {
        const tiger = new Tiger('Tigger');

        expect(tiger.name).toBe('Tigger');
        expect(tiger.breed).toBe('Tiger');
        expect(tiger.showStripes()).toContain('Tigger');
    });

    test('can create and test leopard', () => {
        const leopard = new Leopard('Spots');

        expect(leopard.name).toBe('Spots');
        expect(leopard.breed).toBe('Leopard');
        expect(leopard.climbTree()).toContain('Spots');
    });

    test('animal care functions work', () => {
        const lion = new Lion('Leo');
        const tiger = new Tiger('Hunter');

        expect(() => actionOfAnimal(lion)).not.toThrow();
        expect(() => organizeHunt(tiger)).not.toThrow();
        expect(() => felineSizes(lion)).not.toThrow();
    });

    test('big cats have different behaviors', () => {
        const lion = new Lion('King');
        const leopard = new Leopard('Small');

        expect(lion.getSize()).toBe('Large');
        expect(leopard.getSize()).toBe('Medium-Large');
        expect(lion.eat('meat')).toContain('King');
        expect(leopard.sleep()).toContain('Small');
    });
});
