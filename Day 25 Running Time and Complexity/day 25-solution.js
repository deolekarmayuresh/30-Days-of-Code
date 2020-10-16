// code snippet for Day 25: Running Time and Complexity

function processData(input) {
    //Enter your code here
    let inputArry = input.split('\n').map(Number);
        
    // removes the first element
    inputArry.shift();
    
    inputArry.forEach(function(element) {
         if (isPrime(element)) {
            console.log('Prime');
         } else {
            console.log('Not prime');
         }
    });
} 

function isPrime(number) {
    let range = Math.floor(Math.sqrt(number));
    if (number < 2) {
        return false;
    } else if (number === 2) {
        return true;
    }

    for (let i = 2; i <= range; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
