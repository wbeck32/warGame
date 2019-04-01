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
              console.log('it is a match: ', elemen.handId, elemen.playerId, elemen.rank);
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
            }
            return handInPlay;
          });
        } else {
          const players = [];
          const cards = [];
          v.filter((item) => {
            console.log('it is not a match: ', item.handId, item.playerId, item.rank);
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

        const { handId, players, cards, isSubHand } = handInPlay;
        let { highestNumber, highestHand } = handInPlay;

        cards.filter((card, index) => {
          // console.log('players: ', players);
          // console.log('cards: ', cards);
          // console.log('card, index: ', card, index);

          const { rank } = card;
          if (rank > highestNumber) {
            console.log('rank is higher: ', rank, handId);
            console.log('handInPlay: ', handInPlay.cards);
            highestHand = card;
            highestNumber = rank;
          } else if (highestNumber > rank) {
            console.log('highestNumber is higher: ', highestNumber, handId);
            highestHand = card[rank] === rank;
            // }
          }
        });
        // console.log('highestNumber, highestHand: ', highestNumber, highestHand);

        // console.log('handId: ', handId, 'playerId: ', playerId, 'rank:', rank, 'hN: ', highestNumber);
      }, 0);
    }, 0);
  }
}