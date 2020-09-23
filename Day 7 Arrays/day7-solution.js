//code snippet for Day 7: Arrays

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    console.log(arr.reverse().toString().replace(/,/g,' '));
}
