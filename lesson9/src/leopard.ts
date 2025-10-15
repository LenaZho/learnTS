import { Feline } from './feline';

// Leopard class
export class Leopard extends Feline {
    private spotPattern: string;

    public constructor(name: string, spotPattern = 'dots') {
        super(name, 'Leopard', 'various terrains');
        this.spotPattern = spotPattern;
    }

    public makeSound(): string {
        return `${this.name} makes a leopard call`;
    }

    public getSize(): string {
        return 'Medium-Large';
    }

    // Leopard-specific behavior
    public showSpots(): string {
        return `${this.name} has beautiful ${this.spotPattern} spots`;
    }

    public hunt(prey: string): string {
        return `${this.name} uses trees to ambush ${prey}`;
    }

    public climbTree(): string {
        return `${this.name} climbs up trees easily`;
    }
}
