# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | Status |
|---|---|---|
|Day 1: Tue| Wireframes and Priority Matrix| Complete |
|Day 2: Wed| Project Approval /  Pseudocode / actual code| Complete |
|Day 3: Thur| Basic Clickable Model | Complete |
|Day 4: Fri| Working Prototype | Complete |
|Day 5: Sat| Final Working Project | Complete|
|Day 6: Sun| Bugs / Stylying / PostMVP | Never-ending|
|Day 7: Mon| Project Presentations |


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.
My project is a shooting gallery game. It will randomly place targets on a board. the goal is to click all the targets before the time runs out. If you do hit all the targets in time, then you can progress to the next level. each level will be coded to include a certain number of enemies. I would like to make three levels. 


## Wireframes

Include images of your wireframes. 
(https://res.cloudinary.com/teefmummy/image/upload/v1522185190/20180327_112841.jpg)
(https://res.cloudinary.com/teefmummy/image/upload/v1522185190/20180327_112854.jpg)
(https://res.cloudinary.com/teefmummy/image/upload/v1522185190/20180327_112900.jpg)
(https://res.cloudinary.com/teefmummy/image/upload/v1522185190/20180327_112850.jpg)
(https://res.cloudinary.com/teefmummy/image/upload/v1522185191/20180327_112858.jpg)
## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  
Game Logic - top priority
html and css layout - high priority - first to tackle
Overlays - high priority


## Game Components

### Landing Page
What will a player see when they start your game?

Landing Page:
This will be an overlay of the game with a start button
On click, the start button will initialize the game. 
the overlay will be removed
Landing Page - Post MVP: 
Animation for the button.
big svg graphic image of a hunter

### Game Initialization
What will a player see when the game is started? 

A ready set go message that when it goes away, the timer starts and the game begins.

### Playing The Game
What will be the flow of the game, what will the user be expeted to do and what will the user expect from the gam

a wooden shelf with different levels. 
the shelf is made of multiple divs (20X 10?) 
Top left has Timer and points section
Overlay animates with "Ready", "Set", "Go!"
timer decriments. 
Page populates with cans and bottles randomly generated in the shelf's divs
user clicks the cans and bottles. 
on click the can jumps off the page and the score is increased by the item's score.
cans are worth 1
bottles are worth 5
post MVP = there will randomly spawn bees who move in a parabolic arc across the screen. the bees are worth 15 pts.

if user hits all cans and has time left then they move to next level.
if not, then they fail and display score with a replay button

if they beat the level then they go to the next level where there are more bottles, cans (and bees)

build 3 levels. on completion of all three throw a winner screen with their score and replay button

### Winning The Game
What does it look like when the game ends, what determines winning or losing?

Loser page: 
You lose,
score,
retry? - replays the game

Winner page:
You win, 
score,
retry?

You win the game if you hit all the targets within the time limit. you lose if you don't

### Game Reset
How will the user restart the game once it has been completed.

On the loser/win screen you press a button which reinitializes the game at stage 1

## MVP 

Include the full list of features that will be part of your MVP 
a board that populates with clickable objects that has a win and loss condition.

The game will have clickable divs that give you score and a timer which counts down. 
the landing page will lead to the game page


## POST MVP
a bee target that goes across the screen in a parabolic fashion. 
lots of animation flourishes
A form on completion to enter your high score, and a high score overlay page.

Include the full list of features that you are considering for POST MVP
## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invested |
| --- | :---: |  :---: | :---: |
| Game Logic | H | 10hrs| 12hrs |
| Game page | H | 5hrs| 3hrs |
| target sprites | L | 4hrs| 2hrs |
| landing Page & Win/Loss page overlay| H | 4hrs| 5hrs|
| Post MVP | H | 10hrs| 3hrs |
| Total |  | 33hrs| 26hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| getRandomInt | This will provide a random number with a max and min value | 
| compareScores | This can be used within the .sort method for arrays for sorting numbers in order of highest to lowest | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

jQuery - Used for Dom Manipulation.
PixilArt.com - Not a library, but I used this site for the creation of the targets, bee, and bullet. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

This is a function I used for setting the timer on the page. It decriments the timer once every second and calls the displayscreen function for either moving on to the next level or completing the game. I am happy with how it works and I feel like it is simple enough to use in later projects.
```Javascript
function setTimer() {
      let time = level.time;// levelTime
      $('.timer span').html(time);
      const timer = setInterval(tic, 1000);
      function tic() {
        if (time > 0) {
          time -= 1;
          $('.timer span').html(time);
        } else {
          clearInterval(timer);
          game.displayScreen();
        }
      }
    }
````
## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

 | Method | Description | 
| --- | :---: |  
| $jQuery.inArray(); |  checks to see if a value exists within a given array. if it doesnt exist it returns -1. I used this in generating my array of random values. Basically I had a problem with randomly generating the same number twice and I had to make sure that none of my objects overlapped with one another. | 
| $.hasClass(); | returns a boolean for whether or not the object has a certain class. used in my click target function.  | 
 

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

 There were not too many changes made from my original concept. I did not get around to making the Bee target. 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

 The first major obstacle I encountered was creating an array of random numbers that was (a) of a particular length and (b) contained no repeat random numbers. In trying to figure this issue out I went to the student resource center for help and the instructor there inspired me to clean up my code drastically. After I did that, everything came much easier. The problem of creating the array was really just the catalyst for reorganizing my code for easier reading and use. 

 Another obstacle I faced was creating a single function to handle the display of the various overlays in the game. Before, I had multiple functions which were triggered on the click of specific buttons. When I started trying to figure out a way to restart the game, I found that this was unwieldy. After realizing this, and thinking back to my earlier issue regarding complexity, I decided to clean this up into a single function that handled game logic and the displays. 


#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
