// code snippet for Day 6 Let's Review

function processData(input) {
    //Enter your code here
    let inputArr = input.split('\n').slice(1);
    inputArr.forEach((str) => {
      let even = '';
      let odd = '';
        for(let i = 0; i < str.length; i++) {
            i % 2 ? odd += str[i] : even += str[i];
        }
        console.log(`${even} ${odd}`);
    });
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