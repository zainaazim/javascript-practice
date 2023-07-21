/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {


    
    let without_space = "";

    for (const element of str) {
        if (element != " "){
            without_space += element;
        }

    without_space = without_space.toLowerCase();

    }

    let str_reversed = "";

    for (let x = without_space.length-1; x >= 0; x--) {
        str_reversed += without_space[x];
    }
    
   if (without_space === str_reversed){
        return true;
    }
    else{
        return false;
    }
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};