/* eslint-disable no-console, no-unused-vars */
import Deck from './Deck';

export default class War {
  constructor(numPlayers, numRanks, numSuits) {
    this.numPlayers = numPlayers;
    this.numRanks = numRanks;
    this.numSuits = numSuits;
  }

  play() {
    const { numPlayers, numRanks, numSuits } = this;
    let hand = {
      handId: 0,
      winningCard: [{ rank: 0, suit: '' }],
      winningPlayer: 0,
    };
    const player = {
      playerId: 0,
      cardsWon: []
    };
    const subHand = {
      subHandId: 0,
      winningCard: [{ rank: 0, suit: '' }],
      winningPlayer: 0,
    };
    let highestNumber = 1;
    const currentPlayers = numPlayers;
    const gameDeck = new Deck(numPlayers, numRanks, numSuits).deal();
    const tmpArray = [];
    gameDeck.reduce((a, v, i) => {
      console.log(' v, i: ', v, i);
      const tempId = v.handId;
      const tmpArray = Array.from({ length: numRanks }, (x, i) => []);
      tmpArray.forEach((ele, i) => {
        if (v && v.handId === tempId) tmpArray[tempId].push(v);

      });
      console.log(tmpArray);
      const { playerId, rank, suit } = v;
      let { handId } = v;

      // console.log('playerId, rank, suit, handId: ', playerId, rank, suit, handId);

      function playSubHand(v) {
        console.log(333333333333333);
        v.forEach((value, i) => {
          // console.log('value,i: ', value, i);

        });
      }
      // if ()
      // console.log('highestNumber, rank: ', highestNumber, rank, rank === highestNumber);
      if (rank > highestNumber) {
        // console.log('rank is higher', rank);
        highestNumber = rank;
        hand = {
          winningCard: v, winningPlayer: playerId, handId: handId++
        };
      } else if (handId === handId && rank === rank) {
        // console.log('handId && rank: ', v, i);
        // playSubHand(v);
      } else {
        // console.log('hn is higher', highestNumber);
        hand = {
          handId: handId++,
        };
        highestNumber;
      }

      return hand;
      // console.log(hand);

    }, 0);
  }
}