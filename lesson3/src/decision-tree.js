const a = 3;
const b = '3';

const c = 4;
const d = 1;

const e = 3;
const f = 7;

const g = '8';

if (a > b) {
    console.log('a > b');
} else if (a < b) {
    console.log('a < b');
} else {
    console.log('a === b');
}

if (c > d) {
    console.log('c > d');
} else if (c < d) {
    console.log('c < d');
} else {
    console.log('c === d');
}

if (e > f) {
    console.log('e > f');
} else if (e < f) {
    console.log('e < f');
} else {
    console.log('e === f');
}


if (c < d && g == 8) {
    console.log('c < d && g == 8');
} else if (c > d && typeof g == 'number') {
    console.log('c > d && typeof g == string');
} else {
    console.log('none of the above');
}

if (a > b || g == 8) {
    console.log('a > b || g == 8');
} else if (a < b && typeof g == 'number') {
    console.log('a < b && typeof g == string');
} else {
    console.log('none of the above');
}

if (e > f && g == 8) {
    console.log('e > f && g == 8');
} else if (e < f && g == 8) {
    console.log('e < f && g == 8');
}
