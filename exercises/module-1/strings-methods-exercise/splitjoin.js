function splitJoin(str) {
   const words = str.split(" ")
   console.log(words[0])
    for (let i = 0; i < words.length; i++) {
        console.log(words[i].slice(1,words[i].length))
    }
}

console.log(splitJoin("hey friends practice practice practice"))

// 4 Steps
// 1 understanding the problem question: what does the string need to be turned into?
// 2 make a plan check list: 1.turn the string into an array of strings starting at each space in the string.
                           //2.console.log() the fist letter of each word.
// 3 chekc off the plan list
// 4 reflect on how you solved the problem