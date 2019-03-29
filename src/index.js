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
    return;
    gameDeck.forEach((v, i) => {
      // console.log('====v====');
      // console.log('v: ', v);
      const { playerId, rank, suit } = v;
      let { handId } = v;

      if (v.playerId == 0) {
        const hAZ = [v];
        console.log('====hAZ====');
        console.log('hAZ: ', hAZ);
      }
      if (v.playerId == 1) {
        const hAO = [v];
        console.log('====hAO====');
        console.log('hAO: ', hAO);
      }
      if (v.playerId == 2) {
        const hAT = [v];
        console.log('====hAT====');
        console.log('hAT: ', hAT);
      }

      // console.log('playerId, rank, suit, handId: ', playerId, rank, suit, handId);
      function playSubHand(v) {
        console.log(333333333333333);
        v.forEach((value, i) => {
          // console.log('value,i: ', value, i);

        });
      }
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