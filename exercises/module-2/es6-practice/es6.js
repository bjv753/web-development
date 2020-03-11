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

// var people = [
//     {name: 'Jack', age: 50, gender: 'female'},
//     {name: 'Michael', age: 9, gender: 'male'},
//     {name: 'John', age: 40, gender: 'male'},
//     {name: 'Ann', age: 19, gender: 'female'},
//     {name: 'Elizabeth', age: 16, gender: 'female'}
// ]

// function teenager(person){
//     return person.age > 10 && person.age < 60
// }

// var firstTeenager = people.find(teenager)

// console.log('First found teenager:', firstTeenager.name)

// ------------------------------------------------------------------------------------------------------------

// every 

// var people = [
//     {name: 'Jack', age: 50},
//     {name: 'Michael', age: 9},
//     {name: 'John', age: 40},
//     {name: 'Ann', age: 19},
//     {name: 'Elizabeth', age: 16}
// ]

// function teenager(person){
//     return person.age > 10 && person.age < 20
// }

// var everyoneIsTeenager = people.every(teenager)

// console.log('Everyone is teenager: ', everyoneIsTeenager)

// ------------------------------------------------------------------------------------------------------------

// // some 

// var people = [
//     {name: 'Jack', age: 50},
//     {name: 'Michael', age: 9},
//     {name: 'John', age: 40},
//     {name: 'Ann', age:19},
//     {name: 'Elizabeth', age: 16}
// ]

// function teenager(person){
//     return person.age > 10 && person.age < 20
// }

// var thereAreTeenagers = people.some(teenager)

// console.log('There are teenagers:', thereAreTeenagers)

// ------------------------------------------------------------------------------------------------------------

// reduce

// var array = [1, 2, 3, 4]


// function sum(acc, value) {
//     return acc + value
// }

// function product(acc, value) {
//     return acc + value
// }

// var sumOfArrayElements = array.reduce(sum, 0)
// var productOfArrayElements = array.reduce(product, 1)

// console.log('Sum of', array, 'is', sumOfArrayElements)
// console.log('Product of', array, 'is', productOfArrayElements)

// --------------------------------------------------------------------------------------------------

// 3. Arrow functions

// Implementation of very simple functions (like the aforementioned sum or product)
// requires writing a lot of boilerplate. Is there any remedy for that? Yes, just try arrow
// functions!

// var array = [1, 2, 3, 4]

// const sum = (acc, value) => acc + value
// const product = (acc, value) => acc * value

// var sumOfArrayElements = array.reduce(sum, 0)
// var productOfArrayElements = array.reduce(product, 1)

// console.log(sumOfArrayElements)
// console.log(productOfArrayElements)

// var array = [1, 2, 3, 4]

// var sumOfArrayElements = array.reduce((acc, value) => acc + value, 0)
// var productOfArrayElements = array.reduce((acc, value) => acc * value, 1) 

// console.log(sumOfArrayElements)
// console.log(productOfArrayElements)

// --------------------------------------------------------------------------------------------------

// 4. Classes

// class Point {
//     constructor(x, y) {
//         this.x = x
//         this.y = y 
//     }

//     toString() {
//         return '[X=' + this.x + ', Y=' + this.y + ']'
//     }
// }

// class ColorPoint extends Point {
//     static default() {
//         return new ColorPoint(0, 0, 'black')
// }

// constructor(x, y, color) {
//     super(x, y)
//     this.color = color
// }

// toString() {
//     return '[X=' + this.x + ', Y=' + this.y + ', color=' + this.color + ']'
//     }
// }

// console.log('The first point is ' + new Point(2, 10))
// console.log('The second point is ' + new ColorPoint(2, 10, 'green'))
// console.log('The default color point is ' + ColorPoint.default())

// --------------------------------------------------------------------------------------------------

// 5. Enhanced objecct literals

/* + define fields with variable assignment of the same name

   + define functions

   + define dynamic (calculated) properties */


// const color = 'red'
// const point = {
//     x: 5,
//     y: 10,
//     color,
//     toString() {
//         return 'X=' + this.x + ', Y=' + this.y + ', color=' + this.color
//     },
//     [ 'prop_' + 42 ]: 42
// }

// console.log('The point is ' + point)
// console.log('The dynamic property is ' + point.prop_42)

// --------------------------------------------------------------------------------------------------

/* 6. Template strings 

   Who loves writing large string and variables concatenation? I belive a
   minority of us. Who hates reading it? I'm sure everyone. Fortunately, ES6
   introduces very easy-to-use string templates with placeholders for variables. */

// function hello(firstName, lastName) {
//     return `Good morning ${firstName} ${lastName}!
//   How are you?`
// }

// console.log(hello('Jan', 'Kowalski'))

// --------------------------------------------------------------------------------------------------

// 7. Default function arguments
// Don't you like providing all possible function parameters? Use defaults.

function sort(arr = [], direction = 'ascending') {
    console.log('I\'m going to sort the array', arr, direction)
}

sort([1, 2, 3])
sort([1, 2, 3], 'descending')

