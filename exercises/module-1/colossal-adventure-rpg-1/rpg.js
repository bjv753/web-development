const readline = require('readline-sync')
let isAlive = true;
let hasWon = false;
console.log('hello, welcome to the game')
const username = readline.question('What is your name?')
// Hero
function Hero (name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
    this.inventory = ['stick']
}
const hero = new Hero(username, 100, 30)
// Enemy
function Enemy (name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}
const orc = new Enemy('Orc', 80, 10)
const godzilla = new Enemy('Godzilla', 10, 1000)
const golem = new Enemy('Golem', 500, 5)
const enemies = [orc, godzilla, golem]

function Inventory (name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}
const sword = new Inventory('Sword', +20, +20)
const bow = new Inventory('Bow', +30, +30)
const ax = new Inventory('Ax', +20, +20)
const inventorylist = [sword, bow, ax]

while(isAlive && !hasWon){
    const action = readline.keyIn('Would you like to walk [w], print inventory [p], or quit [q]?', {limit: 'wpq'})
    if(action === 'w'){
        walk ()
    }else if (action === 'p'){
        print ()
    }else {
        isAlive = false
        console.log('You quit the game')
    }
}
function walk (){
    let random = Math.random()
    if(random <= .25){
        enemyEncounter()
    }else {
        console.log('You did not find an enemy keep walking')
    }
}
function print (){
    let random = Math.random()
    if(random < .33){
        console.log('You got a Sword')
    } else if(random >= .33 && random <= .66) {
        console.log('You got a Bow')
    } else if(random > .66) {
        console.log('You got an Ax')
    }
}
function enemyEncounter (){
    let enemy = enemySelect()
    console.log(`You encountered ${enemy.name}`)
    let action = readline.keyIn('Would you like to fight [f], or run [r]?', {limit: 'fr'})
    if(action === 'r' ){
        if(Math.random() > .5){
            run()
        }else{
            console.log('sorry you were too slow')
            fight(enemy)
        }
    }else {
        fight(enemy)
    }
}
function enemySelect (){
    let random = Math.floor(Math.random()*enemies.length)
    return enemies[random]
}
function inventorySelect (){
    let random = Math.floor(Math.random()*inventorylist.length)
    return inventorylist[random]
}
function fight (enemy){
    while(hero.hp > 0 && enemy.hp > 0){
        let heroAttack = Math.floor(Math.random()*hero.ap)
        let enemyAttack = Math.floor(Math.random()*enemy.ap)
        enemy.hp -= heroAttack
        hero.hp -= enemyAttack
        console.log(`
        ${hero.name} was hit by ${enemy.name}. Their hp is now ${hero.hp}
        ${enemy.name} was hit by ${hero.name}. Their hp is now ${enemy.hp}
        `)
    } 
    if(hero.hp > 0){
        console.log(`congratulations ${hero.name}, you defeated ${enemy.name}`)
        let index = enemies.findIndex((myEnemy)=> { myEnemy.name === enemy.name})
        enemies.splice(index, 1)
        if(enemies.length === 0){
            hasWon = true;
            console.log('congrats you won!')
        }
    }else{
        isAlive = false
        console.log('unfortunately you died, GAME OVER')
    }
}
function run () {
    console.log('you got away')
}``