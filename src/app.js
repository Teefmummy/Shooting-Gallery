const game = {
  init() {
    eventHandlers: {
      $('button').on('click', game.helperFunctions.hideOverlay);
      $('div').on('click', game.helperFunctions.sayHello);
      $('.game-page').on('click', game.helperFunctions.showOverlay);
      $('.timer').on('click', game.helperFunctions.decrimentTimer);
      $('.row div').on('click', game.builder.placeObjects);
      $('.bottle').on('click', game.builder.removeObjects);
    }
  },
  builder: {
    placeObjects(e) {
      $(this).addClass('bottle');
    },
    removeObjects(e) {
      $(this).removeClass('bottle');
    }
  },
  helperFunctions: {
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
    decrimentTimer(e, levelTime) {
      let time = 12;// levelTime
      $('.timer span').html(time + " seconds");
      function tic() {
        if (time > 0) {
          time -= 1;
          $('.timer span').html(time + " seconds");
        } else {
          alert('time is up!');
          clearInterval(timer);
        }
      }
      let timer = setInterval(tic, 1000);
      e.stopPropagation();
    },
  }
};
$(document).ready(function(){
  game.init();
});
