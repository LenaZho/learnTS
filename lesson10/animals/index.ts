import { Lion } from './lion';
import { Tiger } from './tiger';
import { Leopard } from './leopard';
import { DomesticatedFeline } from './domesticated-feline';
import { Shelter } from './shelter';
import { actionOfAnimal, organizeHunt, felineSizes, animalsField, compareHuntingStyles } from './animal-care';
import { PackHuntingStrategy, TreeHuntingStrategy } from './hunting-strategies';

export { Lion, Tiger, Leopard, DomesticatedFeline, Shelter, actionOfAnimal, organizeHunt, felineSizes, animalsField, compareHuntingStyles };

function createBigCats(): { mufasa: Lion; tigo: Tiger; baheera: Leopard } {
    const mufasa = new Lion('Mufasa');
    const tigo = new Tiger('Tigo');
    const baheera = new Leopard('Baheera');

    return { mufasa, tigo, baheera };
}

function showDomesticatedFelines(): void {
    console.log('\n Domesticated Felines');

    const domesticLeopard = new DomesticatedFeline('Cheeto', 'Leopard', 'Home', new TreeHuntingStrategy(), 'Olena', true);
    const domesticTiger = new DomesticatedFeline('Stripy', 'Tiger', 'Home', new PackHuntingStrategy(), 'Anna', false);

    const shelter = new Shelter('Big Cats Rescue');

    shelter.addAnimal(domesticLeopard);
    shelter.addAnimal(domesticTiger);

    shelter.listAnimals();

    console.log('\n Animal Actions in Shelter');
    const allAnimals = [domesticLeopard, domesticTiger];
    allAnimals.forEach(animal => {
        actionOfAnimal(animal);
    });

    console.log('\n Hunting Behavior Comparison');
    console.log('Wild leopard hunting:');
    const wildLeopard = new Leopard('Wild Leo');
    console.log(wildLeopard.hunt('gazelle'));

    console.log('\n Domesticated leopard "hunting":');
    console.log(domesticLeopard.hunt('Ball'));

    console.log('\n Domesticated-Specific Behaviors');
    console.log(domesticLeopard.play());
    console.log(domesticLeopard.beGroomed());
    console.log(domesticTiger.play());
    console.log(domesticTiger.beGroomed());

    shelter.careForAnimals();
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

    showDomesticatedFelines();

}

main();
