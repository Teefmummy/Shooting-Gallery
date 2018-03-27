# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | Status |
|---|---|---|
|Day 1: Tue| Wireframes and Priority Matrix|
|Day 2: Wed| Project Approval /  Pseudocode / actual code|
|Day 3: Thur| Basic Clickable Model |
|Day 4: Fri| Working Prototype |
|Day 5: Sat| Final Working Project |
|Day 6: Sun| Bugs / Stylying / PostMVP |
|Day 7: Mon| Project Presentations |


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.
My project is a shooting gallery game. It will randomly place targets on a board. the goal is to click all the targets before the time runs out. If you do hit all the targets in time, then you can progress to the next level. each level will be coded to include a certain number of enemies. I would like to make three levels. 

Landing Page:
This will be an overlay of the game with a start button
On click, the start button will initialize the game. 
the overlay will be removed
Landing Page - Post MVP: 
Animation for the button.
big svg graphic image of a hunter

Game page:
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

Loser page: 
You lose,
score,
retry? - replays the game

Winner page:
You win, 
score,
retry?


## Wireframes

Include images of your wireframes. 
(https://res.cloudinary.com/teefmummy/image/upload/v1522185190/20180327_112841.jpg)
(https://res.cloudinary.com/teefmummy/image/upload/v1522185190/20180327_112854.jpg)
(https://res.cloudinary.com/teefmummy/image/upload/v1522185190/20180327_112900.jpg)
(https://res.cloudinary.com/teefmummy/image/upload/v1522185190/20180327_112850.jpg)
(https://res.cloudinary.com/teefmummy/image/upload/v1522185191/20180327_112858.jpg)
## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

## Game Components

### Landing Page
What will a player see when they start your game?

### Game Initialization
What will a player see when the game is started? 

### Playing The Game
What will be the flow of the game, what will the user be expeted to do and what will the user expect from the gam

### Winning The Game
What does it look like when the game ends, what determines winning or losing?

### Game Reset
How will the user restart the game once it has been completed.

## MVP 

Include the full list of features that will be part of your MVP 

## POST MVP

Include the full list of features that you are considering for POST MVP
## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Component 1 | H | 10hrs| 12hrs | 12hrs |
| Total |  | 10hrs| 12hrs | 12hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
