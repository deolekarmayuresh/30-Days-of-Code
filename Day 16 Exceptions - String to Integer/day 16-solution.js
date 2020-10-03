// code snippet for Day 16: Exceptions - String to Integer

/*
 * You can use the following pseudocode:
 *
 * `S` = read string from stdin.
 * try {
 *     `N` = numeric value of `S`.
 *     
 *     If `N` is `NaN` or `undefined`, then some exception must be thrown,
 *     you can write the following withtout using conditional statement:
 *     <condition to return true when `N` is `NaN` or `undefined`> && an_undefined_function_call()
 *
 *     print `N`
 * } catch (err) {
 *     print `Bad String`.
 * }
 */

function main() {
    const S = readLine();
    try {
        let num = parseInt(S) || isNaN(num)
        
        console.log(num)
    
    }catch (err){
        console.log('Bad String')
    }
}
