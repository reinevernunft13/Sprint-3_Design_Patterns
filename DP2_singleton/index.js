const Player = require("./Player.js");
const Game = require("./Game.js");

//CREATE GAME
let myGame1 = new Game("THE GAME OF GAMES");

//CREATE OBJECTS PLAYER
let myPlayer1 = new Player("Paquito");
let myPlayer2 = new Player("Antonio");
let myPlayer3 = new Player("María de la O");

//ADD PLAYERS
myGame1.join(myPlayer1); 
myGame1.join(myPlayer2);
myGame1.join(myPlayer3);

//DISPLAY PLAYERS
//console.log(myGame1.scoreboard.players);

//SHOW SCORES BEFORE ADDING SCORES
//console.table(myGame1.showScores()); 

myGame1.deductPoints(myPlayer1);
myGame1.addPoints(myPlayer2);

//SHOW SCORES AFTER ADDING SCORES
console.table(myGame1.showScores());

//DISPLAYS WINNER
console.log(myGame1.showWinner());



