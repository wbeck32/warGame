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
    console.log('gameDeck: ', gameDeck);

    gameDeck.reduce((a, v, i) => {
      v.forEach((w, j) => {
        const { playerId, rank, suit } = hand;
        const { handId } = hand;

        playSubHand(handId);

        function playSubHand(handId) {
          const compareArray = new Array();
          for (let h = 0;h <= numRanks;h++) {
            compareArray[h] = new Array();
          }
          const filter = v.filter((mele, idx) => {
            // console.log('mele, idx: ', mele.handId, idx);
            compareArray[idx][mele.handId] = mele;

          });
        }
        const tmpArray = [];
        const currHandId = 0;
        compare(v);

        // TODO; store all of players winning hands
        function compare(v) {
          // console.log('handId, rank, highestNumber: ', handId, rank, highestNumber);
          if (rank > highestNumber) {
            // console.log('rank is higher: ', rank);
            highestHand === hand;
            highestNumber = rank;
          } else if (highestNumber > rank) {
            // console.log('highestNumber is higher: ', highestNumber);
            highestHand = hand;
            highestNumber;
          } else {
            // this is not comparing the right values
            // console.log('they seem to be equal');
            // console.log('hand.rank: ', hand.rank);
            const match = v.filter(item => {
              // console.log('handId: ', item.handId, hand.handId);
              // console.log('rank: ', item.rank, hand.rank);
              item.handId === hand.handId && item.rank === hand.rank;
            });
            // console.log('match: ', match);
            tmpArray.push(v);
            // console.log('tmpArray: ', tmpArray);
          }
        }
      });
    }, 0);
  }
}