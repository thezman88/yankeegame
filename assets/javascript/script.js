// global variables
var win = 0;
var loss = 0;
var remainingGuesses = 9;
var answer = ['ruth','dimaggio','mantel','jeter','rivera'];
var randNum = Math.floor(Math.random()*answer.length);
var currentWord = answer[randNum];
var lettersGuessed =[];

// if player does not win
document.onkeyup = function(event){
  var userChoice = event.key;

  // reset if user loses
  if(remainingGuesses <=0){
    loss++;
    document.getElementbyId("losses").innerHTML = loss++;
    alert("You Lost!");
    remainingGuesses = 9;
    lettersGuessed = [];
    document.getElementbyId("lettersGuessed").innerHTML = lettersGuessed;
    document.getElementbyId("remainingGuesses").innerHTML= 9;
    randNum = Math.floor(Math.random()*answer.length);
    currentWord = answer[randNum];
  }

  // if(currentWord===)





}


// document.getElementbyId("wins").innerHTML=loss++




// if player wins
