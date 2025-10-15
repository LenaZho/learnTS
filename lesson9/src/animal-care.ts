import { Animal, Hunter } from './animal';
import { Feline } from './feline';

export function actionOfAnimal(animal: Animal): void {
    console.log(`\n Actions of ${animal.name}`);
    console.log(animal.makeSound());
    console.log(animal.eat('meat'));
    console.log(animal.sleep());
}

export function organizeHunt(hunter: Hunter): void {
    console.log(`\n ${hunter instanceof Feline ? (hunter as Feline).name : 'Hunter'} goes hunting`);
    console.log(hunter.hunt('antelope'));
}

export function felineSizes(feline: Feline): void {
    console.log(`\n Size of ${feline.name}`);
    console.log(`Size: ${feline.getSize()}`);
}

export function animalsField(animals: Animal[]): void {
    console.log('\n Here we have the felines:');

    animals.forEach((animal, index) => {
        console.log(`\n${index + 1}. ${animal.name} the ${animal.breed}:`);
        console.log(` ${animal.makeSound()}`);

        if (animal instanceof Feline) {
            console.log(`Size: ${animal.getSize()}`);
        }
    });
}

export function compareHuntingStyles(hunters: Hunter[]): void {
    console.log('\n Hunting Styles Comparison');

    hunters.forEach((hunter, index) => {
        if (hunter instanceof Feline) {
            console.log(`\n${index + 1}. ${hunter.name}:`);
            console.log(` ${hunter.hunt('zebra')}`);
        }
    });
}
