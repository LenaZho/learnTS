import { execSync } from 'child_process';

const testFiles = {
    'lion': 'test/lion.test.ts',
    'tiger': 'test/tiger.test.ts', 
    'leopard': 'test/leopard.test.ts',
    'domesticated-feline': 'test/domesticated-feline.test.ts',
};

function runTest(testName) {
    const testFile = testFiles[testName];
    if (!testFile) {
        console.log(` Unknown test: ${testName}`);
        console.log(` Available tests: ${Object.keys(testFiles).join(', ')}`);
        return;
    }
    
    console.log(` Running ${testName} tests...`);
    try {
        execSync(`npx mocha --require ts-node/register ${testFile}`, { 
            stdio: 'inherit' 
        });
        console.log(` ${testName} tests passed!`);
    } catch (error) {
        console.log(` ${testName} tests failed!`);
        process.exit(1);
    }
}

function runAllTests() {
    console.log(' Running all tests...');
    try {
        execSync('npm test', { stdio: 'inherit' });
        console.log(' All tests passed!');
    } catch (error) {
        console.log(' Some tests failed!');
        process.exit(1);
    }
}

const testName = process.argv[2];

if (!testName) {
    runAllTests();
} else {
    runTest(testName);
}