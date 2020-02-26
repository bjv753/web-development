function isItDivisible(num1, num2) {
    let remainder = num1%num2
    if (remainder === 0) {
        return true
    } else { 
        return false
    }
}

console.log(isItDivisible(25, 5))
console.log(isItDivisible(25, 4))