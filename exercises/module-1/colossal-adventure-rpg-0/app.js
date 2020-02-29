const readline = require("readline-sync")
let isAlive = true;
let hasWon = false;
let species = readline.keyIn("Welcome to Collossal: What be thy species? Human [h], Elf [e], Extra Terrestrial [t], or Beyond It [b]?", {limit: 'hetb'})
let hp = 0;
let ap = 0;
let weapon = 0;


// Enemies

if(species === 'h'){
    console.log('Welcome Human')
    species = 'Human'
} else if(species === 'e'){
    console.log('Welcome Elf')
    species = 'Elf'
} else if(species === 't'){
    console.log('Welcome E.T.')
    species = "Extra Terrestrial"
} else if(species === 'b'){
    console.log('Welcome Beyond It')
    species = "Beyond It"
}

const name = readline.question("What be thy name?")

const difficulty = readline.keyIn("Choose your difficulty level: beginner [b], intermediate [i], advanced [a]" , {limit: 'bia'})

// Hero
function Hero (name, type, hp, ap, weapon){
    this.name = name;
    this.type = type
    this.hp = hp;
    this.ap = ap;
    this.weapon = weapon;
    this.weaponList = []
}
let steps = readline.keyIn("Press w to start your journey: walk [w]", {limit: 'w'})

function walk(){
    Math.random()// returns a number between 0 and 1.
    const steps = Math.random()
    if(steps <= .25){
        console.log("You encountered an Enemy Orc!")

    }   else if(steps >= .25 && steps <= .5){
        console.log("You disturbed a Enemy Fairy!")
        fightFairy();
    }   else if (steps >= .5 && steps <= .75) {
        console.log("You found a Enemy Spider!")
    }   else if(steps > .75){
        console.log("You upset a Enemy Warlock!.")
    } 
}

function attackEnemy(){

}

function enemyAttack(){

}

function die(){

}

function enemyDie(){

}


if(difficulty === 'b'){
    hp = 200
    ap = 80
    weapon = 'Hammer'
}else if(difficulty === 'i'){
    hp = 100
    ap = 30
    weapon = 'knife'
}else {
    hp = 50
    ap = 15
    weapon = 'spoon'
}


const roku = new Hero(name, species, hp, ap, weapon)
console.log(roku)

roku.hp -= 10
roku.hp +=15
roku.weapon = 'sword'
roku.weaponList.push('stick')



while (isAlive){
    if (action === 'w'){
        walk()
    } else if(action === 'c'){
        console.log(`You have no items in your inventory. Choose walk if you want to find new items to add to your collection.`)
    }
     action = readline.keyIn("How wouldst thou choose to continue your journey? enter Walk[w], or enter Check Inventory[c]", {limit: 'wc'})
}




function fightFairy(){
    Math.random()
    let fairyHealth = 100;
    const action = readline.keyIn("Do you want to Run [r], or Fight [f]", {limit: 'rf'})
        if (action === "f") {
        fightLoop(fairyHealth, "The Fairy")
        }


}
function fightLoop(enemyHealth, enemyName) {
    while (isAlive && enemyHealth > 0) {
        const fight = Math.random()
        if(fight < .5){
            const randomDamage = Math.floor(Math.random()*20) + 30
            console.log("You hit The Fairy" + enemyHealth)
            enemyHealth = enemyHealth - randomDamage; 
        }   else if(fight > .5){
            console.log(`The ${enemyName} hit You`)
        } 
        console.log
    }  

}
function run(){
    Math.random()
    const getAway = Math.random()
    if(getAway < .5){
        console.log("You ran to a safe place")
        return true
    }   else if(getAway > .5){
        console.log("You tried to run, but the Enemy stabbed you in the neck and you died.")
        return false
    }   
}


var myHealth = myHealth -10;
var enemyHealth = enemyHealth -10;

function health(myHealth, enemyHealth) {
   
    if (myHealth > 0 && enemyHealth === 0) {
        console.log("You Defeated the Enemy")
    } else if(myHealth === 0) {
        console.log("The Enemy Defeated You!")
    }
}






function fightOrc(){
    Math.random()
    const fight = Math.random()
    if(fight < .5){
        console.log("You hit the Orc")
}   else if(fight > .5){
        console.log("The Orc hit You!")
// }   
// }



function fightSpider(){
    Math.random()
    const fight = Math.random()
    if(fight < .5){
        console.log("You hit the Spider")
}   else if(fight > .5){
        console.log("The Spider hit You!")
}   
}

function fightWarlock(){
    Math.random()
    const fight = Math.random()
    if(fight < .5){
        console.log("You hit the Spider")
}   else if(fight > .5){
        console.log("The Spider hit You!")
}   
}

function victoryInventory(){
    Math.random()// returns a number between 0 and 1.
    const inventory = Math.random()
    if(inventory <= .25){
        console.log("You got a Sword for killing the Orc!")
    }   else if(inventory >= .25 && rando <= .5){
        console.log("You got a Bow for killing the Fairy!")
    }   else if (inventory >= .5 && rando <= .75) {
        console.log("You got Manna for killing the Spider!")
    }   else if(inventory > .75){
        console.log("You got Gravity Boots for killing the Warlock!") 
    }
}

