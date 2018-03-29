const game = {
  init() {
    //click the start button to trigger level 1
    $('#game-start').on('click', game.helperFunctions.hideOverlay);
    $('div').on('click', game.helperFunctions.sayHello);
    $('#game-start').on('click', game.helperFunctions.decrimentTimer);
    $('#game-start').on('click', game.levelInfo.levelOne.loadLevel.bind(game.levelInfo.levelOne));
    $('#game-start').on('click', game.levelInfo.levelOne.placeObjects.bind(game.levelInfo.levelOne));// research bind gotcha's of "this".
    $('.row div').on('click', '.clickable', game.builder.removeObjects);
    $('.game-page').on('click', game.helperFunctions.showOverlay);
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
          if(this.bottles > 0){
            $(`.game-board .row .${this.levelLocations[i]}`).html('<div class=\'bottle clickable\' data=\'5\'></div>');
            this.bottles -= 1;
          } else if (this.cans > 0){
            $(`.game-board .row .${this.levelLocations[i]}`).html('<div class=\'can clickable\' data=\'1\'></div>');
            this.cans -= 1;
          }
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
