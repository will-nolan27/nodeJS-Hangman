var letter = function(char, show, letterRender){
	this.char = char;
	this.show = false;
	this.letterRender = function(){
		return !(this.show) ? "_" : this.char;
	};
};

module.exports = letter;