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
    const highestNumber = 1;
    const highestHand = {};
    const currentPlayers = numPlayers;
    const gameDeck = new Deck(numPlayers, numRanks, numSuits).deal();

    gameDeck.reduce((a, v, i) => {

      function playSubHand(j) {
        if (gameDeck[j] !== undefined) {
          const lookup = gameDeck[j].reduce((a, e) => {
            a[e.rank] = e.rank in a ? ++a[e.rank] : 0;
            return a;
          }, {});
          return gameDeck[j].filter(e => lookup[e.rank]);
        }
      }

      let handInPlay = {
        handId: 0,
        players: [],
        cards: [],
        highestNumber: 1,
        highestHand: {},
        isSubHand: false
      };
      v.forEach((hand, idxx) => {
        const subHandId = 0;
        const subHandRank = 0;
        // TODO why is the match array being created multiple times
        // TODO store all of players winning hands
        // TODO use reduce? to group matches in a given hand

        const match = playSubHand(idxx);
        if (match && match.length > 0 && match[0].handId) {
          // console.log('a match is a match', match[0].handId, match[0].playerId, match[0].rank);
          const players = [];
          const cards = [];
          match.forEach((elemen) => {
            if (match[0].rank === elemen.rank && match[0].handId === elemen.handId) {
              players.push(elemen.playerId);
              cards.push({ rank: elemen.rank, suit: elemen.suit });
              handInPlay = {
                handId: subHandId,
                players,
                cards,
                highestNumber: 1,
                highestHand: {},
                isSubHand: true
              };
              return handInPlay;
            }
          });
        } else {
          const players = [];
          const cards = [];
          v.filter((item) => {
            players.push(item.playerId);
            cards.push({ rank: item.rank, suit: item.suit });
            handInPlay = {
              handId: item.handId,
              players,
              cards,
              highestNumber: 1,
              highestHand: {},
              isSubHand: false
            };
            return handInPlay;
          });
        }
        console.log("======handInPlay======");
        console.log(handInPlay);
        console.log("======handInPlay======");
        const { handId, players, cards, isSubHand } = handInPlay;
        // console.log('players, cards: ', players, cards, isSubHand);
        let { highestNumber, highestHand } = handInPlay;

        cards.forEach((card, kijihih) => {
          // console.log('card: ', card, highestNumber, highestHand);
          const { rank } = card;
          if (rank > highestNumber) {
            // console.log('rank is higher: ', rank, handId, isSubHand);
            highestHand === hand;
            highestNumber = rank;
          } else if (highestNumber > rank) {
            // console.log('highestNumber is higher: ', highestNumber, handId, isSubHand);
            highestHand = hand;
            //   // highestNumber;
            // }
          }
        });
        // console.log('handId: ', handId, 'playerId: ', playerId, 'rank:', rank, 'hN: ', highestNumber);
      }, 0);
    }, 0);
  }
}