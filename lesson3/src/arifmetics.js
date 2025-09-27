let a = 2;
const b = '3';
const c = 7;
const d = '7';
const d1 = 'true';
let f = 6;

console.log(d + d1, typeof (b + d1));
console.log(a + b);
console.log(a + c);
console.log(a - b);
console.log(b - d);
console.log(c * a);
console.log(a / b);
console.log(a % c);
console.log(a ** b);

f += f;
console.log(f);
f -= f;
console.log(f);
f = 5;
f *= f;
console.log(f);
f /= f;
console.log(f);
f %= f;
console.log(f);
f = 5;
f **= f;
console.log(f);

let bNum = Number(b);
let dNum = d;

console.log(bNum++);
console.log(--dNum);
console.log(a++);
console.log(--f);
