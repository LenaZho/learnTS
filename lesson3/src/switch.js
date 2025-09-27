const a = 6;
switch (a) {
    case 1:
        console.log('a === 5');
        break;
    case 2:
        console.log('a === 4');
        break;
    case 6:
        console.log('a === 7');
        break;
    default:
        console.log('none of the above');
}

const b = null;
switch (b) {
    case true:
        console.log('b === yes');
        break;
    case false:
        console.log('b === no');
        break;
    case undefined:
        console.log('b === maybe');
        break;
    default:
        console.log('no idea');
}
