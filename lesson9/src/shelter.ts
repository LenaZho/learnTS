import { DomesticatedFeline } from './domesticated-feline';

export class Shelter {
    private _animals: DomesticatedFeline[] = [];
    private _name: string;

    public constructor(name: string) {
        this._name = name;
    }

    public get name(): string {
        return this._name;
    }

    public get animals(): DomesticatedFeline[] {
        return [...this._animals];
    }

    public addAnimal(animal: DomesticatedFeline): void {
        this._animals.push(animal);
        console.log(`${animal.name} has been added to ${this._name} shelter`);
    }

    public listAnimals(): void {
        if (this._animals.length === 0) {
            console.log(`${this._name} shelter has no animals currently`);
            return;
        }

        console.log(`\nAnimals in ${this._name} shelter:`);
        this._animals.forEach(animal => {
            console.log(`- ${animal.name} (${animal.breed}) - Carer: ${animal.caretaker}`);
        });
    }

    public careForAnimals(): void {
        console.log(`\n Daily care at ${this._name} shelter:`);
        this._animals.forEach(animal => {
            console.log(animal.play());
            console.log(animal.beGroomed());
            console.log(animal.makeSound());
        });
    }
}
