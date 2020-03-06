

// 1) Sort an array from smallest number to largest

// const arr = [1, 3, 5, 2, 90, 20]

// const result = arr.sort()

// console.log(result)

// 2) Sort an array from largest number to smallest

// const arr = [1, 3, 5, 2, 90, 20]

// const result = arr.sort(function(b, a){
//     return a - b
// })

// console.log(result)

// 3) Sort an array from shortest string to longest

// const arr = ["dog", "wolf", "by", "family", "eaten"]

// const result = function(sorted){
//     return sorted.sort((strA, strB)=>{
//         return strA.length - strB.length
//     })
// }

// console.log(result(arr))

// 4) Sort an array alphabetically

// const arr = ["dog", "wolf", "by", "family", "eaten"]

// const result = arr.sort((a, b) => {
//     return (a > b) ? 1 : -1      
// })

// console.log(result)

// 5) Sort the objects in the array by age

// const people = [
//     { name: "Quiet Samurai", age: 22 },
//     { name: "Arrogant Ambassador", age: 100 },
//     { name: "Misunderstood Observer", age: 2 },
//     { name: "Unlucky Swami", age: 77 }
// ]

// people.sort((a, b) => a.age - b.age)

// console.log(people)