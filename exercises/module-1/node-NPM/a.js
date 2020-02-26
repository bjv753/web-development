const readline = require("readline-sync")

const operation = readline.question("Would you like to 'exhale', 'inhale', 'spit', or 'sip'?: ")
const x = readline.question("How many times? enter a  number: ")
const y = readline.question("Any more times? enter a number: ")

function a(x, y){
    return Number(x) + Number(y)
}
function b(x, y){
    return Number(x) - Number(y)
}
function c(x, y){
    return Number(x) / Number(y)
}
function d(x, y){
    return Number(x) * Number(y)
}

if(operation === "exhale"){
    console.log(`The sum of your two numbers is: ${ a(x, y) }`)
} else if(operation === "inhale"){
    console.log(`The subtrahend of your two numbers is: ${ b(x, y) }`)
} else if(operation === "spit"){
    console.log(`The quotient of your two numbers is: ${ c(x, y) }`)
}else if(operation ==="sip"){
    console.log(`The product of your two numbers is: ${ d(x, y) }`)
}


