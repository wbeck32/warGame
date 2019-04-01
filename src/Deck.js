
/* eslint-disable no-console, no-undef, no-unused-vars */

class Card {
  constructor(dealtCard) {
    this.card = {};
    this.dealtCard = dealtCard;
  }

  makeCard() {
    let { card } = this;
    const { dealtCard: { handId, playerId, rank, suit } } = this;
    card = { handId, playerId, rank, suit };
    return card;
  }
}

export default class Deck {
  constructor(numPlayers, numRanks, numSuits) {
    this.deck = [];
    this.numPlayers = numPlayers;
    this.numRanks = numRanks;
    this.numSuits = numSuits;
  }

  shuffle() {
    const shuffled = this.deck;
    let currentIndex = shuffled.length;
    let temporaryValue;
    let randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = shuffled[currentIndex];
      shuffled[currentIndex] = shuffled[randomIndex];
      shuffled[randomIndex] = temporaryValue;
    }
    this.deck = shuffled;
  }

  deal() {
    const { numPlayers, numRanks, numSuits } = this;
    this.createDeck(numRanks, numSuits);
    this.shuffle();
    const dealStack = this.deck;

    let handId = 0;
    let playerId = 0;
    const dealtArray = Array.from({ length: numRanks }, (x, i) => []);
    let numHands = numRanks;
    // let numPersons = numPlayers;

    function* handIds() {
      if (playerId < numPersons) {
        yield handId;
      } else {
        playerId = 0;
        handId++;
        yield handId;
      }
    }

    function* playerIds() {
      if (playerId < numPersons) {
        yield playerId++;
      } else {
        playerId = 0;
        yield playerId++;
      }
    }

    dealStack.forEach((card) => {
      const hand = {
        handId: handIds().next().value,
        playerId: playerIds().next().value,
        rank: card.rank,
        suit: card.suit
      };

      const handObj = new Card(hand).makeCard();
      dealtArray[hand.handId].push(handObj);
    });
    return dealtArray;
  }

  createDeck() {
    // TODO: make sure there are enough cards so no player has more than one card more or less than the others
    const { deck, numPlayers, numRanks, numSuits } = this;
    if (numRanks > 13 || numSuits > 4) {
      console.log(`Nope, that would make ${numRanks * numSuits} cards and that is too many cards.`);
      return;
    }
    const even = numRanks * numSuits % numPlayers;
    if (even > 1) {
      console.log(`That is not a fair game. One player would only have ${even} cards.`);
      return;
    }
    const allSuits = ['clubs', 'diamonds', 'hearts', 'spades'];
    const suits = allSuits.slice(0, numSuits);
    const intialDeck = Array.from({ length: numRanks }, (v, i) => i + 1);
    let it = intialDeck[Symbol.iterator]();
    for (const member of it) {
      suits.forEach((i) => {
        it = {
          suit: i,
          rank: member
        };
        deck.push(it);
      });
    }
  }
}