const Player = require("./Player.js");
const Scoreboard = require("./Scoreboard.js");

class Game {
    constructor(name){
        this.name = name;
        this.scoreboard = new Scoreboard(); 
    }

    join(myPlayer) {
        if(myPlayer instanceof Player) {
        this.scoreboard.players.push(myPlayer.name);
        this.scoreboard.scores.push(0); 
    } 
    }

    addPoints(myPlayer) {
    let playerIdx = this.scoreboard.players.indexOf(myPlayer.name);
        if(playerIdx !== -1) {
            this.scoreboard.scores[playerIdx] += 1;
        }
    }

    deductPoints(myPlayer) {
        //find index player by name
        let playerIdx = this.scoreboard.players.indexOf(myPlayer.name);
        if(playerIdx !== -1) { 
        this.scoreboard.scores[playerIdx] -= 1;
    }   
    }

    showScores() {
        return this.scoreboard;
    }

    showWinner() {
        const maxScore = Math.max(...this.scoreboard.scores);
        const playerIdx = this.scoreboard.scores.indexOf(maxScore);
        return `THE WINNER OF *${this.name}* IS: ${this.scoreboard.players[playerIdx]}`;  
    }

}

module.exports = Game;
