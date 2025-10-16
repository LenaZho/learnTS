import { Feline } from './feline';
import { PackHuntingStrategy } from './hunting-strategies';

export class Lion extends Feline {
    private maneSize: string;

    public constructor(name: string, maneSize = 'medium') {
        super(name, 'Lion', 'savanna', new PackHuntingStrategy());
        this.maneSize = maneSize;
    }

    public getSize(): string {
        return 'Large';
    }

    // Lion-specific behavior
    public leadPride(): string {
        return `${this.name} leads the pride with a ${this.maneSize} mane`;
    }

}
