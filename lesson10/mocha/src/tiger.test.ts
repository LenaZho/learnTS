import { expect } from 'chai';
import { describe, it } from 'mocha';
import { Tiger } from '../../animals/tiger';

describe('Tiger Tests', () => {
    let tiger: Tiger;

    beforeEach(() => {
        tiger = new Tiger('Tony');
    });

    it('should have a name', () => {
        expect(tiger.name).to.equal('Tony');
    });

    it('should be a Tiger', () => {
        expect(tiger.breed).to.equal('Tiger');
    });

    it('should roar loudly', () => {
        expect(tiger.makeSound()).to.equal('Tony lets out a powerful roar');
    });

    it('should eat meat', () => {
        expect(tiger.eat('meat')).to.equal('Tony the Tiger eats meat');
    });

    it('should swim', () => {
        expect(tiger.swim()).to.equal('Tony swims in the water');
    });
});