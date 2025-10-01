console.log("for - 0 to 9:");
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("break-continue 0 to 9:");
for (let l = 0; l < 10; l++) {
    if (l === 4) {
        continue;
    }
    console.log(l);
    if (l === 6) {
        break;
    }
}

console.log("for...of - 100 to 0 with step 10:");
const hundreds = [];
for (let j = 100; j >= 0; j -= 10) {
    hundreds.push(j);
}
for (const v of hundreds) {
    console.log(v);
}

console.log("while 0 to 9:");
let k = 0;
while (k < 10) {
    console.log(k);
    k++;
}

console.log("do...while 100 to 0 with step 10:");
let d = 100;
do {
    console.log(d);
    d -= 10;
} while (d >= 0);

console.log("forEach 0 to 9:");
const zeroToNine = [];
for (let m = 0; m < 10; m++) {
    zeroToNine.push(m);
}
zeroToNine.forEach(function (value) {
    console.log(value);
});

console.log("map 100 to 0 with step 10:");
const sameHundreds = hundreds.map(function (value) {
    console.log(value);
    return value;
});
console.log("sameHundreds array:", sameHundreds);
