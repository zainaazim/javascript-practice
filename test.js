/**
 * TEST DRIVER
 * 
 * This file runs the test cases for the problems/ folder.
 * You should NOT need to edit this file.
 *  
 */

// Total number of problems in ./problems
const numberOfProblems = 16

/**
 * Run Test
 * 
 * Given a file number, run the test cases for that problem.
 * Outputs "Problem ${number}: Passed ${number of tests passed}/${number of tests}"
 * For each failed test,
 *  Outputs "Input ${test} returned ${result} but expected ${expectedResult}"
 * 
 * @param {*} number of the file
 */
function runTest(number) {
    // Get the problem and test cases from the file
    const { problem, tests } = require(`./problems/${number}`);
    
    // Initialize passed counter and failed list
    let passed = 0;
    let failed = [];

    // Run each test case
    for (const test of tests) {
        const [input, expected] = test;

        const expectedResult = JSON.stringify(expected)
        const result = JSON.stringify(problem(input));

        if (result === expectedResult) {
            // Result Passed
            passed += 1;
        } else {
            // Result Failed
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

// Get arguments from the command line
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
