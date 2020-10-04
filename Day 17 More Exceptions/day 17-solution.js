// code snippet for Day 17: More Exceptions


//Write your code here
class Calculator{
    power(n, p) {

        if (n < 0 || p < 0) {
            throw "n and p should be non-negative"
        }else {
            return n**p
        }

    }
}

