// code snippet for Day 21: Generics

/**
*    Name: printArray
*    Print each element of the generic vector on a new line. Do not return anything.
*    @param A generic vector
**/

// Write your code here

template<typename M> 
void printArray(vector<M> array) {
     for(M i : array){
          cout << i << endl;
     }
}
