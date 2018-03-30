const game = {
  init() {
    // click the start button to trigger level 1
    $('#game-start').on('click', game.helperFunctions.hideOverlay);
    $('#game-start').on('click', function(e){
      game.levelBuilder(game.levels[0]);
      e.preventDefault();
    });
    $('.row div').on('click', '.clickable', game.playerFunctions.shootTargets);
    $('.restart').on('click', game.helperFunctions.restartGame);
    $('.next').on('click', game.helperFunctions.hideOverlay);
    $('.next').on('click', function(e){
      game.levelBuilder(game.levels[game.playerInfo.currentLevel]);
      e.preventDefault();
    })

   },
  playerInfo: {
    name: '',
    currentLevel: 0,
    currentLevelScore: 0,
    totalScore: 0,
  },
  levels: [
    {
      time: 10,
      cans: 10,
      bottles: 5,
      totalObjects: 15,
    },
    {
      time: 12,
      cans: 15,
      bottles: 10,
      totalObjects: 25,
    },
    {
      time: 15,
      cans: 20,
      bottles: 10,
      totalObjects: 30
    }
  ],

  levelBuilder(level) {
    console.log('im building');
    // set variables for use in builder
    let cans = level.cans;
    let bottles = level.bottles;
    let levelLocations = [];
    let totalObjects = level.totalObjects;
    // set the score on the page
    $('.score span').html(game.playerInfo.totalScore);

    // load the locations
    function loadLevel() {
      // $('.landing-page').css('visibility', 'hidden');
        let newNums = [];
          while(levelLocations.length < totalObjects) {
            let num = game.helperFunctions.getRandomInt();
            if (jQuery.inArray(num, newNums) === -1) {
              newNums.push(num);
            }
            console.log(newNums);
            levelLocations = newNums;
          }
        }
    // set and start the timer
    function setTimer() {
      let time = level.time;// levelTime
      $('.timer span').html(time);
      function tic() {
        if (time > 0) {
          time -= 1;
          $('.timer span').html(time);
        } else {
          clearInterval(timer);
          game.playerInfo.currentLevel += 1;
          game.nextLevel();
        }
      }
      let timer = setInterval(tic, 1000);

    }
    // place the objects
    function placeObjects() {
        for(let i = 0; i < levelLocations.length; i += 1){
          if (bottles > 0){
            $(`.game-board .row .${levelLocations[i]}`).html('<div class=\'bottle clickable\' data=\'5\'></div>');
            bottles -= 1;
          } else if (cans > 0){
            $(`.game-board .row .${levelLocations[i]}`).html('<div class=\'can clickable\' data=\'1\'></div>');
            cans -= 1;
          }
        }
      }
    // call the functions
    loadLevel();
    setTimer();
    placeObjects();
  },
  nextLevel(){
    if (game.playerInfo.currentLevel === 3 && game.playerInfo.currentLevelScore > 30){
      game.helperFunctions.showFinal();
    } else if (game.playerInfo.currentLevel < 3 && game.playerInfo.currentLevelScore > 30){
      game.helperFunctions.levelCompleteScreen();
    } else {
      game.helperFunctions.showFinal();
    }
  },
  playerFunctions: {
    shootTargets(e) {
      console.log(e.target);
      let points = $(this).attr('data');
      game.playerInfo.totalScore += parseInt(points);
      game.playerInfo.currentLevelScore += parseInt(points);
      $('.score span').html(game.playerInfo.totalScore);
      console.log(game.playerInfo.totalScore);
      $(this).remove();
    },
  },
  helperFunctions: {
    getRandomInt() {
      const num = Math.floor(Math.random() * (51 - 1)) + 1;
      return num;
    },
    levelCompleteScreen() {
      $('.level-complete-screen .final-score span').html(game.playerInfo.currentLevelScore);
      $('.level-complete-screen').css('visibility', 'visible');
    },
    hideOverlay(e) {
      $('.landing-page').css('visibility', 'hidden');
      $('.final-screen').css('visibility', 'hidden');
      $('.level-complete-screen').css('visibility', 'hidden');
    },
    showFinal(e) {
      $('.final-screen').css('visibility', 'visible');
      if(game.playerInfo.totalScore >= 30){
        $('.win span').html('Win!');
      } else if (game.playerInfo.totalScore < 30){
        $('.win span').html('Lose!');
      }
      $('.final-score span').html(game.playerInfo.totalScore);
    },
    restartGame() {
      console.log('yo');
      game.playerInfo.totalScore = 0;
      game.helperFunctions.hideOverlay();
      $('.clickable').remove();
      game.levelBuilder(game.levels[0]);
    },
  },
};

$(document).ready(function(){
  game.init();
});
