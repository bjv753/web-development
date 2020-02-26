// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().



function findMiddleIndex(str) {
    return Math.floor(str.length/2)
}

console.log(findMiddleIndex("Hello")) // => 2
console.log(findMiddleIndex("Hello World")) // => 5