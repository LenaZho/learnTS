import { Animal, Hunter } from './animal';

export abstract class Feline implements Animal, Hunter {
    public name: string;
    public breed: string;
    protected habitat: string;

    public constructor(name: string, breed: string, habitat: string) {
        this.name = name;
        this.breed = breed;
        this.habitat = habitat;
    }

    // Common behaviors
    public makeSound(): string {
        return `${this.name} makes a feline sound`;
    }

    public eat(food: string): string {
        return `${this.name} the ${this.breed} eats ${food}`;
    }

    public sleep(): string {
        return `${this.name} sleeps in the ${this.habitat}`;
    }

    public hunt(prey: string): string {
        return `${this.name} hunts ${prey}`;
    }

    public abstract getSize(): string;
}
