/* eslint-disable no-console */

class Card {
  constructor(ranksArray, suitsArray) {
    this.card = [];
    this.ranks = ranksArray.length;
    this.suits = suitsArray.length;
  }

  makeCard() {
    const { card, ranks, suits } = this;
    console.log(ranks, suits);
    return card;
  }
}

export default class Deck {
  constructor(numPlayers, numRanks, numSuits) {
    this.cards = [];
    this.numPlayers = numPlayers;
    this.numRanks = numRanks;
    this.numSuits = numSuits;
  }
  shuffle() {
    const shuffled = this.cards;
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
    this.cards = shuffled;
  }

  deal() {
    this.createDeck();
    this.shuffle();
    const dealPile = this.cards;
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
    const { cards } = this;
    console.log(cards, numRanks, numSuits);
    const c = new Card(numRanks, numSuits);
    const card = c.makeCard();
    card.forEach((ele) => {
      cards.push(ele);
    });
    this.cards = cards;
  }
}