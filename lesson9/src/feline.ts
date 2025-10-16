import { Animal, Hunter } from './animal';
import { HuntingStrategy } from './hunting-strategies';

export abstract class Feline implements Animal, Hunter {
    public name: string;
    public breed: string;
    protected habitat: string;
    protected huntingStrategy: HuntingStrategy;

    public constructor(
        name: string,
        breed: string,
        habitat: string,
        huntingStrategy: HuntingStrategy
    ) {
        this.name = name;
        this.breed = breed;
        this.habitat = habitat;
        this.huntingStrategy = huntingStrategy;
    }

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
        return this.huntingStrategy.hunt(this.name, prey);
    }

    public setHuntingStrategy(strategy: HuntingStrategy): void {
        this.huntingStrategy = strategy;
    }

    public abstract getSize(): string;
}
