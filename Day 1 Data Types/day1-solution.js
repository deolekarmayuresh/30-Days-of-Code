// code snippet for Day 1: Data Types

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    var int = 12
    var dbl = 4.0
    var str = "is the best place to learn and practice coding!"

    // Read and save an integer, double, and String to your variables.
    var int = parseInt(readLine());
    var dbl = parseFloat(readLine());
    var str = readLine();
    // Print the sum of both integer variables on a new line.
    console.log(i + int)
    // Print the sum of the double variables on a new line.
    console.log(parseFloat(d + dbl).toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s.concat(str));
}