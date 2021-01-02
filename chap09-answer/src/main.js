'use strict';

import PopUp from './popup.js';
import Game from './game.js';

const gameFinishBanner = new PopUp();

const game = new Game(3, 2, 2);
game.setGameStopListener(reason => {
  console.log(reason);
  let message;
  switch (reason) {
    case 'cancel':
      message = 'Replay?';
      gameFinishBanner.showWithText(message);
      break;
    case 'win':
      message = 'YOU WON';
      gameFinishBanner.showWithText(message);
      break;
    case 'lose':
      message = 'YOU LOST';
      gameFinishBanner.showWithText(message);
      break;
    default:
      throw new Error('not valid reason');
  }
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
