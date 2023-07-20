/**
 * Problem 10: Strings
 * 
 * Given a string, return a modified version with the first half in UPPERCASE, and the second half in lowercase. 
 * If the string has odd length, the middle character should be lowercase.
 * 
 * @example "abcdef" -> "ABCdef"
*/
function problem(str) {

    if (str.length % 2 == 0) {

        const middle = str.length / 2;
        const first = str.slice(0,middle).toUpperCase();
        const last = str.slice(middle, str.length).toLowerCase();

        return first + last;

    }

    else {

        const middle = Math.floor(str.length / 2);
        let first = str.slice(0,middle).toUpperCase();
        let last = str.slice(middle, str.length).toLowerCase();

        return first + last;

    }
}

const tests = [
    ["abcdef", "ABCdef"],
    ["abcdefg", "ABCdefg"],
    ["HELLO THERE", "HELLO there"],
    ["js4Life!", "JS4Life!"],
    ["UNiTeD STATes OF AMerICA", "UNITED STATEs of america"]
]

module.exports = {problem, tests};