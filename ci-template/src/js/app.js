// TODO: write your code here
// import sum from './basic';
import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game';

console.log('app worked');

// console.log(sum([1, 2]));

const game = new Game();
game.start();
