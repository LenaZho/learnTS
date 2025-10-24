import { expect } from 'chai';
import { DbService } from '../../../animals/db.service';
import { AnimalService } from '../../../animals/animal.service';

describe('Animal Tests', () => {
    let dbService: DbService;
    let animalService: AnimalService;

    beforeEach(() => {
        dbService = new DbService();
        dbService.clearAll();
        animalService = new AnimalService(dbService);
    });

    it('can find animal', async () => {
        const created = await animalService.create({ name: 'Tiger', breed: 'Tiger', age: 5 });
        const found = await animalService.find(created.id);

        expect(found?.name).to.equal('Tiger');
        expect(found?.age).to.equal(5);
    });

    it('can update animal', async () => {
        const animal = await animalService.create({ name: 'Cat', breed: 'Lion', age: 2 });
        const updated = await animalService.update(animal.id, { name: 'Big Cat', age: 5 });

        expect(updated.name).to.equal('Big Cat');
        expect(updated.age).to.equal(5);
    });

    it('can find older animals', async () => {
        await animalService.create({ name: 'Young', breed: 'Lion', age: 2 });
        await animalService.create({ name: 'Old', breed: 'Tiger', age: 8 });

        const olderAnimals = await animalService.findOlder(5);

        expect(olderAnimals).to.have.length(1);
        expect(olderAnimals[0].name).to.equal('Old');
    });

    it('can create animal', async () => {
        const animal = await animalService.create({ name: 'Leo', breed: 'Lion', age: 3 });

        expect(animal.name).to.equal('Leo');
        expect(animal.breed).to.equal('Lion');
        expect(animal.id).to.equal(1);
    });

    it('can find animals by breed', async () => {
        await animalService.create({ name: 'Lion1', breed: 'Lion', age: 4 });
        await animalService.create({ name: 'Tiger1', breed: 'Tiger', age: 3 });
        await animalService.create({ name: 'Lion2', breed: 'Lion', age: 6 });

        const lions = await animalService.findByBreed('Lion');

        expect(lions).to.have.length(2);
        expect(lions[0].breed).to.equal('Lion');
        expect(lions[1].breed).to.equal('Lion');
    });
});
