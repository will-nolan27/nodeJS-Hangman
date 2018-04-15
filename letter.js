var Letter = function (char, guessed, display) {
	this.char = char;
	this.guessed = guessed;
	this.display = function () {
		this.show = "";
		if (this.guessed === false) {
			this.show = "_";
		} else {
			this.show = this.char;
		}
	};

};
var A = new Letter("B", false);
A.display(console.log(A.show));



module.exports = Letter;