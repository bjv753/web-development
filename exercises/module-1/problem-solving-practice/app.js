function largestOfFour(arr) {
    var largestNumber = [0,0,0,0];
    for(var i = 0; i < arr.length; i++) {
     for(var j = 0; j < arr[i].length; j++) {
        if(arr[i][j] > largestNumber[i]) {         
           largestNumber[i] = arr[i][j];
         }
     }
  }
  return largestNumber;
 }
 console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


//  Write a function that takes an array of words and a character and returns each word that has that character present.

