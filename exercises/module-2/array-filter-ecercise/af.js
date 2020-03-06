// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

// const arr = [9,8,7,6,5,4,3,2,1]

// const result = arr.filter(x => x > 5)

// console.log(result)

// 2) Given an array of numbers, return a new array that only includes the even numbers.

// const arr = [9,8,7,6,5,4,3,2,1]

// const result = arr.filter(x => x % 2 === 0)

// console.log(result)

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

// const arr = ["dog", "wolf", "by", "family", "eaten", "camping"]

// const newArr = []

//     for(let i = 0; i<arr.length; i++){
//         if(arr[i].length <= 5)
//         newArr.push(arr[i])
//     }


// console.log(newArr)

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

// const arr = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]

// const result = arr.filter(x => x.member = true )

// console.log(result)

// 5) Make a filtered list of all the people who are old enough to see The Matrix (younger than 18)

const arr = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const result = arr.filter(x => x.age >= 18)

console.log(result)