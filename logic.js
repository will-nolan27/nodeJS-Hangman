var Word = require('./word.js');
var prompt = require('prompt');

prompt.start();

game = {
    words: ["promises", "constructors", "async", "function", "object", "parameter", "value", "imperative"],
    wordsRight: 0,
    guessesCount: 10,
    current: null,

    startGame: function (wrd) {
        this.resetGuesses();
        this.current = new Word(this.words[Math.floor(Math.random() * this.words.length)]);
        this.current.getLet();
        this.promptUser();
    },

    resetGuesses: function () {
        this.guessesCount = 10;
    },

    promptUser: function () {
        var self = this;
        prompt.get(['Guess a letter'], function (err, result) {
            console.log("You guessed: " + result.guessLet);
            var guessed = self.current.checkLetter(result.guessLet);

            if (guessed == 0) {
                console.log("WRONG");
                self.guessesCount--;

            } else {
                console.log("CORRECT");
                if (self.current.findWord()) {
                    console.log("You won!");
                    console.log("-------------------");
                    return;
                }
            }

            console.log("Guesses remaining: " + self.guessesCount);
            console.log("-------------------");
            if ((self.guessesCount >
                    0) && (self.current.found == false)) {
                self.promptUser();
            } else if (self.guessesCount ==
                0) {
                console.log("Game over. Correct Word ", self.current.target);
            } else {
                console.log(self.current.wordRender());
            }
        });
    }
};

game.startGame();