// code snippet for Day 8: Dictionaries and Maps

function processData(input) {
    //Enter your code here
    let tempArry = input.split("\n");
    let entriesLen = tempArry.splice(0, 1); //get the number of entries out of the array
    let queries = tempArry.splice(entriesLen); //dump the queries into their own array

    for (let i = 0; i < entriesLen; i++) {
    tempArry[i] = tempArry[i].split(" ");//split the names from the phones to prepare for mapping
  }
  
  //turn the array into a map
  var phonebk = new Map(tempArry);
    queries.map(name => {
    if(phonebk.has(name)){
        console.log(name + "=" + phonebk.get(name));
    }else{
        console.log("Not found");
    }
})
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
