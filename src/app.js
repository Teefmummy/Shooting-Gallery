const game = {
  init() {
    // set event handlers
    $('#game-start').on('click', function(e) {
      game.helperFunctions.hideOverlay();
      game.levelBuilder(game.levels[0]);
      e.preventDefault();
    });
    $('.row div').on('click', '.clickable', game.shootTargets);
    $('.restart').on('click', game.restartGame);
    $('.next').on('click', function(e) {
      game.helperFunctions.hideOverlay();
      game.levelBuilder(game.levels[game.playerInfo.currentLevel]);
      e.preventDefault();
    });
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
      points: 30,
    },
    {
      time: 12,
      cans: 15,
      bottles: 10,
      totalObjects: 25,
      points: 50,
    },
    {
      time: 15,
      cans: 20,
      bottles: 10,
      totalObjects: 30,
      points: 60,
    },
  ],
  levelBuilder(level) {
    // set variables for use in builder
    let cans = level.cans;
    let bottles = level.bottles;
    let levelLocations = [];
    const totalObjects = level.totalObjects;
    // set the score on the page
    game.playerInfo.currentLevelScore = 0;
    $('.score span').html(0);

    // load the locations
    function loadLevel() {
      // $('.landing-page').css('visibility', 'hidden');
      const newNums = [];
      while (levelLocations.length < totalObjects) {
        const num = game.helperFunctions.getRandomInt();
        if (jQuery.inArray(num, newNums) === -1) {
          newNums.push(num);
        }
        levelLocations = newNums;
      }
    }
    // set and start the timer
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
    // place the objects
    function placeObjects() {
      for (let i = 0; i < levelLocations.length; i += 1) {
        if (bottles > 0) {
          $(`.game-board .row .${levelLocations[i]}`).html('<div class=\'bottle clickable\' data=\'5\'></div>');
          bottles -= 1;
        } else if (cans > 0) {
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
  displayScreen() {
    const $levelComplete = $('.level-complete-screen');
    const $finalScreen = $('.final-screen');
    const $points = $('.final-score span');
    const $winSpan = $('.win span');
    if (game.playerInfo.currentLevel < 2) {
      if (game.playerInfo.currentLevelScore > game.levels[game.playerInfo.currentLevel].points) {
        $levelComplete.css('visibility', 'visible');
        $points.html(game.playerInfo.currentLevelScore);
        $winSpan.html('Win!');
        game.playerInfo.currentLevel += 1;
      } else {
        $finalScreen.css('visibility', 'visible');
        $points.html(game.playerInfo.currentLevelScore);
        $winSpan.html('Lose!');
      }
    } else {
      if (game.playerInfo.currentLevelScore > game.levels[game.playerInfo.currentLevel].points) {
        $finalScreen.css('visibility', 'visible');
        $points.html(game.playerInfo.totalScore);
        $winSpan.html('Win!');
      } else {
        $finalScreen.css('visibility', 'visible');
        $points.html(game.playerInfo.currentLevelScore);
        $winSpan.html('Lose!');
      }
    }
  },
  restartGame() {
    game.playerInfo.totalScore = 0;
    game.playerInfo.currentLevel = 0;
    game.helperFunctions.hideOverlay();
    $('.clickable').remove();
    game.levelBuilder(game.levels[0]);
  },
  shootTargets() {
    const points = $(this).attr('data');
    game.playerInfo.totalScore += parseInt(points, 10);
    game.playerInfo.currentLevelScore += parseInt(points, 10);
    $('.score span').html(game.playerInfo.currentLevelScore);
    $(this).remove();
  },
  helperFunctions: {
    getRandomInt() {
      const num = Math.floor(Math.random() * (51 - 1)) + 1;
      return num;
    },
    hideOverlay(e) {
      $('.landing-page').css('visibility', 'hidden');
      $('.final-screen').css('visibility', 'hidden');
      $('.level-complete-screen').css('visibility', 'hidden');
    },
  },
};

$(document).ready(function(){
  game.init();
});
