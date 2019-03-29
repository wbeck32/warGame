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
      const { playerId, rank, suit } = v;
      let { handId } = v;
      // The problem I ran into here was that all the playerIds kept reverting to 0
      // My best conclusion was that it's related to the miscounting of the
      // playerId and handId in the deal() function

      // The importance of grouping the arrays by hands was to iterate through each hand
      // to check to see if there were duplicate rank values in any given hand.
      // I could then build an array of playerIds that were matches and call playSubHand

      function playSubHand(tiedPlayers) {
        tiedPlayers.forEach((ele, idx) => {
          // pull the next card from their hands and then go through the comparison process again
        });
      }

      if (rank > highestNumber) {
        highestNumber = rank;
        hand = {
          winningCard: v, winningPlayer: playerId, handId: handId++
        };
      } else {
        hand = {
          handId: handId++,
        };
        highestNumber;
      }
      // At the end of each hand and subHand, the winning player would have their winning card object stored

    });
  }
}