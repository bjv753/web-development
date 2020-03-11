// Write a function that takes a string, and returns a string with just the vowels.
const vowels = 'aeiou'.split('')

function getVowels(str){
    // const letters = str.split('')

    // const vowelsOnly = [];
    // for(let i; i < letters.length; i++){
    //     const letter = letters[i]
    //     if(vowels.contains(letter)){
    //         vowels.push(letter)
    //     }
    // }
    return str.match(/aeiou/i)

} 

console.log(getVowels("hello world")) 
