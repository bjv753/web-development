// Write a function that takes two arrays as parameters.
//  The first array will be an array of peoples names,
//  and the second array will be the alphabet.
//  Using a for loop within a forloop, 
// create and return an array that looks like this


// }
// Output: 
// ["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// 
// 
// Here's the array of names and the alphabet to get you started:
// 
// function forception(people, alphabet){
// your code here



const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
const alphabet = ["A", "B", "C"]
const animals = ["bear", "cat", "dog"]

// function forception(people, alphabet, animals) {
//     let alphapeople = []
//     for (let i = 0; i < people.length; i++) {
//         alphapeople.push(people[i])
//         for (let j = 0; j < alphabet.length; j++) {
//             alphapeople.push(alphabet[j])
//             for (let k = 0; k < animals.length; k++) {
//                 alphapeople.push(animals[k])
//             }
//         }
//     }
//     return alphapeople
// }

function forception(people, alphabet, animals) {
    let alphapeople = []
    for (let i = people.length-1; i >= 0; i--) {
        alphapeople.push(people[i])
        for (let j = 0; j < alphabet.length; j++) {
            alphapeople.push(alphabet[j])
            for (let k = 0; k < animals.length; k++) {
                alphapeople.push(animals[k])
            }
        }
    }
    return alphapeople
}
console.log(forception(people, alphabet, animals))

// function forception(people, alphabet) {
//     let alphapeople = []
//     for (let i = 0; i < people.length; i++) {
//         alphapeople.push(people[i])
//         alphapeople.push(alphabet[i])
//     }
//     return alphapeople
// }

// // Defining a function
// function sayHello() {
//     document.write("Hello, welcome to this website");
// }

// // Calling a function
// sayHello(); 
// // Prints: Hello, welcome to this website.

// The For Loop

//      for   (initialization;   condition;    increment)
//       ^            ^              ^             ^
//       |            |              |             |
//    variable  (parameter 1;   parameter 2;   parameter 3)