export interface HuntingStrategy {
    hunt(hunterName: string, prey: string): string;
}

export class PackHuntingStrategy implements HuntingStrategy {
    public hunt(hunterName: string, prey: string): string {
        return `${hunterName} coordinates with the pack to surround and hunt ${prey}`;
    }
}

export class LoneHuntingStrategy implements HuntingStrategy {
    public hunt(hunterName: string, prey: string): string {
        return `${hunterName} stalks ${prey} alone using stealth and patience`;
    }
}

export class TreeHuntingStrategy implements HuntingStrategy {
    public hunt(hunterName: string, prey: string): string {
        return `${hunterName} uses tree cover to ambush ${prey} from above`;
    }
}
