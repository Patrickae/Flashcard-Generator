var fs = require("fs");


function ClozeCard(text, answer){
	this.text = text,
	this.answer = answer,
	this.question = text.replace(answer, "...");
};

module.exports = ClozeCard;