const addArrayElementsArrow = (arr: (number | string)[]): number => {
    let sum = 0;
    for (const item of arr) {
        const num = Number(item);
        if (!isNaN(num)) {
            sum += num;
        }
    }
    return sum;
};

const arrNumbers: number[] = [2, 4, 6, 8, 10];
const arrStrings: string[] = ['11', 'twenty two', '33', '44', 'no number'];

console.log('Sum of numbers:', addArrayElementsArrow(arrNumbers));
console.log('Sum of strings:', addArrayElementsArrow(arrStrings));
