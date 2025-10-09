function addArrayElements(arr: (number | string)[]): number {
    let sum = 0;
    for (const item of arr) {
        sum += Number(item);
    }
    return sum;
}

const numbers: number[] = [2, 4, 6, 8, 10];
const strings: string[] = ['1', '3', '5', '7', '9'];

console.log('Sum of numbers:', addArrayElements(numbers));
console.log('Sum of strings:', addArrayElements(strings));
