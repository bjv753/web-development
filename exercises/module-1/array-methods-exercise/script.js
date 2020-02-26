// https://www.tutorialrepublic.com/javascript-tutorial/javascript-arrays.php
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
// https://www.tutorialrepublic.com/javascript-reference/javascript-array-object.php
// https://www.tutorialrepublic.com/javascript-tutorial/javascript-data-types.php

// 1. Remove the last item from the vegetable Array.                                    console.log(vegetable.pop());
// 2. Remove first item from fruit array.                                               console.log(fruit.shift();
// 3. Find index of Orange.                                                             console.log(fruit.indexOf("Orange");
// 4. Add that number to the end of the fruit array.                                    console.log(fruit.push());
// 5. Use the length property to find the length of the vegetable array.                console.log(vegetable.length);
// 6. Add that number to the end of the vegetable array.                                console.log(vegetable.push());
// 7. Put the two arrays together into one array.                                       console.log(fruit.concat(vegetable));
// 8. Remove 2 elements from your new array stating at index 4 with one method.         console.log(food.splice(4, -1);
// 9. Reverse your array.                                                               console.log(food.reverse());
// 10. Turn the array into a string and return it.                                      console.log(food.join(", "))

// If you have done everything correctly, the last step should print the following string to the console.

// 3,pepper,1,watermellon,orange,apple.

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetable = ["carrot", "tomato", "pepper", "lettuce"];


console.log(vegetable.pop());
console.log(fruit.shift());
console.log(fruit.indexOf("watermelon"));
console.log(fruit.push("-1"));
console.log(vegetable.length);
console.log(vegetable.push("3"));
console.log(fruit.concat(vegetable));

var food = fruit.concat(vegetable);

console.log(food.splice(4,5));
console.log(food.reverse());
console.log(food.join(", "));