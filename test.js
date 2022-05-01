// Total number of problems in ./problems
const numberOfProblems = 2

// Run a test
function runTest(number) {
    const { problem, tests } = require(`./problems/${number}`);
    let passed = 0;
    let failed = [];

    // Run each test case
    for (const test of tests) {
        const [input, expected] = test;
        const expectedResult = JSON.stringify(expected)
        const result = JSON.stringify(problem(input));

        if (result === expectedResult) {
            passed += 1;
        } else {
            failed.push(`Input ${JSON.stringify(input)} returned ${result} but expected ${expectedResult}`)
        }
    }

    // Print Results 
    const color = passed == tests.length ? '\x1b[32m' : '\x1b[33m' // Green if all tests past, else Yellow
    console.log(`   ${color}Problem ${number}: Passed ${passed}/${tests.length}\x1b[0m`)
    
    // Output every failed test case
    for (const fail of failed) {
        console.log(`       ${fail}`);
    }
}

// Get arguments
const args = process.argv.slice(2).map(arg => parseInt(arg));

if (args.length) {
    // Run the provided problems
    console.log(`TESTING PROBLEM: ${args.join(', ')}`);
    for(const arg of args) {
        if (arg < numberOfProblems) {
            runTest(arg);
        }
    }
} else {
    // Run all of the problems
    console.log(`TESTING ALL PROBLEMS`);
    for(let i = 0; i<numberOfProblems; i++){
        runTest(i);
    }   
}
