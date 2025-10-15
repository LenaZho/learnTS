import { Feline } from './feline';

// Tiger class
export class Tiger extends Feline {
    private stripePattern: string;

    public constructor(name: string, stripePattern = 'visible') {
        super(name, 'Tiger', 'jungle');
        this.stripePattern = stripePattern;
    }

    public makeSound(): string {
        return `${this.name} lets out a powerful roar`;
    }

    public getSize(): string {
        return 'Large-Extra Large';
    }

    // Tiger-specific behavior
    public showStripes(): string {
        return `${this.name} displays ${this.stripePattern} orange and black stripes`;
    }

    public hunt(prey: string): string {
        return `${this.name} stalks ${prey} alone through in ${this.habitat}`;
    }

    public swim(): string {
        return `${this.name} swims in the water`;
    }
}
