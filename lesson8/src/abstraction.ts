// Base class
export abstract class Animal {
    protected name: string;
    protected age: number;

    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public abstract makeSound(): string;
    public abstract move(): string;

    public getInfo(): string {
        return `${this.name} is ${this.age} years old`;
    }
}

// Cat-specific
interface CatBehavior {
    purr(): string;
    scratch(): string;
    hunt(): string;
}

// Cat class abstraction and composition
export class Cat extends Animal implements CatBehavior {
    private breed: string;
    private isIndoor: boolean;

    public constructor(name: string, age: number, breed: string, isIndoor = true) {
        super(name, age);
        this.breed = breed;
        this.isIndoor = isIndoor;
    }

    public makeSound(): string {
        return 'Meows ';
    }

    public move(): string {
        return 'Walks silently';
    }

    public purr(): string {
        return `${this.name} purrs continuously`;
    }

    public scratch(): string {
        return `${this.name} scratches the furniture`;
    }

    public hunt(): string {
        return this.isIndoor
            ? `${this.name} hunts owners' food`
            : `${this.name} hunts mice`;
    }

    public getBreed(): string {
        return this.breed;
    }

    public toString(): string {
        return `${this.getInfo()}, breed: ${this.breed}, indoor: ${this.isIndoor}`;
    }
}

const myCat = new Cat('Masamune', 13, 'Metis', true);
console.log(myCat.toString());
console.log(myCat.makeSound());
console.log(myCat.move());
console.log(myCat.scratch());
console.log(myCat.purr());
console.log(myCat.hunt());
