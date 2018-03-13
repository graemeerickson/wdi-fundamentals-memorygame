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

// logic to check whether the two cards match
var checkForMatch = function () {
   if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
      setTimeout(function() { alert("You found a match!"); }, 25);
   } else {
      console.log("Sorry, try again.");
      setTimeout(function() { alert("Sorry, try again."); }, 25);
   };
};

// receive flipped card, add it to cards in play, and check for a match
var flipCard = function () {
   cardId = this.getAttribute('data-id');
   cardsInPlay.push(cards[cardId].rank);
   console.log("User flipped " + cards[cardId].rank);
   console.log("Flipped card suit: " + cards[cardId].suit);
   console.log("Flipped card image: " + cards[cardId].cardImage);
   this.setAttribute('src',cards[cardId].cardImage);
   if (cardsInPlay.length < 2) {
      console.log("Waiting for second card to flip...")
   } else {
      checkForMatch()
   };
};

// set up the board - four cards facing down
var createBoard = function () {
   for (var i = 0; i < cards.length; i++) {
      var cardElement = document.createElement('img');
      cardElement.setAttribute('src','images/back.png');
      cardElement.setAttribute('data-id',i);
      document.getElementById('game-board').appendChild(cardElement);
      cardElement.addEventListener('click',flipCard);
   };
};

createBoard();