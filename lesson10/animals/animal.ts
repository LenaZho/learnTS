export interface Animal {
    name: string;
    breed: string;

    // Basic animal behaviors
    makeSound(): string;
    eat(food: string): string;
    sleep(): string;
}
// Animals can hunt
export interface Hunter {
    hunt(prey: string): string;
}
