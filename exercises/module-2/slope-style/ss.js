// ES6 Practice - Slope Style
// Rest and Spread Operator

// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:


function collectAnimals(/*your code here*/) {  
    /*and here*/ 
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]


// Write a function that returns a food object with the array names as properties using Object Literals:

function combineFruit(fruit, sweets, vegetables){
    return {}
}

combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrit"])

// Use destructuring to use the property names as variables. Desructure the object in the parameter:

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
  function parseSentence(_________){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  

// Use destructuring to make this code ES6:

function returnFirst(items){
    const firstItem = items[0]; /*change this line to be es6*/
    return firstItem
}



// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    /*your code here*/
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav";
}

returnFavorites(favoriteActivities)