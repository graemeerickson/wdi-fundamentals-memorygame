// define cards array containing an object for each card
var cards = [
   {
      rank: "queen",
      suit: "hearts",
      cardImage: "images/queen-of-hearts.png"
   },
   {
      rank: "queen",
      suit: "diamonds",
      cardImage: "images/queen-of-diamonds.png"
   },
   {
      rank: "king",
      suit: "hearts",
      cardImage: "images/king-of-hearts.png"
   },
   {
      rank: "king",
      suit: "diamonds",
      cardImage: "images/king-of-diamonds.png"
   }
];

var cardsInPlay = [];
var cardId;  //global variable in order to reference in more than one function
var numWins = 0;
var numLosses = 0;
var winPercentage = 0.0;

// logic to check whether the two cards match, and to update the user's score
var checkForMatch = function () {
   if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
      setTimeout(function() { alert("You found a match!"); }, 25);
      numWins += 1;
      winPercentage = winPercentageCalc(numWins, numLosses);
      document.getElementById('wins').innerHTML = numWins;
      document.getElementById('winpercentage').innerHTML = winPercentage + "%";
   } else {
      console.log("Sorry, try again.");
      setTimeout(function() { alert("Sorry, try again."); }, 25);
      numLosses += 1;
      winPercentage = winPercentageCalc(numWins, numLosses);
      document.getElementById('losses').innerHTML = numLosses;
      document.getElementById('winpercentage').innerHTML = winPercentage + "%";
   };
   replayGame();
};

// receive flipped card, add it to cards in play, and check for a match
var flipCard = function () {
   cardId = this.getAttribute('data-id');
   cardsInPlay.push(cards[cardId].rank);
   if (cardsInPlay.length <= 2) {   
      console.log("User flipped " + cards[cardId].rank);
      console.log("Flipped card suit: " + cards[cardId].suit);
      console.log("Flipped card image: " + cards[cardId].cardImage);
      this.setAttribute('src',cards[cardId].cardImage);
   };
   if (cardsInPlay.length === 2) {
      checkForMatch();
   };
};

// set up the board - four cards facing down
var createBoard = function () {
   
   var shuffledDeck = [];
   
   for (var i = 0; i < cards.length; i++) {
      
      // calculate random number within our range of cards in order to provide a shuffled deck each play
      var shuffledCard = getRandomInt(0, cards.length-1);
      while (shuffledDeck.includes(shuffledCard)) {
         shuffledCard = getRandomInt(0, cards.length-1);
      };
      shuffledDeck.push(shuffledCard);
      console.log("Shuffled card: " + shuffledCard)

      var cardElement = document.createElement('img');
      cardElement.setAttribute('src','images/back.png');
      cardElement.setAttribute('data-id',shuffledCard);
      document.getElementById('game-board').appendChild(cardElement);
      cardElement.addEventListener('click',flipCard);
   };
};

// listen for the user to click the 'Replay game' button
var replayGame = function() {
   var replayGame = document.getElementById('replay');
   replayGame.addEventListener('click',resetBoard);
};

// reset board by removing each card, then calling our createBoard function
var resetBoard = function() {
   cardsInPlay = [];
   var cardElement = document.getElementById('game-board');
   while (cardElement.firstChild) {
      cardElement.removeChild(cardElement.firstChild);
   };
   createBoard();
};

// rounding function, thanks to: http://www.jacklmoore.com/notes/rounding-in-javascript/
function round(value, decimals) {
   return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
};

// random number function, thanks to: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
};

// calculate win percentage to a rounded number
function winPercentageCalc(wins, losses) {
   return (wins === 0 ? 0.00 : round((numWins / (numLosses + numWins) * 100),1));
};

createBoard();