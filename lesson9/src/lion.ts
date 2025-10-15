import { Feline } from './feline';

// Lion class
export class Lion extends Feline {
    private maneSize: string;

    public constructor(name: string, maneSize = 'medium') {
        super(name, 'Lion', 'savanna');
        this.maneSize = maneSize;
    }

    public makeSound(): string {
        return `${this.name} roars across the ${this.habitat}`;
    }

    public getSize(): string {
        return 'Large';
    }

    // Lion-specific behavior
    public leadPride(): string {
        return `${this.name} leads the pride with a ${this.maneSize} mane`;
    }

    public hunt(prey: string): string {
        return `${this.name} coordinates with the pride to hunt ${prey}`;
    }
}
