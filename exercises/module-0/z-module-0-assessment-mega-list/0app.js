//3. Write a function that takes a string as an argument and returns that string with the letter "s"
//added to the end of it. Console.log the returned value.

function sayBounce() {
    return "Bounce";
 }
 function verb(bounceMessage, plural) {
   console.log(bounceMessage() + plural);
 }
 // Pass `sayBounce` as an argument to `verb` function
 verb(sayBounce,"s");
