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
    let thisHand = {
      winningCard: [],
      winningPlayer: 0,
      round: 1,
    };

    return new Deck(numPlayers, numRanks, numSuits).deal()
      .map((u) => {
        let highestNumber = 0;
        let { round } = thisHand;
        console.log(thisHand.round);
        return u.reduce((a, ele, i) => {
          if (ele[1] > highestNumber) {
            console.log('ele is higher', ele[1]);
            highestNumber = ele[1];
            thisHand = {
              winningCard: ele, winningPlayer: i, round: round++,
            };
          } else if (ele[1] === highestNumber) {
            console.log('values are the same', i);
            thisHand = {
              round: round++,
            };
          } else {
            console.log('hn is higher', highestNumber);
            thisHand = {
              round: round++,
            };
            highestNumber;
          }

          return thisHand;
          // console.log(thisHand);
        }, 0);
      });
  }
}
