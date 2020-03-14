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

/* 

27 JUNE 2018 / #PROGRAMMING
How to explain object-oriented programming concepts to a 6-year-old


                        by Alexander Petkov


        Have you noticed how the same cliche questions always get asked at job interviews --
        over and over again?

        I'm sure you know what I mean.

        For exapmle:

        |   Where do you see yourself in five years?

        or, even worse:

        |   What do you consider to be your greatest weakness?
        
        Ugh...give me a break. I consider answering this question a great weakness! Anyway,not
        my point.

        As trivial as questions like these may be, they are important because they give clues
        about you. Your current state of mind, your attitude, your perspective.

        When answering, you should be careful, as you may reveal something you later regret.




        Today I want to talk about a similar type of question in the programming world:

        |   What are the main principles of Object-Oriented Programming?

        I've been on both sides of this question. It's one of those topics that gets asked so often
        that you can't allow yourself to not know.

        Junior and entry-level developers usually have to answer it. Because it's an easy way for
        the interviewer to tell three things:

        1. Did the candidate prepare for this interview?
           Bonus points if you hear an answer immediately-it shows a serious approach.

        2. Is the candidate past the tutorial phase?
           Understanding the principles of Object-Oriented Programming(OOP) shows
           you've gone beyond copy and pasting from tutorials - you already see things
           from a higher perspective.

        3. Is the candidate's understanding deep or shallow?
           The level of competence on this question often equals the level of competence on
           most other subjects. Trust me.

        
        The four principles of object-oriented programming are encapsulation, abstraction,
        inheritance, and polymophism.







        Encapsulation 
        
        
        ™Packaging


        Say we have a program. It has a few logically different objects which communicate with
        each other - according to the rules defined in the program.

        Encapsulation is acheived when each object keeps its state private, inside a class. Other
        objects don't have direct access to this state. Instead, they can only call a list of public
        functions - called mathods.

        So, the object manages it's own state via methods-and no other class can touch the object
        unless explicitly allowed. If you want to communicate with the object, you should use the
        methods provided. But (by default), you can't change the state of the object with another class.

        Let us say we are building a tiny Sims game. There are people and there is a cat. They 
        communicate with each other. We want to apply excapsulation, se we encapsulate all
        "cat" logic into a Cat class. It may look like this:



               /\_
              /   \_
              \   _/            
             _/  \  
            /     |              Cat
           |     /           mood - field
            \  _|_         _ hungry - field _
            /             /  energy - field  \
            \___/        /   meow() - method  \
                        /           |          \
                       /            |           \
                      /             |            \
                 Sleep()               |         Feed()
                energy ++           |           hungry++
                hungry ++           |           mood ++
                                    |           meow!
                                    |
                                    |
                                   Play()
                                   mood++
                                   energy++
                                   meow!

                    You can feed the cat. But you can't directly change how hungry the cat is.


        
        What they can do is defined in the public methods sleep(), play() and feed(). It also has
        a private method meow(). It can call it whenever it wants, the other classes can't tell the cat when to meow.

        What the people and cat can do in our timy Sims game is defined in the public methods sleep(), play() and feed(). Each of them modifies the internal state somehow and may invoke meow(). Thus, the binding between private state and public methods is made.

        This is encapsulation.
        Encapsulation: • Computing the process of enclosing a message or signal in a set of codes which allow transfer across networks. 
        
        ™Packaging


        Abstraction

        ™Shipping

        Abstraction can be thought of as a natural extension of encapsulation.

        In object-oriented design, programs are often extremely large. And separate objects
        communicate with eachother a lot. So maintaing a large codebase like this for years -
        with changes along the way - is difficult.

        Abstraction is a concept aiming to ease this problem.

        Applying abstraction means that each object should only expose a high-level mechanism for using Abstraction.

        This mechanism ought hide internal implementation details. The mechanism ought only reveal operations relevant for the other objects.

        Think - a coffee machine. The coffee machine does a lot of jobs and makes quirky noises under the exterior so all you have to do is put coffee in the coffee machine and press a button.

        Preferably, this mechanism ought be eeasy to use and ought rearely change over time.
        Think of these mechanisms as a small set of public methods which any other class can call.

        Another real-life example of abstraction?
        Think about how you use your phone:


        You have just a few buttons and
        inputs to use.

        What happens under the case shell?
        You do not have to know at this moment in time.





                                   Home button
                        ___     /  
         O             |   |
        / \    ---     |   |   -   Volume Button
         ^             |   |
        You             –––    \   
                       Phone       Charge Input


                Cell phones are comples. But using them is simple.

        You interact with your phone by using only a few buttons. What is going on under the hood? You do not have to know at this moment in time--implementation details are hidden. You only need to know a short set of actions to use the phone.

        Implementation changes –– for example, a software update –– rarely affect the
        abstraction you use.

        Abstraction: The process of removing an object from the objects origin point source.
        
        ™Shipping



        Inheritance 
        
        ™Delivery

        Ok, we saw how encapsulation and abstraction can help us develop and maintain a big codebase.

        But do you know what is another common problem in OOP design?

        Objects are often very similar. They share common logic. But they're not entirely the same. Ugh...

        So how do we reuse the common logic and extract the unique logic into a separate class? One way to achieve this is inheritance.

        It means that you create a (child) class by delivering from another (parent) class. This way, we form a heirarchy.

        The child class reuses all fields and methods of the parent class (common part)and can implement its own (unique part).

        For example: 


                                                                   Person
                                                                    name
                                                                    email


                                                          /                    \
            Child classes take all private 
            fields and methods from the 
            parent class.                   

                                           Teacher                                        Student
                                    everything from Person                       evverything from Person
                                           Subject                                        Classes
                                                                                          Grades


                                    /                  \
                                                                       Child classes can also
                                                                       add additional fields of
                                                                       their own.         
                                                                                                 /\
                        Private Teacher              Public Teacher                             /  \
                     everything from Teacher     everything from Teacher                       |\  /
                            Students                     School                                 |\/|
                                                                                                 ––
            A private teacher is a type of teacher. And any teacher is a type of Person.



        If our program needs to manage public and private teachers, but also
        other types of people like students, we can implement this class
        hierarchy.


        This way, each class adds only what is necessary for each class while reusing
        common logic with the parent classes.

        Inheritance: The action of inheriting.

        Inheritance ™Delivery



        Polymorphism. 

        We're down to the most complex word! Polymorphism means "many 
        shapes" in Greek.

        So we already know the power of inheritance and happily use it. But
        there comes this problem.

        Say we have a parent class and a few child classes which inherit from
        the parent class. Sometimes we want to use a collection –– for example a list ––
        which contains a mix of all these classes. Or we have a method
        implemented for the parent class –– but we will like to use it for the 
        children, as well.

        This can be solved by using polymorphism.

        Simply put, polymorphism gives a way to use a class exactly like the classes 
        parent so there is more understanding with mixing types. But each child class
        keeps each child class method.

        This typically happens by defining a (parent) interface to be reused. 
        The parent class outlines a bunch of common methods. Then, each child class
        implements each child class method version.

        Any time a collection (such as a list) or a method expects an instance
        of the parent (where common methods are outlined), the language
        takes care of evaluating the right implementation of the common
        method –– regardless of which child is passed.


        Take a look at a sketch of geometric figures implementation. They
        reuse a common interface for calculating surface area and perimiter:



                                Figure Inheritance
                                Whoever uses the Figure Interface must implement
                                  • CalculateSurface()
                                  • CalculatePerimeter()

            /\                                                                   ______
           /  \                                •                                |      |
         Triangle                            Circle                             Rectangle



                                Triangle, Circle and Rectangle inherit the Figure
                                interface or abstract class.

                                They implement their own versions of
                                CalculateSurface() and CalculatePerimeter().

                                They can be used in a mixed collection of Figures.



                        Triangle, Circle, and Rectangle now can be used in the same collection.

        Having these three figures inheriting the parent Figure Interface
        lets you create a list of mixed triangles, circles, and rectangles.
        And treat the triangles, circles, and rectangles like the same type 
        of object.

        Then, if this list attempts to calculate the surface for an element, the
        correct method is found and executed. If the element is a triangle,
        triangle's CalculateSurface() is called. And so on.

        If you have a function which operates with a figure by using the functions  
        parameter, you do not have to define the function three times –– once for a
        triangle, a circle, and a rectangle.

        You can define the function once and accept a Figure as an argument. Whether
        you pass a triangle, circle or rectangle –– as long as they implement
        CalculateParameter(), their type does matter.

            
        Polymorphism • Computing a feature of a programming language
                        that allows routines to use variables 
                        of different types at different times.

        Polymorphism ™User Experience


        I hope this increased your knowlege of Object Oriented Programming. 
        You may use these exact same explanations at upcomming job interviews.

        If you find something still difficult to understand –– just 
        ask in the comments below.

        What is next?

        Being prepared to answer one of the all-time interview question
        classics is great because sometimes you get called for an interview.

        Next, I'll focus on what employers want to see in a junior developer
        and how to stand out from the crowd when job hunting.

        Stay tuned.

        */

        // function disp()
        // {
        //     line1 = "<b>Name:</b>" + this.name + "<br>";
        //     line2 = "<b>Address:</b>" + this.address + "<br>";
        //     line3 = "<b>Work Phone:</b>" + this.address + "<br>";
        //     line4 = "<b>Home Phone:</b>" + this.home + "<br>";
        //     document.write(line1, line2, line3, line4);
        //     document.write("<hr>");
        // }
        // function PersonalDataClass(name, address, work, home)
        // {
        //     this.name=name;
        //     this.address=address;
        //     this.work=work;
        //     this.home=home;
        //     this.disp = disp;
        // }
        // n = "Saad";
        // a = "3929 Elm West Street, XY. 10001";
        // w = "262-900-000";
        // h = "905-900-0000";

        // var personalObject = new PersonalDataClass(n,a,w,h);
        // personalObject.disp();














        








   





















// class Character(name, status, totalCoins){

// }





