/**
 * Problem 15: FizzBuzz
 * 
 * Given a number, return a array that counts up to that number BUT
 *  If a number is divisible by 3, replace it with "Fizz",
 *  If a number is divisible by 5, replace it with "Buzz",
 *  If a number is divisible by 3 and 5, replace it with "FizzBuzz"
 * 
 * @example 3 -> [1, 2, "Fizz"]
 * @example 5 -> [1, 2, "Fizz", 4, "Buzz"]
 * @example 15 -> [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
*/
function problem(number) {
    
    let my_array = [];
    for (let x = 1; x < number+1; x++) {
        my_array.push(x);
    }

    my_array.forEach(function(item, index, array) {

        if (item % 5 === 0 && item % 3 != 0){
            array[index] = "Buzz";
        }

        else if (item % 3 === 0 && item % 5 != 0){
            array[index] = "Fizz";
        }

        else if (item % 3 === 0 && item % 5 === 0){
            array[index] = "FizzBuzz";
        }
       
    });

    return my_array;

}

const tests = [
    [3, [1, 2, "Fizz"]],
    [5, [1, 2, "Fizz", 4, "Buzz"]],
    [17, [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17]]
]

module.exports = {problem, tests};