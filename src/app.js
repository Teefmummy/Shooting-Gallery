const game = {
  init() {
    // click the start button to trigger level 1
    $('#game-start').on('click', game.helperFunctions.hideOverlay);
    $('#game-start').on('click', function(e){
      game.levelBuilder(game.firstLevel);
      e.preventDefault();
    });
    $('.row div').on('click', '.clickable', game.playerFunctions.shootTargets);
    $('.restart').on('click', game.helperFunctions.restartGame);
   },
  playerInfo: {
    name: '',
    score: 0,
  },
  firstLevel: {
    time: 15,
    cans: 10,
    bottles: 5,
    totalObjects: 15,
  },
  levelBuilder(level) {
    console.log('im building');
    // set variables for use in builder
    let cans = level.cans;
    let bottles = level.bottles;
    let levelLocations = [];
    let totalObjects = level.totalObjects;
    // set the score on the page
    $('.score span').html(0);

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
          game.helperFunctions.showOverlay();
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
  playerFunctions: {
    shootTargets() {
      let points = $(this).attr('data');
      game.playerInfo.score += parseInt(points);
      $('.score span').html(game.playerInfo.score);
      console.log(game.playerInfo.score);
      $(this).remove();
    },
  },
  helperFunctions: {
    getRandomInt() {
      const num = Math.floor(Math.random() * (51 - 1)) + 1;
      return num;
    },
    hideOverlay(e) {
      $('.landing-page').css('visibility', 'hidden');
      $('.final-screen').css('visibility', 'hidden');
    },
    showOverlay(e) {
      $('.final-screen').css('visibility', 'visible');
      if(game.playerInfo.score >= 30){
        $('.win span').html('Win!');
      } else if (game.playerInfo.score < 30){
        $('.win span').html('Lose!');
      }
      $('.final-score span').html(game.playerInfo.score);
    },
    restartGame() {
      console.log('yo');
      game.playerInfo.score = 0;
      game.helperFunctions.hideOverlay();
      game.levelBuilder(game.firstLevel);
    },
  },
};

$(document).ready(function(){
  game.init();
});
