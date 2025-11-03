import { expect } from 'chai';
import { describe, it } from 'mocha';
import { Leopard } from '../../animals/leopard';

describe('Leopard Tests', () => {
    let leopard: Leopard;

    beforeEach(() => {
        leopard = new Leopard('Bagheera');
    });

    it('should have a name', () => {
        expect(leopard.name).to.equal('Bagheera');
    });

    it('should be a Leopard', () => {
        expect(leopard.breed).to.equal('Leopard');
    });

    it('should make sounds', () => {
        expect(leopard.makeSound()).to.equal('Bagheera makes a feline sound');
    });

    it('should eat meat', () => {
        expect(leopard.eat('meat')).to.equal('Bagheera the Leopard eats meat');
    });

    it('should climb trees', () => {
        expect(leopard.climbTree()).to.equal('Bagheera climbs up trees easily');
    });
});