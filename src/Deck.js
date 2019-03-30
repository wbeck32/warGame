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

    let handId = 0;
    let playerId = 0;
    const handArray = [];

    let numHands = numRanks;
    let numPersons = numPlayers + 1;

    function* handIds() {
      if (numHands > 0) {
        numHands--;
        yield handId;
      } else {
        handId++;
        numHands = numRanks - 1;
        yield handId;
      }
    }

    function* playerIds() {
      if (playerId <= numPersons) {
        numPersons--;
        yield playerId++;
      } else {
        numPersons = numPlayers + 1;
        playerId = 0;
        yield playerId++;
      }
    }


    dealStack.forEach((card) => {
      const hand = {
        handId: handIds().next().value,
        playerId: playerIds().next().value,
        card,
      };
      handArray.push(hand);
    });
    // console.log('handArray: ', handArray);


    // const hId = handIds();
    // // console.log(hId.next().value);
    // for (const prop in dealStack) {
    //   // console.log(`dealStack.${prop} = ${dealStack[prop]}`);

    // }
    // // console.log(dealStack, typeof dealStack);
    // const dealtArray = [];
    // const handArray = Array.from({ length: numRanks }, (x, i) => []);

    // handArray.forEach((hand, i) => {
    //   // console.log(8989898, hId.next().value);
    //   // const hi = hId.next().value;
    //   // console.log('hi: ', hi);
    //   // handArray[i].push(card = {
    //   //   handId,
    //   //   playerId: 0
    //   // });
    //   dealStack.forEach((card, idx) => {
    //     const hi = hId.next().value;
    //     console.log('hi: ', hi);

    //     // console.log(hId.next().value);
    //   });
    // });
    // dealtArray.forEach((ele) => {
    //   let handId = 0;
    //   do {
    //     ele.handId = handId + 1;
    //     handId = handId + 1;
    //   } while (handId < numRanks);
    // });
    // dealtArray.forEach((ele) => {
    //   let playerId = 0;
    //   do {
    //     ele.playerId = playerId + 1;
    //     playerId = playerId + 1;
    //   } while (playerId <= numPlayers);
    // });
    // return dealtArray;
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