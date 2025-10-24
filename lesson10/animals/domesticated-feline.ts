import { Feline } from './feline';
import { HuntingStrategy } from './hunting-strategies';

export class DomesticatedFeline extends Feline {
    private _isSaved: boolean;
    private _caretaker: string;

    public constructor(name: string, breed: string, habitat: string, huntingStrategy: HuntingStrategy, caretaker: string, isSaved = true) {
        super(name, breed, habitat, huntingStrategy);
        this._caretaker = caretaker;
        this._isSaved = isSaved;
    }

    public get caretaker(): string {
        return this._caretaker;
    }

    public get isSaved(): boolean {
        return this._isSaved;
    }

    public hunt(prey: string): string {
        return `${this.name} playfully pretends to hunt ${prey}`;
    }

    // Domesticated-specific
    public play(): string {
        return `${this.name} plays with toys and enjoys being petted`;
    }

    public beGroomed(): string {
        return `${this.name} enjoys being brushed and groomed by ${this._caretaker}`;
    }

    public setHuntingStrategy(strategy: HuntingStrategy): void {
        console.log(`${this.name} is domesticated and doesn't need hunting strategies - but will play instead! (received strategy: ${strategy})`);
    }
    public getSize(): string {
        return 'Not important';
    }
}
