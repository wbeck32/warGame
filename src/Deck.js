/* eslint-disable no-console */

class Card {
  constructor(ranksArray, suitsArray) {
    this.card = [];
    this.ranks = ranksArray;
    this.suits = suitsArray;
  }
  makeCard() {
    let card = this.card;
    let ranks = this.ranksArray.length;
    let suits = this.suitsArray.length;
    suits.reduce((a, v, i) => {
      console.log(a, v, i);
      return card.push([ranks, suits]);
    }, 0);
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
    let shuffled = this.cards;
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
    const numPlayers = this.numPlayers;
    let dealtArray = [...Array(numPlayers)];
    dealtArray.map((u, idx) => { dealtArray[idx] = []; });
    dealPile.reduce((a, v, i) => {
      let modu = i % numPlayers;
      dealtArray[modu].push(v);
    }, 0);
    return dealtArray;
  }
  createDeck(numRanks, numSuits) {
    let cards = this.cards;
    const ranksArray = [...Array(numRanks).keys()];
    const suitsArray = [...Array(numSuits).keys()];
    ranksArray.reduce((a, v, i) => {
      let c = new Card(ranksArray, suitsArray);
      let card = c.makeCard(i);
      card.forEach((ele) => {
        cards.push(ele);
      });
      return cards;
    }, 0);
    this.cards = cards;
  }
}