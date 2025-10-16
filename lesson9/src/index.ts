import { Lion } from './lion';
import { Tiger } from './tiger';
import { Leopard } from './leopard';
import { actionOfAnimal, organizeHunt, felineSizes, animalsField, compareHuntingStyles } from './animal-care';
import { PackHuntingStrategy, TreeHuntingStrategy } from './hunting-strategies';

function createBigCats(): { mufasa: Lion; tigo: Tiger; baheera: Leopard } {
    const mufasa = new Lion('Mufasa');
    const tigo = new Tiger('Tigo');
    const baheera = new Leopard('Baheera');

    return { mufasa, tigo, baheera };
}

function main(): void {

    const { mufasa, tigo, baheera } = createBigCats();

    actionOfAnimal(mufasa);
    actionOfAnimal(tigo);
    actionOfAnimal(baheera);

    console.log('\n Each cat uses different hunting approach:');
    organizeHunt(mufasa);
    organizeHunt(tigo);
    organizeHunt(baheera);

    console.log('\n Feline sizes:');
    felineSizes(mufasa);
    felineSizes(tigo);
    felineSizes(baheera);

    console.log('\n Feline-specific behaviors:');
    console.log(`${mufasa.name}: ${mufasa.leadPride()}`);
    if (tigo.swim) {
        console.log(`${tigo.name}: ${tigo.swim()}`);
    }
    if (baheera.climbTree) {
        console.log(`${baheera.name}: ${baheera.climbTree()}`);
    }

    const allCats = [mufasa, tigo, baheera];
    animalsField(allCats);
    compareHuntingStyles(allCats);

    console.log('\n Before Strategy Change');
    console.log(tigo.hunt('deer'));

    console.log('\n After Changing Hunting Strategy');
    tigo.setHuntingStrategy(new PackHuntingStrategy());
    console.log(tigo.hunt('deer'));

    console.log('\n Before Strategy Change');
    console.log(baheera.hunt('gazelle'));

    console.log('\n After Changing Hunting Strategy');
    baheera.setHuntingStrategy(new TreeHuntingStrategy());
    console.log(baheera.hunt('gazelle'));
}

main();
