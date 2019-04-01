/* eslint-disable no-console, no-unused-vars, no-undefined */
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
    let highestHand = {};
    const currentPlayers = numPlayers;
    const gameDeck = new Deck(numPlayers, numRanks, numSuits).deal();

    gameDeck.reduce((a, v, i) => {
      const allMatches = [];

      function playSubHand(j) {
        if (gameDeck[j] !== undefined) {
          const lookup = gameDeck[j].reduce((a, e) => {
            a[e.rank] = e.rank in a ? ++a[e.rank] : 0;
            return a;
          }, {});
          return gameDeck[j].filter(e => lookup[e.rank]);
        }
      }

      v.forEach((urg, idxx) => {
        const { playerId, rank, suit } = urg;
        const { handId } = urg;
        const tmpArray = [];
        const currHandId = 0;

        const match = playSubHand(idxx);
        if (match) allMatches.push(match);
        // TODO why is the match array being created multiple times
        // TODO; store all of players winning hands

        function compare(thisHand) {
          // console.log('handId, rank, highestNumber: ', handId, rank, highestNumber);
          if (rank > highestNumber) {
            console.log('rank is higher: ', rank);
            highestHand === hand;
            highestNumber = rank;
          } else if (highestNumber > rank) {
            console.log('highestNumber is higher: ', highestNumber);
            highestHand = hand;
            highestNumber;
          }
        }
      });
    }, 0);
  }
}