var letter = require('./letter.js');

function Word(target, char, found, getLet, findWord, checkLetter, wordRender) {
	this.target = target;
	this.char = [];
	this.found = false;
}
	
Word.prototype.wordRender = function() {
		var string = '';
		for (var i=0; i < this.char.length; i++){
			string += this.char[i].letterRender();
		}
		return string;
	};

Word.prototype.checkLetter = function(guessLet) {
		var toReturn = 0;

		for (var i = 0; i < this.char.length; i++) {
			if (this.char[i].charac == guessLet){
				this.char[i].appear = true;
				toReturn++;
			}
		}
		return toReturn;
	};

Word.prototype.findWord = function() {
		this.found = this.char.every(function(currLett) {
			return currLett.appear;
		});
		return this.found;
	};

Word.prototype.getLet = function() {
		for (var i=0; i < this.target.length; i++) {
			this.char.push( new letter(this.target[i]));
		}
	};

module.exports = Word;