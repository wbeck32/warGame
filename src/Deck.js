const ACE = 'A'
const JACK = 'J'
const QUEEN = 'Q'
const KING = 'K'
let ranks = [ACE, 2, 3, 4, 5, 6, 7, 8, 9, 10, JACK, QUEEN, KING];
let suits = ['hearts', 'spades', 'clubs', 'diamonds']

class Card {
  constructor() {
    this.card = [];
  }
  makeCard(rank) {
    let card = this.card;
    suits.reduce((a, v) => {
      return card.push([v, ranks[rank]])
    }, 0)
    return card
  }
}

export default class Deck {
  constructor(numPlayers) {
    this.cards = [];
    this.numPlayers = numPlayers;
  }
  shuffle() {
    let shuffled = this.cards;
    let currentIndex = shuffled.length;
    let temporaryValue, randomIndex;
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
    dealtArray.map((u, idx) => { dealtArray[idx] = [idx]; });
    dealPile.reduce((a, v, i) => {
      let modu = i % numPlayers;
      dealtArray[modu].push(v);
    }, 0);
    return dealtArray;
  }
  createDeck() {
    let cards = this.cards;
    ranks.reduce((a, v, i) => {
      let c = new Card();
      let card = c.makeCard(i);
      card.forEach((ele) => {
        cards.push(ele);
      });
      return cards;
    }, 0);
    this.cards = cards;
  }
};