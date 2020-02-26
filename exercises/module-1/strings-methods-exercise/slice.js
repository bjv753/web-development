console.log("test")

function returnFirstHalf(str){
    return str.slice(0, str.length/2)
}
    
console.log(returnFirstHalf("Hello")) // => "He"
console.log(returnFirstHalf("Hello World")) // => "Hello"