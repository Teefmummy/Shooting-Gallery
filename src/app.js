const game = {
  init() {
    $('button').on('click', game.helperFunctions.hideOverlay);
    $('div').on('click', game.helperFunctions.sayHello);
    $('.game-page').on('click', game.helperFunctions.showOverlay);
    $('.timer').on('click', game.helperFunctions.decrimentTimer);
    $('.row div').on('click', game.builder.placeObjects);
    $('.bottle').on('click', game.builder.removeObjects);
    $('.score').on('click', game.levelInfo.levelOne.loadLevel);
  },
  levelInfo: {
    levelOne: {
      {levelTime: 15,
      cans: 10,
      bottles: 5,
      totalObjects: 15,
      levelLocations: [],
      loadLevel() {
          for(let i = 0; i < this.totalObjects; i++) {
            let newNums = [];
            let num = game.helperFunctions.getRandomInt();
            if (jQuery.inArray(num, newNums) === -1) {
              newNums.push(num);
            }
            this.levelLocations = newNums;
          }
        console.log(this.levelLocations);
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
    placeObjects() {
      $(this).addClass('can');
    },
    removeObjects() {
      $(this).remove('.bottle');
    },
  },
  helperFunctions: {
    getRandomInt() {
      const num = Math.floor(Math.random() * (101 - 1)) + 1;
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
