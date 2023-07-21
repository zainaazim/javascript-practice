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


    
    let without_space = " ";

    for (const element of str) {
        if (element != " "){
            without_space += element;
        }

    without_space = without_space.toLowerCase();

    }

    let str_reversed = " ";

    for (let x = without_space.length; x > 0; x--) {
        str_reversed += without_space[x];
    }

    return str_reversed;

   /* if (without_space === str_reversed){
        return true;
    }
    else{
        return false;
    }

    /*
    if (without_space.length % 2 == 0) {

        const middle = str.length / 2;
        const first = str.slice(0,middle);
        const last = str.slice(middle, str.length);

        let last_reversed = ""

        for (let x = last.length; x > 0; x--) {
            last_reversed += last[x];
        }

        return last_reversed;

    }

    else {

        const middle = Math.floor(str.length / 2);
        let first = str.slice(0,middle);
        let last = str.slice(middle, str.length);

        let last_reversed = ""

        for (let x = last.length; x > 0; x--) {
            last_reversed += last[x];
        }

        return last_reversed;

    }
    */
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};