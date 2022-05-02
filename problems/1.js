/**
 * Problem 1: Arrow Functions
 * 
 * getLastLetter is supposed to return the last letter in the string, but there is a bug!
 * Find and fix the bug.
 * While you're at it, let's also convert this function to an arrow function.
 * 
 * @example "string" -> "g"
*/
function problem(str) {
    
    // TODO: Convert this to an arrow function
    // TODO: Fix the bug inside the function
    function getLastLetter(word) {
        return word.charAt(word.length)
    }
    
    return getLastLetter(str);
}

const tests = [
    ["string", "g"],
    ["arrow function", "w"]
]

module.exports = {problem, tests};