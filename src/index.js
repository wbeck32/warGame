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
        const { playerId, suit } = urg;
        let { handId, rank } = urg;
        const tmpArray = [];
        const subHandId = 0;
        const subHandRank = 0;

        // TODO why is the match array being created multiple times
        // TODO store all of players winning hands
        // TODO use reduce? to group matches in a given hand

        const match = playSubHand(idxx);
        if (match && match.length > 0 && match[0].handId) {
          console.log('a match is a match', match[0].handId, match[0].playerId, match[0].rank);
          const matchArray = [];
          match.forEach((elemen) => {
            if (match[0].rank === elemen.rank && match[0].handId === elemen.handId) {
              matchArray.push(elemen);
            }
          });
          console.log("======matchArray======");
          console.log(matchArray);
          console.log("======matchArray======");

          handId = subHandId;
          rank = subHandRank;
        }
        // console.log('handId: ', handId, 'playerId: ', playerId, 'rank:', rank, 'hN: ', highestNumber);
        if (rank > highestNumber) {
          // console.log('rank is higher: ', rank);
          highestHand === hand;
          highestNumber = rank;
        } else if (highestNumber > rank) {
          // console.log('highestNumber is higher: ', highestNumber);
          highestHand = hand;
          // highestNumber;
        }
      });
    }, 0);
  }
}