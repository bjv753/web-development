/* 
Exercise
The Princess Is In Another Castle

--------------------------------------------------------------------------------------------------------------

BOB ZIROLL
14 JULY 2015 + 1 MIN READ

--------------------------------------------------------------------------------------------------------------
    MARIO                   WORLD   TIME
    096950    Ox23           1-4     593
--------------------------------------------
| | | | | | | | | | | | | | | | | | | | | | 
--------------------------------------------
 | | | | | | | | | | | | | | | | | | | | | |
--------------------------------------------



            THANK  YOU  MARIO!

          BUT OUR PRINCESS IS IN
          ANOTHER CASTLE!

                       O
                     -| |-  ©
                      / \  / \
--------------------------------------------
| | | | | | | | | | | | | | | | | | | | | | 
--------------------------------------------
 | | | | | | | | | | | | | | | | | | | | | |
--------------------------------------------

Requirements:

• Create a class for a player that has the following
  properties:

• name of type String

• totalCoins of type Number

• status of type String (options are Powered Up, Bi
  g, Small, and Dead)

• hasStar of type Boolean (Is a star active?)

• setName of type function - stes 'name' to "Mario" or
  "Luigi". Has a parameter called namePicked where you
  pass in "Mario" or "Luigi"

• gotHit of type function - this called whenever the   
  player is hit by an enemy. gotHit() will set the status
  property accordingly. (Statuses go from "Powered Up"
  to "Big" to "Small" to "Dead".)

• gotPowerup of type function - called when a powerup
  is received and sets the status accordingly. (Statuses go
  from "Small" to "Big" to "Powered Up". If you are
  Powered Up and it hits this function, you get a star)

• gameActive of type Boolean, true by default, becomes
  false when status is Dead

• addCoin of function - adds a coin to totalCoins

• print of type function - prints to the console the
  name, totalCoins, status, and star properties. Make sure
  you make this look nice such as:
  • Name: Luigi,
  • Status: Small, etc etc


Use that class to create the object.

Create a random range function that returns either 0, 1, or 2.

If the value is 0 call the gotHit() function on the object.
If the value is 1 call the gotPowerup() function on the object
If the value is 2 call the addCoin() function

Then call the print method on the object.

Now put the random range function inside a setInterval
function that ends after gameActive === false

The end product will look something like this: 

Name: Luigi
Status: Big
Total Coins: 0

Name: Luigi
Status: Powered Up
Total Coins: 0

Name: Luigi
Status: Big
Total Coins: 0

Name: Luigi
Status: Powered Up
Total Coins: 0

Name: Luigi
Status: Big
Total Coins: 0

Name: Luigi
Status: Powered Up
Total Coins: 1

Name: Luigi
Status: Powered Up
Total Coins: 2

Name: Luigi
Status: Powered Up
Total Coins: 3

Name: Luigi
Status: Powered Up
Total Coins: 2

Name: Luigi
Status: Powered Up
Total Coins: 2

Congratulations! You got a star!
Name: Luigi
Status: Big
Total Coins: 3
You have a star

Your star protected you!
Name: Luigi
Status: Powered Up
Total Coins: 3

Name: Luigi
Status: Big
Total Coins: 4

Name: Luigi
Status: Powered Up
Total Coins: 4

Name: Luigi
Status: Big
Total Coins: 4

Name: Luigi
Status: Powered Up
Total Coins: 5

Congratulations! 
Name: Luigi
Status: Powered Up
Total Coins: 5
You have a star

Your star protected you!
Name: Luigi
Status: Big
Total Coins: 5

Name: Luigi
Status: Small
Total Coins: 5

You lost the game! You died!
Name: Luigi
Status: Dead
Total Coins: 5
Your Final Score Was Five

*/




// function Character(name, status, totalCoins)
// {
//    this.name = name;
//    this.status = status;
//    this.totalCoins = totalCoins;
// }

function GotPowerUp(small, big, starPower)
{
   if (rando <= 3.3) 
   {
     return small
   } else if (rando > 3.3 && rando <= 6.6)
   {
     return big
   } else 
   {
     return starPower
   }
}

function GotHit()
{
  let hit = 0;
}

// function Ran()
// {

// }

// function Print()
// {

// }


