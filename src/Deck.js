/* eslint-disable no-console */

class Card {
  constructor(dealtCard, handId, playerId) {
    this.card = {};
    this.dealtCard = dealtCard;
    this.handId = handId;
    this.playerId = playerId;
  }

  makeCard() {
    let { card } = this;
    const { dealtCard: { rank, suit }, handId, playerId } = this;
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
    const handsArray = [];
    dealStack.forEach((ele, i) => {
      const playerId = i % numPlayers;
      const handId = i % numRanks;
      handsArray.push(new Card(ele, handId, playerId).makeCard());
    });
    console.log('handsArray: ', handsArray);
    return handsArray;
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