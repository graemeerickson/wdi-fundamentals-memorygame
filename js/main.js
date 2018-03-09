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

// logic to check whether the two cards match
var checkForMatch = function () {
   if (cardsInPlay.length < 2) {
      console.log("Waiting for second card to flip...")
   } else if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
      alert("You found a match!");
   } else {
      console.log("Sorry, try again.");
      alert("Sorry, try again.");
   }
}

// receive flipped card, add it to cards in play, and check for a match
var flipCard = function (cardId) {
   console.log("User flipped " + cards[cardId].rank);
   cardsInPlay.push(cards[cardId].rank);
   console.log("Flipped card suit: " + cards[cardId].suit);
   console.log("Flipped card image: " + cards[cardId].cardImage);
   checkForMatch();
}

// initiate card flipping
flipCard(0);
flipCard(2);