// 1. write a function that Returns a list of everyone older than 18.

// const arr = [
//     {
//         firstName: "Sarah",
//         lastName: "Palin",
//         age: 47
//     },
//     {
//         firstName: "Frank",
//         lastName: "Zappa",
//         age: 12
//     },
//     {
//         firstName: "Rick",
//         lastName: "Sanchez",
//         age: 78
//     },
//     {
//         firstName: "Morty",
//         lastName: "Smith",
//         age: 29
//     },
//     {
//         firstName: "Kyle",
//         lastName: "Mooney",
//         age: 27
//     },
//     {
//         firstName: "Pasha",
//         lastName: "Datsyuk",
//         age: 13
//     },
//     {
//         firstName: "Lev",
//         lastName: "Tolstoy",
//         age: 82
//     }
// ]

// const result = arr.filter(x=>x.age>=18)

// console.log(result)



// // 2. write a function that is sorted alphabetically by last name.

// const list = [
//     {
//         firstName: "Sarah",
//         lastName: "Palin",
//         age: 47
//     },
//     {
//         firstName: "Frank",
//         lastName: "Zappa",
//         age: 12
//     },
//     {
//         firstName: "Rick",
//         lastName: "Sanchez",
//         age: 78
//     },
//     {
//         firstName: "Morty",
//         lastName: "Smith",
//         age: 29
//     },
//     {
//         firstName: "Kyle",
//         lastName: "Mooney",
//         age: 27
//     },
//     {
//         firstName: "Pasha",
//         lastName: "Datsyuk",
//         age: 13
//     },
//     {
//         firstName: "Lev",
//         lastName: "Tolstoy",
//         age: 82
//     }
// ]

// const newArray = list.sort((a, b) => {
//     if (a.lastName > b.lastName) {
//         return 1
//     } else {
//         return -1
//     }
// })

// console.log(newArray)

// // 3. write a function where each name and age is embedded in a string that looks like an HTML <li> element.

// const arr = [
//     {
//         firstName: "Sarah",
//         lastName: "Palin",
//         age: 47
//     },
//     {
//         firstName: "Frank",
//         lastName: "Zappa",
//         age: 12
//     },
//     {
//         firstName: "Rick",
//         lastName: "Sanchez",
//         age: 78
//     },
//     {
//         firstName: "Morty",
//         lastName: "Smith",
//         age: 29
//     },
//     {
//         firstName: "Kyle",
//         lastName: "Mooney",
//         age: 27
//     },
//     {
//         firstName: "Pasha",
//         lastName: "Datsyuk",
//         age: 13
//     },
//     {
//         firstName: "Lev",
//         lastName: "Tolstoy",
//         age: 82
//     }
// ]

// const newArr = arr.map((a) => {
//     return `<li>${a.firstName + " " + a.lastName + " " + a.age}</li>`
// })

// console.log(newArr)

// // 4. combine all 4 functions into one function

// const arr = [
//     {
//         firstName: "Sarah",
//         lastName: "Palin",
//         age: 47
//     },
//     {
//         firstName: "Frank",
//         lastName: "Zappa",
//         age: 12
//     },
//     {
//         firstName: "Rick",
//         lastName: "Sanchez",
//         age: 78
//     },
//     {
//         firstName: "Morty",
//         lastName: "Smith",
//         age: 29
//     },
//     {
//         firstName: "Kyle",
//         lastName: "Mooney",
//         age: 27
//     },
//     {
//         firstName: "Pasha",
//         lastName: "Datsyuk",
//         age: 13
//     },
//     {
//         firstName: "Lev",
//         lastName: "Tolstoy",
//         age: 82
//     }
// ]

// const result = arr.filter(x=>x.age.name )

// console.log(result)


// // Extra Credit
// // Create another array of one or more individuals and add it to the original array.
// // Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array.
// // Remove the second individual from the array.
// // Return the array in reverse order.

// const arr = [
//     {
//         firstName: "Sarah",
//         lastName: "Palin",
//         age: 47
//     },
//     {
//         firstName: "Frank",
//         lastName: "Zappa",
//         age: 12
//     },
//     {
//         firstName: "Rick",
//         lastName: "Sanchez",
//         age: 78
//     },
//     {
//         firstName: "Morty",
//         lastName: "Smith",
//         age: 29
//     },
//     {
//         firstName: "Kyle",
//         lastName: "Mooney",
//         age: 27
//     },
//     {
//         firstName: "Pasha",
//         lastName: "Datsyuk",
//         age: 13
//     },
//     {
//         firstName: "Lev",
//         lastName: "Tolstoy",
//         age: 82
//     }
// ]

// const result = arr.filter(x=>x.age.name )

// console.log(result)