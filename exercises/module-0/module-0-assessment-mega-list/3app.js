// Write a function that: Takes one argument,a number. 
// Has a for loop that iterates from 0-10. 
// Each number in the for loop (0-10) will be multiplied
// by the number given as a parameter to the function
// log to the console “0 multiplied by 11 equals 0”,
// “1 multiplied by 11 equals 11”,
// “2 multiplied by 11 equals 22”, etc.


function multiply(x) {
    for ( i = 0; i < 11; i++) {
        console.log(i*x)
    }
}
multiply(11)
