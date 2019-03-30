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
    const hand = {
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
    const highestHand = {};
    const currentPlayers = numPlayers;
    const gameDeck = new Deck(numPlayers, numRanks, numSuits).deal();
    gameDeck.reduce((a, v, i) => {
      // check for dupes here
      // set creates an array of only the unique values
      // need to create an array of all v that are duplicated
      const uniqueAddresses = Array.from(new Set(v.map(a => a.rank)));
      console.log('uniqueAddresses: ', uniqueAddresses);

      function playSubHand(tiedPlayers) {
        tiedPlayers.forEach((ele, idx) => {
          // pull the next card from their hands and then go through the comparison process again
        });
      }
      v.forEach((hand, idx) => {
        const { playerId, rank, suit } = hand;
        let { handId } = hand;

        // TODO; store all of players winning hands
        if (rank > highestNumber) {
          // console.log('rank is higher: ', rank);
          highestNumber = rank;
          hand = {
            winningCard: v, winningPlayer: playerId, handId: handId++
          };
        } else {
          // console.log('highestNumber is higher: ', highestNumber);
          hand = {
            handId: handId++,
          };
          highestNumber;
        }
      });
    }, 0);
  }
}