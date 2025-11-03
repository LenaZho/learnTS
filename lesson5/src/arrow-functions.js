const addArrayElements = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + Number(arr[i]);
    }
    return sum;
};

const numbers = [2, 4, 6, 8, 10];
const strings = ['11', '22', '33', '44', '155'];

console.log('Sum of numbers:', addArrayElements(numbers));
console.log('Sum of strings:', addArrayElements(strings));
