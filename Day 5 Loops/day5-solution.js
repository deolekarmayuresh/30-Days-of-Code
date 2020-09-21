// code snippet for Day 5: Loops

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const n = parseInt(readLine(), 10);
    for(let i=1;i<11;i++){
        console.log(`${n} x ${i} = ${n * i}`)
    }
}
