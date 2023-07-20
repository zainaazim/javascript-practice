/**
 * Problem 0: If statements
 * 
 * Given a percentage, return the letter grade for that percentage. 
 * (Don't worry about +/-).
 * 
 * A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: 0-59
 * 
 * @example 92 -> "A", 75 -> "B"
*/
function problem(percentage) {

    let grade = "";

    if (percentage >= 90 && percentage <= 100) {
        grade = "A";
    }
    else if (percentage >= 80 && percentage <= 89) {
        grade = "B";
    }
    else if (percentage >= 70 && percentage <= 79) {
        grade = "C";
    }
    else if (percentage >= 60 && percentage <= 69) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    return grade;

}

const tests= [
    [100, "A"],
    [92, "A"],
    [90, "A"],
    [85, "B"],
    [70, "C"],
    [69, "D"],
    [0, "F"]
]

module.exports = {problem, tests};