const a = 6;
const b = '7';
const d = undefined;

console.log(a > b && b >= 7);
console.log(a < b && b >= 7);

console.log(a > b || b >= 7);
console.log(a < b || b >= 7);
console.log(a > b || b < 8);
console.log((a > b || b < 7) && true);
console.log((a > b || b < 6) && false);

console.log(!(a > b));
console.log(!(a < b));

const c = d ?? 5;
console.log(c);
const e = d ?? '18';
console.log(e);
