//  ES6 Practice - Let,
//    Const, Arrow
//    Functions, Default
//    Arguments, Template
//    Literals

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//    ERIC JONES
//    3 JAN 2018 + 2 MIN READ

// let and const

// Replace all the vars with let and const. Alter the code however
// necessary to make sure this continues to work (so the pet's name isn't
// "John", but instead "spot" is returned). You only need to delete var
// and insert let and const

// John is the pet owner, and his name should be stored differently than 
// the other names.


// let name = "John"
// const age = 101

// function runForLoop(pets) {
//     const petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

// ---------------------------------------------------------------------------------------------------------------------

// ES6 Aroow Functions

// Task 1
// Re-write this .map() using an arrow function:

// Be aware that if JavaScript sees a { directly after the => it will think it's 
// starting a function, and not starting an object, so the : will be an
// unexpected symbol. 

// const fruitAndveggies = [
    
//     { type: "vegetable", name: "carrot" },
//     { type: "fruit", name: "apple"},
//     { type: "vegetable", name: "cucumber"}
// ]

// const mapVeggies = fruitAndveggies.map(edible => `${edible.name}${edible.type}`)

// console.log(mapVeggies)

// ------------------------------------------------------------------------------------------------------------------------------

// // Task 2
// // Re-write this .filter() using an arrow function:

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// const filterForFriendly = people.filter(person => `${person.friendly}`)

// console.log(filterForFriendly)


// // Task 3
// // Re-write the following functions to be arrow functions:

// ------------------------------------------------------------------------------------------------------------------------------

// function doMathSum(a, b) {
//     return a + b
// }


// const doMathSum = (a, b) => 3 + 5

// console.log(doMathSum())

// const produceProduct = function(a, b) {
//     return a * b
// }

// const produceProduct = (a, b) => 5 * 5

// console.log(produceProduct())


// ------------------------------------------------------------------------------------------------------------------------------


// // Task 4


// // Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

// Hi Kat Stark, how does it feel to be 40?

// const person = [
//     {firstName: 'Kat', lastName: 'Stark', age: 40}
// ]

// const printString = person.map((user) => `Hi ${user.firstName} ${user.lastName}, how does it feel to be ${user.age}?`)

// console.log(printString)

// // firstName should default to "Jane"
// // lastName should default to "Doe"
// // age should default to 100


// ------------------------------------------------------------------------------------------------------------------------------

// // Extra Credit
// // Use template literals to build the string

// // Task 5
// // Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.


// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
//  function filterForDogs(arr) {
//      return arr.filter(animal => {
//          if (animal.type === "dog") {
//              return true
//          } else {
//              return false
//          }
//      })
//  }

// ------------------------------------------------------------------------------------------------------------------------------

// // Template Literals
// // Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

// Hi Janice!

// Welcome to Hawaii. 

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything. 

// ------------------------------------------------------------------------------------------------------------------------------