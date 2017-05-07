var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard");
var fs = require("fs");



var inquirer = require("inquirer");


inquirer.prompt([

	{
		type:"list",
		message: "What type of card do you want to make?",
		choices: ["Basic", "Cloze"],
		name: "cardType"
	}


	]).then(function (answers) {
    	if(answers.cardType === "Basic"){
    		inquirer.prompt([

				{
					message: "What is your question?",
					name: "question"
				},

				{
					message: "What is your answer?",
					name: "answer"
				}


			]).then(function (answers){
				var myCard = new BasicCard(answers.question, answers.answer);

				console.log(myCard);

				fs.appendFile("cards.txt", JSON.stringify(myCard), function(err){
					if (err) {
	    				console.log(err);
	 				 }
				});

			});


    	}else{

    		//this is a break

    		inquirer.prompt([

				{
					message: "What is your statement?",
					name: "statement"
				},

				{
					message: "What part of the statement would you like to hide?",
					name: "hidden"
				}


			]).then(function (answers){

				var myCard = new ClozeCard(answers.statement, answers.hidden);

				console.log(myCard.question);

				var newObj = new Object();
				newObj.question = myCard.question;
				newObj.answer = myCard.answer;

				fs.appendFile("cards.txt", JSON.stringify(newObj), function(err){
					if (err) {
	    				console.log(err);
	 				 }
				});

				

			});
    		//this is a break


    	};

});

