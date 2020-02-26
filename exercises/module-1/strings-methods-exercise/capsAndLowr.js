

function capsAndLowr(str) {

    const caps = str.slice(0,str.length/2)
    const lowr = str.slice(str.length/2,str.length)


    return caps.toUpperCase(str.length/2) + lowr.toLowerCase(str.length/2)
}

console.log(capsAndLowr("Hello"))
console.log(capsAndLowr("Hello World"))