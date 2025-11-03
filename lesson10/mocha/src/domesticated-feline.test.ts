import { expect } from 'chai';
import { describe, it } from 'mocha';
import { DomesticatedFeline } from '../../animals/domesticated-feline';
import { LoneHuntingStrategy } from '../../animals/hunting-strategies';

describe('Big Cat Tests', () => {
    let bigCat: DomesticatedFeline;

    beforeEach(() => {
        const strategy = new LoneHuntingStrategy();
        bigCat = new DomesticatedFeline('Leo', 'Lion', 'Zoo', strategy, 'John', true);
    });

    it('should have a name', () => {
        expect(bigCat.name).to.equal('Leo');
    });

    it('should be a Lion', () => {
        expect(bigCat.breed).to.equal('Lion');
    });

    it('should make sounds', () => {
        expect(bigCat.makeSound()).to.equal('Leo makes a feline sound');
    });

    it('should eat food', () => {
        expect(bigCat.eat('meat')).to.equal('Leo the Lion eats meat');
    });

    it('should play hunt', () => {
        expect(bigCat.hunt('ball')).to.equal('Leo playfully pretends to hunt ball');
    });
});
