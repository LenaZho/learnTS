const addArrayElementsArrow = (arr: (number | string)[]): number => {
    let sum = 0;
    for (const item of arr) {
        sum += Number(item);
    }
    return sum;
};

const arrNumbers: number[] = [2, 4, 6, 8, 10];
const arrStrings: string[] = ['11', '22', '33', '44', '155'];

console.log('Sum of numbers:', addArrayElementsArrow(arrNumbers));
console.log('Sum of strings:', addArrayElementsArrow(arrStrings));
