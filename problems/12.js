/**
 * Problem 12: Switch Statement
 * 
 * Given a fruit, return the price.
 * Here are the costs for each fruit:
 *  Orange - $1, Apple - $1.29, Grapes - $1.50, Banana - $0.75.
 *  All other food costs $2.
 * 
 * Use a switch statement.
 * 
 * @example "apple" -> "$1.29"
*/
function problem(fruit) {

    switch (fruit) {
        case 'orange':
            return "$1";
            break;
        case 'apple':
            return "$1.29";
            break;
        case 'grapes':
            return "$1.50";;
            break;
        case 'banana':
            return "$0.75";;
            break;
        default:
            return "$2";
            break;
    }
}

const tests = [
    ["orange", "$1"],
    ["apple", "$1.29"],
    ["grapes", "$1.50"],
    ["banana", "$0.75"],
    ["grapefruit", "$2"],
    ["melon", "$2"]
]

module.exports = {problem, tests};