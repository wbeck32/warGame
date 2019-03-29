/* eslint-disable no-console */

class Card {
  constructor(dealtCard) {
    this.card = {};
    this.dealtCard = dealtCard;
  }

  makeCard() {
    let { card } = this;
    const { dealtCard: { card: { suit, rank }, handId, playerId } } = this;
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
    const dealtArray = [];
    const handArray = Array.from({ length: numRanks }, (x, i) => []);
    dealStack.forEach((card, idx) => {
      handArray.forEach((hand, i) => {
        handArray[i].push(card = {
          card: dealStack[idx],
          handId: i,
          playerId: 0
        });
      });
    });
    dealtArray.forEach((ele) => {
      let handId = 0;
      do {
        ele.handId = handId + 1;
        handId = handId + 1;
      } while (handId < numRanks);
    });
    dealtArray.forEach((ele) => {
      let playerId = 0;
      do {
        ele.playerId = playerId + 1;
        playerId = playerId + 1;
      } while (playerId <= numPlayers);
    });
    return dealtArray;
  }

  createDeck(numRanks, numSuits) {
    const { deck } = this;
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