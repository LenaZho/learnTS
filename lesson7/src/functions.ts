function addArrayElements(arr: (number | string)[]): number {
    let sum = 0;
    for (const item of arr) {
        const num = Number(item);
        if (!isNaN(num)) {
            sum += num;
        }
    }
    return sum;
}

const numbers: number[] = [2, 4, 6, 8, 10];
const strings: string[] = ['1', 'three', '5', '7', 'nine', 'no number'];

console.log('Sum of numbers:', addArrayElements(numbers));
console.log('Sum of strings:', addArrayElements(strings));
