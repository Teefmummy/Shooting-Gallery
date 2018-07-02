# Shooting Gallery


## Project Description

This is a shooting gallery game. It randomly places targets on a board and the goal is to click all the targets before the time runs out. If you reach a certain score threshold, then you can progress to the next level. Each level is coded to include a certain number of targets. 
There are three levels, each of increasing difficulty. 


## Wireframes

Include images of your wireframes. 
(https://res.cloudinary.com/teefmummy/image/upload/v1522185190/20180327_112841.jpg)
(https://res.cloudinary.com/teefmummy/image/upload/v1522185190/20180327_112854.jpg)
(https://res.cloudinary.com/teefmummy/image/upload/v1522185190/20180327_112900.jpg)
(https://res.cloudinary.com/teefmummy/image/upload/v1522185190/20180327_112850.jpg)
(https://res.cloudinary.com/teefmummy/image/upload/v1522185191/20180327_112858.jpg)

## Game Components

### Landing Page

This is an overlay of the game with a start button. On click, the start button will initialize the game and the overlay will be removed.

### Game Initialization

The timer starts and the targets appear on the board, initializing the level.

### Playing The Game

There is a wooden shelf with 5 levels upon which the targets appear. The user clicks on the targets to remove them and add points to their score. 
Cans are worth 1 point while bottles are worth 5.
If the user fails to reach the score threshold then they will be direct to a page where they can restart the game.


## Helper Functions

| Function | Description | 
| --- | :---: |  
| getRandomInt | This will provide a random number with a max and min value | 
| compareScores | This can be used within the .sort method for arrays for sorting numbers in order of highest to lowest | 

## Additional Libraries

jQuery - Used for Dom Manipulation.
PixilArt.com - I used this site for the creation of the targets, bee, and bullet. 

## Code Snippet

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

 | Method | Description | 
| --- | :---: |  
| $jQuery.inArray(); |  checks to see if a value exists within a given array. if it doesnt exist it returns -1. I used this in generating my array of random values. Basically I had a problem with randomly generating the same number twice and I had to make sure that none of my objects overlapped with one another. | 
| $.hasClass(); | returns a boolean for whether or not the object has a certain class. used in my click target function.  | 
 
## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

 The first major obstacle I encountered was creating an array of random numbers that was (a) of a particular length and (b) contained no repeat random numbers. In trying to figure this issue out I went to the student resource center for help and the instructor there inspired me to clean up my code drastically. After I did that, everything came much easier. The problem of creating the array was really just the catalyst for reorganizing my code for easier reading and use. 

 Another obstacle I faced was creating a single function to handle the display of the various overlays in the game. Before, I had multiple functions which were triggered on the click of specific buttons. When I started trying to figure out a way to restart the game, I found that this was unwieldy. After realizing this, and thinking back to my earlier issue regarding complexity, I decided to clean this up into a single function that handled game logic and the displays. 

