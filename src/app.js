const game = {
  init() {
    $('button').on('click', game.helperFunctions.hideOverlay);
    $('div').on('click', game.helperFunctions.sayHello);
    $('.game-page').on('click', game.helperFunctions.showOverlay);
    $('.timer').on('click', game.helperFunctions.decrimentTimer);
    $('.score').on('click', game.levelInfo.levelOne.loadLevel.bind(game.levelInfo.levelOne));
    $('.score').on('click', game.levelInfo.levelOne.placeObjects.bind(game.levelInfo.levelOne));// research bind gotcha's of "this".
    $('.row div').on('click', '.bottle', game.builder.removeObjects);
   },
  playerInfo: {
    score: 0,
  },
  levelInfo: {
    levelOne: {
      levelTime: 15,
      cans: 10,
      bottles: 5,
      totalObjects: 15,
      levelLocations: [],
      loadLevel() {
        let newNums = [];
          for(let i = 0; i < this.totalObjects; i++) {
            let num = game.helperFunctions.getRandomInt();
            if (jQuery.inArray(num, newNums) === -1) {
              newNums.push(num);
            }
            console.log(newNums);
            this.levelLocations = newNums;
          }
        },
      placeObjects() {
        for(let i = 0; i < this.levelLocations.length; i += 1){
         $(`.game-board .row .${this.levelLocations[i]}`).html('<div class=\'bottle\' data=\'5\'></div>');
         // '<div class=\'bottle\'></div>'
        }
      },
      },
    levelTwo: {
      cans: 20,
      bottles: 10,
      totalObjects: 30,
    },
    levelThree: {
      cans: 34,
      bottles: 20,
      totalObjects: 54,
    },
  },
  builder: {
    placeObjects(levelArray) {
      console.log(levelArray.length);
      for(let i = 0; i < levelArray.length; i += 1){
        $(`.game-board row div ${levelArray[i]}`).addClass('bottle');
      }
    },
    removeObjects(e) {
      console.log(e);
      console.log('hey');
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
      e.stopPropagation();
    },
    showOverlay(e) {
      $('.final-screen').css('visibility', 'visible');
      e.stopPropagation();
    },
    sayHello(e) {
      console.log('div clicked');
      e.stopPropagation();
    },
    decrimentTimer(e) {
      let time = 12;// levelTime
      $('.timer span').html(time);
      function tic() {
        if (time > 0) {
          time -= 1;
          $('.timer span').html(time);
        } else {
          alert('time is up!');
          clearInterval(timer);
        }
      }
      let timer = setInterval(tic, 1000);
      e.stopPropagation();
    },
  },
};
$(document).ready(function(){
  game.init();
});
