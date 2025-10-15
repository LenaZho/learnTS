import { Lion } from './lion';
import { Tiger } from './tiger';
import { Leopard } from './leopard';
import { actionOfAnimal, organizeHunt, felineSizes, animalsField, compareHuntingStyles } from './animal-care';

function createBigCats(): { mufasa: Lion; tigo: Tiger; baheera: Leopard } {
    const mufasa = new Lion('Mufasa');
    const tigo = new Tiger('Tigo');
    const baheera = new Leopard('Baheera');

    return { mufasa, tigo, baheera };
}

function main(): void {
    console.log('Do you have a minute to talk about big cats?');

    const { mufasa, tigo, baheera } = createBigCats();

    console.log('Meet the big cats:');
    actionOfAnimal(mufasa);
    actionOfAnimal(tigo);
    actionOfAnimal(baheera);


    console.log('\n They hunt the prey:');
    organizeHunt(mufasa);
    organizeHunt(tigo);
    organizeHunt(baheera);


    console.log('\n Feline-specific behaviors:');
    felineSizes(mufasa);
    felineSizes(tigo);
    felineSizes(baheera);

    console.log('\n Their specific behaviors:');
    console.log(`${mufasa.name}: ${mufasa.leadPride()}`);
    console.log(`${tigo.name}: ${tigo.swim()}`);
    console.log(`${baheera.name}: ${baheera.climbTree()}`);


    const allCats = [mufasa, tigo, baheera];
    animalsField(allCats);

    compareHuntingStyles(allCats);
}

main();
