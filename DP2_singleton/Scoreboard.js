//The board contains 
class Scoreboard {
    constructor() {
        this.players = [];
        this.scores = [];
         
        if (typeof Scoreboard.instance === 'object'){ //(typeof Scoreboard.instance !== 'undefined')
            return Scoreboard.instance;
        } 
        
        Scoreboard.instance = this; 
        return this;
    }
 
  
 
    showScoreboard() {
        return this.Scoreboard;
    }
    getWinner() {
        return this.board.sort()[0];
    }
    
    
/*
    showScores() {

        for (let i = 0; i < this.players.length; i++) {
            let res = this.players[i] + " points: " + this.scores[i]; 
            console.log(res);
    }
} */


}

module.exports = Scoreboard;


