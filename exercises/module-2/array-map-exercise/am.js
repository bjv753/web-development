// 1. Make an array of numbers that are doubles of the first array
// const arr = [9,8,7,6,5,4,3,2,1,0]

// const result = arr.map(x => x*2)

// console.log(result)

// 2. Take an array of numbers and make them strings
// const arr = [2, 5, 100]


// const result = arr.map(num => num + "")

// console.log(result)

// 3.  Capitalize each of an array of names
// var longStr = 'the quick brown fox jumed over the lazy dog'

// var capitalizeString = (str) => str[0]
// .toUpperCase() + str.slice(1).toLowerCase();

// var words = longStr.split(' ').map(capitalizeString);

// console.log(words)


// .4 Make an array of strings of the names
// const arr = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ] 

// const namesOnly = arr.map(x => x.name)

// console.log(namesOnly)

// 5. Make an array of strings of the names saying whether or not they can go to The Matrix

// const matrixCandies =

// [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// const candies = matrixCandies.map(function(candy){
//     if(candy.age >= 18){
//         return candy.name + " is old enough to enter the Matrix!"
//     } else {
//         return candy.name + " is not old enough to enter the Matrix!"
//     }
    
// })

// console.log(candies)

// 6. Make an array of the names in h1s, and the ages in h2s
const arr = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const result = arr.map(user => `<h1>${user.name}</h1><h2>${user.age}</h2>`
    
)

console.log(result)


