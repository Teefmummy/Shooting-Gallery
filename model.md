game rules => Model
There is a grid of locations where targets can spawn. the background doesn't change. 
it is a single player game
A screen signalling the start of a round. countdown? beep beep BEEEP. 3,2,1, GO!
on start the board populates and the timer starts.
the time starts at X seconds and ticks down until 0.
On click the target will disapear and the score will go up.
When all essential targets are clicked the level will end. If not, then failure screen
On completion of one level, a new level screen will show up. 
A screen signalling the start of a round. countdown? beep beep BEEEP. 3,2,1, GO!
repeat...
On completion of level 3. A win screen pops up. you can retry which will begin the process anew from lvl 1

win logic: if level array matches player array & timer has not reached 0 then, next level
    increment level
        if level array matches player array & timer has not reached 0 then, next level
    increment level
        if level array matches player array & timer has not reached 0 then, you win
    display win page


HTML implementation => View
landing page > overlay,
  > h1 for title
  >buttons for start game * and high score page
Game Page > main
 > div in top left corner
  > h2 for score
  > h2 for timer
 > grid of divs (20 X 10)
  > classes for targets
  > Bee spawns on either left or right and moves in parabolic arc until he goes across the screen.
Failure page > overlay
  > div which goes over the entire body and contains
    > h2 'you lose'
    > h2 for score 
    > button for restart
win page > overlay
  > div which goes over the entire body and contains
    > h2 you win
    > h2 for score
    > button for restart
    > form for high score 
     > input text field for name (char limit 3)
     > on completion adds high score overlay which takes over screen
*high score page >  new page? & overlay
  > div which shows top ten high scores 
   > populates with high score added from form 
   > button for restart



user interaction => Controller
landing page >> click start game button, *click button to navigate to high score page
game page >> click targets
failure page >> click to restart game
win page >> click to restart game, *form to enter high score data. on completion of form, shows high score page 
high score page >> click to restart game

