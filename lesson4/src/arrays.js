const arr = [];

arr.push([42, 30, 12]);
arr.push(['thanks for the fish', 'hello world']);
arr.push([true, false]);
arr.push(null);

console.log(arr, arr.length);
console.log(arr[0], arr[1], arr[2], arr[3]);

arr[3] = 'new value';
console.log(arr, arr.length);

const filteredArray = arr.filter((item) => typeof item === 'string');
const foundElement = arr.find((item) => typeof item === 'string');
console.log(filteredArray, foundElement);

const element = arr.pop();
console.log(element, arr, arr.length);

const allStrings = arr.flat().filter(item => typeof item === 'string');
const firstString = arr.flat().find(item => typeof item === 'string');
console.log(allStrings, firstString);

const sum = [2, 4, 6, 8, 10].reduce((acc, item) => acc + item, 0);
console.log(sum);

arr[1].forEach(str => {
    console.log('String element:', str);
});

arr[0].forEach(num => {
    console.log('Number element:', num);
});

const upperStringsFromArr = arr[1].map(str => str.toUpperCase());
console.log('Uppercase strings:', upperStringsFromArr);

const doubledNumbersFromArray = arr[0].map(num => num * 3);
console.log('Doubled numbers:', doubledNumbersFromArray);

const invertedBooleansFromArray = arr[2].map(bool => !bool);
console.log('Inverted booleans:', invertedBooleansFromArray);

//Part for training purposes only
//const stringArray = ['apple', 'banana', 'cherry'];
//const numberArray = [1, 2, 3, 4];
//const booleanArray = [true, false, true];
//const anyArray = ['hello', 13, false, null];

