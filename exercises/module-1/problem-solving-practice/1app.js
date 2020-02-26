console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "%"))
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], ""))


function lettersWithStrings(arr, char){
    const finalArray = arr.filter(element => element.includes(char))
    return finalArray
}




//  function characterPresent(arr)
//      for(var i = 0; i < char.length; i++) {
// const result = lettersWithStrings.filter()
//      }

