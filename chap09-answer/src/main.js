'use strict';

import PopUp from './popup.js';
import GameBuilder from './game.js';

const gameFinishBanner = new PopUp();

//const game = new Game(3, 2, 2);
const game = new GameBuilder()
  .gameduration(5)
  .carrotCount(3)
  .bugCount(3)
  .build();

game.setGameStopListener(reason => {
  console.log(reason);
  let message;
  switch (reason) {
    case 'cancel':
      message = 'Replay?';
      break;
    case 'win':
      message = 'YOU WON';
      break;
    case 'lose':
      message = 'YOU LOST';
      break;
    default:
      throw new Error('not valid reason');
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
