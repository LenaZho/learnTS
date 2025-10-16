import { Feline } from './feline';
import { LoneHuntingStrategy } from './hunting-strategies';

// Leopard class
export class Leopard extends Feline {
    private spotPattern: string;

    public constructor(name: string, spotPattern = 'dots') {
        super(name, 'Leopard', 'various terrains', new LoneHuntingStrategy());
        this.spotPattern = spotPattern;
    }


    public getSize(): string {
        return 'Medium-Large';
    }

    // Leopard-specific behavior
    public showSpots(): string {
        return `${this.name} has beautiful ${this.spotPattern} spots`;
    }

    public climbTree(): string {
        return `${this.name} climbs up trees easily`;
    }
}
