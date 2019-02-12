"use strict";

//init game on load
$(document).ready(function(){
    game.resetGame();
})

//Set Game object
var game = {
    gameScore: "", // holds the random score selected for each game
    gemScore: [], // holds the random score selected for gems
    yourScore: 0, // holds the total score of player
    win: 0, // sets game win to 0
    loss: 0, // sets game loss to 0
    hasFinished: true,
    

    //reset all game counters + start game
    resetGame: function(){
        this.hasFinished = false;
        this.yourScore = 0;

        this.gameScore = Math.floor(Math.random() * 102) + 19;
        $("#gameScore").text(this.gameScore);

        for (var i = 0; i <= 3; i++){
            this.gemScore[i] = Math.floor(Math.random() * 13) + 1;
        };

        this.updateDisplay();

        console.log(game.gemScore);

    },

    //update display
    updateDisplay: function(){
        $("#win").text(this.win);
        $("#loss").text(this.loss);
        $("#yourScore").text(this.yourScore);
        $("#msg").empty();
    },

    winLoss: function () {
        if (this.yourScore < this.gameScore){
            this.updateDisplay ();
        } else if (this.yourScore === this.gameScore){
            this.resetGame();
            $("#msg").append("<p>You win!</p>");
            this.win++;
            this.hasFinished = true;
        } else {
            this.resetGame();
            $("#msg").append("<p>You lose!</p>");
            this.loss++;
            this.hasFinished = true;
        };
    
    },
}


//setting up on clicks
$("#btn1").on("click", function(){
    game.yourScore += game.gemScore[0];
    game.winLoss();
})

$("#btn2").on("click", function(){
    game.yourScore += game.gemScore[1];
    game.winLoss();
})

$("#btn3").on("click", function(){
    game.yourScore += game.gemScore[2];
    game.winLoss();
})

$("#btn4").on("click", function(){
    game.yourScore += game.gemScore[3];
    game.winLoss();
})

