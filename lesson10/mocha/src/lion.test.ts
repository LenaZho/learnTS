import { expect } from 'chai';
import { describe, it } from 'mocha';
import { Lion } from '../../animals/lion';

describe('Lion Tests', () => {
    let lion: Lion;

    beforeEach(() => {
        lion = new Lion('Simba');
    });

    it('should have a name', () => {
        expect(lion.name).to.equal('Simba');
    });

    it('should be a Lion', () => {
        expect(lion.breed).to.equal('Lion');
    });

    it('should make sounds', () => {
        expect(lion.makeSound()).to.equal('Simba makes a feline sound');
    });

    it('should eat meat', () => {
        expect(lion.eat('meat')).to.equal('Simba the Lion eats meat');
    });

    it('should lead pride', () => {
        expect(lion.leadPride()).to.contain('leads the pride');
    });
});