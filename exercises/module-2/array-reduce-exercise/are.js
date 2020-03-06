// Turn an array of numbers into the sum of all the numbers in the array.

// const arr =[1,2,3,4,5,6,7,8,9]

// const result = arr.reduce(function(a,b){
//     a+=b
//     return a
// })

// console.log(result)


// 2) Turn an array of numbers into a long string of all those numbers.

// const arr = [1,2,3]

// const result = arr.reduce(function(a,b){
//     return a.concat(b)
// }, "")

// console.log(result)

// // 3) Turn an array of voter objects into a count of how many people voted

// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]

// const voteCount = voters.reduce(function(final, voter){
//     if (voter.voted){
//         final++
//     }
//     return final
// }, 0)

// console.log(voteCount)


// // 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once.

// const wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ]

// const shoppingSpree = wishlist.reduce(function(final,total){
//     final += total.price
//     return final
// }, 0)

// console.log(shoppingSpree)



// // 5) Given an array of arrays, flatten them into a single array

// const arr = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ]

// var depth = 1

// // const result = arr.reduce(function(final, newArr){
// //     final += newArr

// //     return final.concat(newArr)
// // },[])
// // console.log(result)
// console.log(arr.flat(depth))

// // 6) Given an array of potential voters, return an object representing the results of the vote

const arr = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const voterObj = arr.reduce(function(final, voter){
        if(voter.voted){
            final.didVote++
        } else {
            final.didntVote++
        }
        return final
}, {didVote: 0, didntVote: 0})

console.log(voterObj)
// // 7) Using AJAX, do a GET request to your own Github repositories endpoint. The URL will be https://api.github.com/users/<YOUR GITHUB USERNAME HERE>/repos.

// const result = arr.reduce(x => x   )