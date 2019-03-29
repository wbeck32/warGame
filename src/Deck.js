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
    // The goal of this function was to build an array of hands.
    // Each array would be constructed from random numbers
    // and be structured like this:
    // const handArray = [
    //   [
    //     { handId: 0, player: 0, rank: 8, suit: 'diamonds' },
    //     { handId: 0, player: 1, rank: 6, suit: 'spades' },
    //     { handId: 0, player: 2, rank: 4, suit: 'hearts' },
    //   ],
    //   [
    //     { handId: 1, player: 0, rank: 1, suit: 'diamonds' },
    //     { handId: 1, player: 1, rank: 9, suit: 'hearts' },
    //     { handId: 1, player: 2, rank: 7, suit: 'hearts' },
    //   ],
    //   [
    //     { handId: 2, player: 0, rank: 8, suit: 'hearts' },
    //     { handId: 2, player: 1, rank: 6, suit: 'spades' },
    //     { handId: 2, player: 2, rank: 4, suit: 'hearts' },
    //   ],
    // ];

    // After the array was built, each object in each hand would
    // instantiate a Card object like so:

    // const dealtCard = {
    //   card: v,
    //   handId,
    //   playerId
    // };

    // dealtArray.push(new Card(dealtCard).makeCard())

    // I think the problem was with how I was setting the
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