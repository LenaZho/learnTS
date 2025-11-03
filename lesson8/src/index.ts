import { Cat } from './abstraction';
// Cats
const cat1 = new Cat('Masamune', 13, 'Metis', true);
const cat2 = new Cat('Bonifatsii', 6, 'Metis', false);
const cat3 = new Cat('Bulka', 5, 'British shorthair', true);

const cats: Cat[] = [cat1, cat2, cat3];

console.log('Cat Management\n');

// Cat information
console.log('Cat Information:');
cats.forEach((cat, index) => {
    console.log(`${index + 1}. ${cat.toString()}`);
});

console.log('\n Cat Sounds:');
cats.forEach(cat => {
    console.log(`- ${cat.makeSound()}`);
});

console.log('\n How cats move:');
cats.forEach(cat => {
    console.log(`- ${cat.move()}`);
});

console.log('\n Cat behaviors:');
cats.forEach(cat => {
    console.log(`- ${cat.purr()}`);
    console.log(`- ${cat.scratch()}`);
    console.log(`- ${cat.hunt()}`);
    console.log('');
});

// Filters
console.log(' Indoor cats only:');
const indoorCats = cats.filter(cat => cat.toString().includes('indoor: true'));
indoorCats.forEach(cat => {
    console.log(`- ${cat.getInfo()}`);
});

console.log('\n Specific cat details:');
const targetCat = cats.find(cat => cat.getBreed() === 'British shorthair');
if (targetCat) {
    console.log(`Found: ${targetCat.toString()}`);
    console.log(`Action: ${targetCat.hunt()}`);
}
