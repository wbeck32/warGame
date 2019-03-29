/* eslint-disable no-console */

class Card {
  constructor(ranks, suits) {
    this.card = [];
    this.ranks = ranks;
    this.suits = suits;
  }

  makeCard() {
    const { card, ranks, suits } = this;
    console.log(888, ranks, suits);
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
    const { numRanks, numSuits } = this;
    this.createDeck(numRanks, numSuits);
    this.shuffle();
    const dealPile = this.deck;
    const { numPlayers } = this;
    const dealtArray = [...Array(numPlayers)];
    dealtArray.map((u, idx) => { dealtArray[idx] = []; });
    dealPile.reduce((a, v, i) => {
      const modu = i % numPlayers;
      dealtArray[modu].push(v);
    }, 0);
    return dealtArray;
  }

  createDeck(numRanks, numSuits) {
    const { deck } = this;
    const allSuits = ['clubs', 'diamonds', 'hearts', 'spades'];
    const suits = allSuits.slice(0, numSuits)
    let intialDeck = Array.from({ length: numRanks }, (v, i) => i + 1)
    let it = intialDeck[Symbol.iterator]()
    for (let member of it) {
      suits.forEach((i) => {
        it = {
          suit: i,
          rank: member
        }
        deck.push(it)
      })
    }
  }
}