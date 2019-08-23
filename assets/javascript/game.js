// answer
var answer = ['ruth', 'mantel', 'dimaggio', 'jeter', 'rivera'];
// the word guessed as string
var theWord = "";
// array to hold letters in theWord
var theWordLtrs = [];
// number of _ in theWord
var underScores = 0;
// array to store displayed answer
var answerDisplay = [];
// array for wrong guesses displayed
var wrongLtrs = [];

// game counters
var wins = 0;
var losses = 0;
var guessesRemain = 9;

// game function

// start Game
function newGame(){
  // computers answer from answer
  theWord = answer[Math.floor(Math.random()*answer.length)];
  console.log(theWord);
  // grab theWord and split it up to each letter
   theWordLtrs =currentWord.split("");
   console.log(theWordLtrs);
   // get number of letters from the word
   underScores = theWordLtrs.length;
   console.log(underScores);

   // game reset variables
   guessesRemain = 9;
   wrongLtrs = [];
   answerDisplay = [];

   // reset images
   if(guessesRemain =9){
     document.getElementById('')
   }
}
