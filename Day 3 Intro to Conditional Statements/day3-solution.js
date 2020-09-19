// code snippet for Day 3: Intro to Conditional Statements

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const N = parseInt(readLine(), 10);

    if((N%2)==0){
        if((N>=2 && N<=5) || N>20)
        {
            console.log("Not Weird");
        }
        else
        {
            console.log("Weird");
        }
    }
    else
    {
        console.log("Weird"); 
    }
}

