// code snippet for Day 26: Nested Logic

function processData(input) {
    //Enter your code here
    let actual = input.split("\n")[0].split(" ").map(num => parseInt(num));
    let expected = input.split("\n")[1].split(" ").map(num => parseInt(num));
    let [actualDay, actualMonth, actualYear] = actual;
    let [expectedDay, expectedMonth, expectedYear] = expected;

    if(actualYear > expectedYear){
        console.log(10000);
    }
    else if(actualYear === expectedYear && actualMonth > expectedMonth){
        console.log((actualMonth - expectedMonth) * 500);
    }
    else if(actualMonth === expectedMonth && actualDay > expectedDay){
        console.log((actualDay - expectedDay) * 15);
    }
    else{
        console.log(0);
    }
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
