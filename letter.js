var Letter = function (char, guessed, display) {
	this.char = char;
	this.guessed = guessed;
};

Letter.prototype.display = function () {
	if (this.guessed === false) {
		var show = "-";
		console.log(show);

	} else {
		var show = this.char;
		console.log(show);
	}
}

Letter.prototype.check = function(arg1){
	if (arg1 === this.char){
		this.guessed= true;
		this.display();
	}else {
		this.guessed = false;
		this.display();
	}
}

var A = new Letter("B", false);
A.check("C");




module.exports = Letter;