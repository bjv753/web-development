// 1. const and let keywords

// function f() {
//     var x = 1
//     let y = 2
//     const z = 3
//     {
//         var x = 100
//         let y = 200
//         const z = 300
//         console.log('x in block scope is', x)
//         console.log('y in block scope is', y)
//         console.log('z in block scope is', z)
//     }
//     console.log('because block scope overrides function scope, x outside of block scope is', x )
//     console.log('y outside of block scope is', y)
//     console.log('z outside of block scope is', z)
// }

// f()

// ------------------------------------------------------------------------------------------------------------

// 2. Array helper functions

// ------------------------------------------------------------------------------------------------------------

// forEach

// var colors = ['red', 'green', 'blue']

// function print(x){
//     console.log(x)
// }

// colors.forEach(print)

// ------------------------------------------------------------------------------------------------------------

// map

// var colors = ['red', 'green', 'blue']

// var colorCaps = colors.map(capitalize)

// function capitalize(val){
//     return val.toUpperCase()
// }

// console.log(colorCaps)

// ------------------------------------------------------------------------------------------------------------

// filter

// var values = [31, 7, 12, 21, 33, 42, 55, 1]

// function lessThan20(val){
//     return val < 20
// }

// var valuesLessThan20 = values.filter(lessThan20)

// console.log(valuesLessThan20)

// ------------------------------------------------------------------------------------------------------------

// find

var people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9},
    {name: 'John', age: 40},
    {name: 'Ann', age: 19},
    {name: 'Elizabeth', age: 16}
]

function teenager(person) {
    return person.age > 10 && person.age < 20
}

var firstTeenager = people.find(teenager)

console.log()

