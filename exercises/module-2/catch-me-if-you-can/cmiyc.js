// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:


// function sum(num1, num2){
//     return num1 + num2
// }
// // expected, actual
// const actual = sum(10, 10)
// const expected = 20

// if(actual !== expected){
//     throw new Error(`TEST FAILED: Expected ${expected}, but received ${actual}.`)
// } else {
//     console.log(`TEST PASSED: ${expected} === ${actual}`)
// }


// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.


// function sum(num1, num2){
//     return num1 + num2
// }
// // expected, actual
// const actual = sum(10, 10)
// const expected = 20

// if(actual !== expected){
//     throw new Error(`TEST FAILED: Expected ${expected}, but received ${actual}.`)
// } else {
//     console.log(`TEST PASSED: ${expected} === ${actual}`)
// }


// // 2a) Given a user object, write a function called login that takes a username and password as parameters. 
// Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"


// function login(userName, password){
//     return userName+password
   
// }
// // expected, actual
// const actual = login("name", "pass")
// const expected = "namepass"

// if(actual !== expected){
//     throw new Error(`login failed. Expected ${expected}, but received ${actual}.`)
// } else {
//     console.log(`login successful! ${expected} === ${actual}`)
// }


// // 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!



function login(username, password){
    return username+password
}
// expected, actual
const actual = login("sam", "123abc")
const expected = "sam123abc"

if(actual !== expected){
    throw new Error(`login failed. Expected ${expected}, but received ${actual}.`)
} else {
    console.log(`login successful! ${expected} === ${actual}`)
}
