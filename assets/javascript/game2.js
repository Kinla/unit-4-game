"use strict";

//init game on load
$(document).ready(function(){
    game.resetGame();
})

//Set Game object
var game = {
    gameScore: "", // holds the random score selected for each game
    gemScore: "", // holds the random score selected for gem
    yourScore: 0, // holds the total score of player
    win: 0, // sets game win to 0
    loss: 0, // sets game loss to 0
    hasFinished: true,

    //reset all game counters + start game
    resetGame: function(){
        this.hasFinished = false;
        this.yourScore = 0;
        this.gemScore = "";

        this.gameScore = Math.floor(Math.random() * 102) + 19;
        $("#gameScore").text(this.gameScore);

        this.updateDisplay();

    },

    //update display
    updateDisplay: function(){
        $("#win").text(this.win);
        $("#loss").text(this.loss);
        $("#yourScore").text(this.yourScore);
        $("#gemScore1").hide();
        $("#gemScore2").hide();
        $("#gemScore3").hide();
        $("#gemScore4").hide();
        $("#gem1").show();
        $("#gem2").show();
        $("#gem3").show();
        $("#gem4").show();

    },

    //sets gem score
    setGem: function(){
        this.gemScore = Math.floor(Math.random() * 13) + 1;
        this.calcYourScore();
    },

    // calculate yourScore
    calcYourScore: function () {
        //update yourScore
        this.yourScore += this.gemScore;
        this.updateDisplay();

        this.winLoss();
    },
    
    //check if won
    winLoss: function (){
        // if won
        if(this.yourScore === this.gameScore){
            this.win++;
            this.hasFinished = true;
            alert("You have won!");
            this.resetGame();
            //if loss
        } else if (this.yourScore > this.gameScore){
            this.loss++
            this.hasFinished = true;
            alert("You have loss!");
            this.resetGame();
        } else if(this.yourScore < this.gameScore) {
            this.updateDisplay();
        };

    },


}


// THE PROBLEM: game.setGem(); executes all the functions following it before any of the JQuery DOM manipulation happens...

//setting up on clicks
$("#btn1").on("click", function(){
    game.setGem();
    $("#gemScore1").show();
    $("#gemScore1").text(game.gemScore);
    $("#gem1").hide();
})

$("#btn2").click(function(){
    game.setGem();
    $("#gemScore2").show();
    $("#gemScore2").text(game.gemScore);
    $("#gem2").hide();
})

$("#btn3").click(function(){
    game.setGem();
    $("#gemScore3").show();
    $("#gemScore3").text(game.gemScore);
    $("#gem3").hide();
})

$("#btn4").click(function(){
    game.setGem();
    $("#gemScore4").show();
    $("#gemScore4").text(game.gemScore);
    $("#gem4").hide();
})

