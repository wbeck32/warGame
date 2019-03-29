/* eslint-disable no-console */

class Card {
  constructor(dealtCard, userId) {
    this.card = {};
    this.dealtCard = dealtCard;
    this.userId = userId;
  }

  makeCard() {
    let { card } = this;
    const { dealtCard: { rank, suit }, userId } = this;
    card = { rank, suit, userId };
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
    const dealPile = this.deck;
    const dealtArray = Array.from({ length: numPlayers }, (v, i) => i + 1);
    dealtArray.map((u, idx) => { dealtArray[idx] = []; });
    dealPile.reduce((a, v, i) => {
      const userId = i % numPlayers;
      dealtArray[userId].push(new Card(v, userId).makeCard());
    }, 0);
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