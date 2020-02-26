// Make a function that will return any given string into all caps followed by the same string all lowercase.

// capilizeAndLowercase("Hello") // => "HELLOhello"
const anyGivenString = "HelloYou"
const theSameString = "HelloYou"


function capsAndLowr(anygivenstring, thesamestring) {
  
    const caps = anyGivenString.toUpperCase();
    const lowr = theSameString.toLowerCase();

        return caps+lowr;
}

console.log(capsAndLowr(anygivenstring, thesamestring))