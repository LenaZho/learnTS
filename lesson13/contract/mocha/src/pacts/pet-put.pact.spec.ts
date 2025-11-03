import { describe, it } from 'mocha';
import { expect } from 'chai';
import { PetService } from '../../pet-service';
import { PetPutDto } from '../models/pets.dto';

describe('Pet PUT API Contract Tests', () => {

    const petService = new PetService();

    it('should update a pet when valid data is provided', () => {
        const petToUpdate: PetPutDto = {
            id: 1,
            name: 'Fluffy',
            status: 'available',
            category: {
                id: 1,
                name: 'Dogs'
            },
            photoUrls: ['https://example.com/fluffy.jpg'],
            tags: [
                {
                    id: 1,
                    name: 'friendly'
                }
            ]
        };

        const result = petService.updatePet(petToUpdate);

        expect(result).to.not.be.null;
        expect(result).to.deep.equal(petToUpdate);
        expect(result?.id).to.equal(1);
        expect(result?.name).to.equal('Fluffy');
        expect(result?.status).to.equal('available');
    });

    it('should return null when pet data is null', () => {
        const result = petService.updatePet(null as unknown as PetPutDto);

        expect(result).to.be.null;
    });

    it('should return null when pet ID is missing', () => {
        const invalidPet: PetPutDto = {
            id: 0,
            name: 'Fluffy',
            status: 'available',
            category: {
                id: 1,
                name: 'Dogs'
            },
            photoUrls: ['https://example.com/fluffy.jpg'],
            tags: [
                {
                    id: 1,
                    name: 'friendly'
                }
            ]
        };

        const result = petService.updatePet(invalidPet);

        expect(result).to.be.null;
    });

    it('should return null when pet name is missing', () => {
        const invalidPet: PetPutDto = {
            id: 1,
            name: '',
            status: 'available',
            category: {
                id: 1,
                name: 'Dogs'
            },
            photoUrls: ['https://example.com/fluffy.jpg'],
            tags: [
                {
                    id: 1,
                    name: 'friendly'
                }
            ]
        };

        const result = petService.updatePet(invalidPet);

        expect(result).to.be.null;
    });

    it('should handle different pet statuses', () => {
        const availablePet: PetPutDto = {
            id: 1,
            name: 'Rex',
            status: 'available',
            category: {
                id: 1,
                name: 'Dogs'
            },
            photoUrls: ['https://example.com/rex.jpg'],
            tags: [
                {
                    id: 1,
                    name: 'playful'
                }
            ]
        };

        const pendingPet: PetPutDto = {
            id: 2,
            name: 'Buddy',
            status: 'pending',
            category: {
                id: 2,
                name: 'Cats'
            },
            photoUrls: ['https://example.com/buddy.jpg'],
            tags: [
                {
                    id: 2,
                    name: 'calm'
                }
            ]
        };

        const soldPet: PetPutDto = {
            id: 3,
            name: 'Charlie',
            status: 'sold',
            category: {
                id: 1,
                name: 'Dogs'
            },
            photoUrls: ['https://example.com/charlie.jpg'],
            tags: [
                {
                    id: 3,
                    name: 'loyal'
                }
            ]
        };

        const result1 = petService.updatePet(availablePet);
        const result2 = petService.updatePet(pendingPet);
        const result3 = petService.updatePet(soldPet);

        expect(result1?.status).to.equal('available');
        expect(result2?.status).to.equal('pending');
        expect(result3?.status).to.equal('sold');
    });

    it('should return pet with all required fields', () => {
        const petToUpdate: PetPutDto = {
            id: 123,
            name: 'TestPet',
            status: 'available',
            category: {
                id: 1,
                name: 'Test Category'
            },
            photoUrls: ['https://example.com/testpet.jpg', 'https://example.com/testpet2.jpg'],
            tags: [
                {
                    id: 1,
                    name: 'test'
                },
                {
                    id: 2,
                    name: 'sample'
                }
            ]
        };

        const result = petService.updatePet(petToUpdate);

        expect(result).to.have.property('id');
        expect(result).to.have.property('name');
        expect(result).to.have.property('status');
        expect(result).to.have.property('category');
        expect(result).to.have.property('photoUrls');
        expect(result).to.have.property('tags');

        expect(result?.category).to.have.property('id');
        expect(result?.category).to.have.property('name');

        expect(result?.photoUrls).to.be.an('array');
        expect(result?.photoUrls).to.have.length.at.least(1);

        expect(result?.tags).to.be.an('array');
    });
});
