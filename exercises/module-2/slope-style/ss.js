// ES6 Practice - Slope Style
// Rest and Spread Operator

// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

// var collectAnimals =["dog", "cat", "mouse", "jackolope", "platypus"]; 

// var x = [...collectAnimals]

// console.log(x)

// ------------------------------------------------------------------------------------------------------------------------------

// Write a function that returns a food object with the array names as properties using Object Literals:

// const combineFruit = (fruit, sweets, vegetables) => ({fruit,sweets,vegetables})


// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrit"]))

// ------------------------------------------------------------------------------------------------------------------------------

// // Use destructuring to use the property names as variables. Desructure the object in the parameter:

 
// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   };
  
//   function parseSentence(place){
//     return `We're going to have a good time in ${place.location} for ${place.duration}`
//   }

//   const vacation = {
//       location: 'Burly Idaho',
//       duration: '2 weeks'
//   };

//  const parseSentence = ({location, duration}) => `We're going to hava a good time in ${location} for ${duration}`

//  console.log(parseSentence(vacation))
  
// ------------------------------------------------------------------------------------------------------------------------------

// // Use destructuring to make this code ES6:

// const returnFirst = (items) => {
//     const firstItem = items[0]; /*change this line to be es6*/
//     return firstItem
// }

// console.log(returnFirst)

// ------------------------------------------------------------------------------------------------------------------------------

// // Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

// const favoriteActivities = c;

// function returnFavorites(arr){
//     /*your code here*/
//     return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav";
// }

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"] 
// const [one, two, three] = favoriteActivities

// console.log("My top three favorite activities are, " + one)

// ------------------------------------------------------------------------------------------------------------------------------