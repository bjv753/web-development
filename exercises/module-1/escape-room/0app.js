let readline = require(`readline-sync`);

// ask the name

let name = readline.question('\n\nWhat is your name?\n');
console.log(`\n\n Hello${name}!Welcome to the Escape Room!\n`);
let isDead = false;
let hasKey = false;

// User options
let options = [
  `\n Put hand in hole \n---------------------|`,
  `\n Find the key \n------------------|`,
  `\n Open door \n--------------|`
              ];

// Game loop continues until the game ends

while (!isDead) {
let userChoice = readline.keyInSelect(options,`\nChoose one of the following:\n\n\n`);
if (userChoice === 0) {
    console.log(`\n\n${name}, your hand is stuck. You will be dead soon.\n`);
    isDead = true;
    break;
}   else if (userChoice === 1) {
    console.log(`\n\n\n You found the key! Now you need to find the door.\n`);
    hasKey = true;
}   else if (userChoice === 2 && !hasKey) {
    console.log(`\n You found the door. It's locked. You need a key to open it.\n`);
}   else if (userChoice === 2 && hasKey) {
    console.log(`\n Congratulations! The key you found works! You just opened the door and Escaped.`);
    break;
}   else if (userChoice === -1) {
    console.log(`\n You are trapped in the escape room. Escaping is the best option!`);   
  }
}

if (isDead) {
    console.log(`\n You died. Get Resurrected and please try again.\n`);
}

