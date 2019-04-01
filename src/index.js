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
    const players = {
      player: {
        playerId: 0,
        cardsWon: []
      }
    };
    const highestNumber = 1;
    const highestHand = {};
    const currentPlayers = numPlayers;
    const gameDeck = new Deck(numPlayers, numRanks, numSuits).deal();

    gameDeck.reduce((a, v, i) => {
      // console.log('a, v, i: ', a, v, i);


      function playSubHand() {
        const data = v;

        const countBy = (d, id) => d.reduce((r, { rank }, i, a) => (r[rank] = a.filter(x => x.rank == rank).length, r), {});
        const counts = countBy(data, data.rank);
        console.log('counts: ', counts);
        console.log(Object.entries(counts));
        let filtered = data.filter(x => {
          console.log('x: ', x.rank, x);
          [x.rank] === data.rank;
        });
        console.log('filtered: ', filtered);
      }

      let handInPlay = {
        handId: 0,
        players: [],
        cards: [],
        highestNumber: 1,
        highestHand: {},
        isSubHand: false
      };
      const match = playSubHand();
      console.log('match: ', match);
      v.forEach((hand, idxx) => {
        // console.log('hand, idxx: ', hand, idxx);
        const subHandId = 0;
        const subHandRank = 0;
        // TODO why is the match array being created multiple times
        // TODO store all of players winning hands
        // TODO use reduce? to group matches in a given hand

        if (match && match.length > 0 && match[0].handId) {
          // console.log('a match is a match', match, match[0].handId, match[0].playerId, match[0].rank);
          const players = [];
          const cards = [];



          match.forEach((elemen, ind) => {
            // console.log('elemen,ind: ', elemen);
            // console.log('match[0].handId === elemen.handId: ', match[0].handId, elemen.handId);
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
            }
            return handInPlay;
          });
        } else {
          const players = [];
          const cards = [];
          v.filter((item) => {
            // console.log('it is not a match: ', item.handId, item.playerId, item.rank);
            players.push(item.playerId);
            cards.push({ rank: item.rank, suit: item.suit });
            // handInPlay = {
            // handId: item.handId,
            // players,
            // cards,
            // highestNumber: 1,
            // highestHand: {},
            // isSubHand: false
            // };
            // return handInPlay;
          });
        }

        const { handId, players, cards, isSubHand } = handInPlay;
        let { highestNumber, highestHand } = handInPlay;
        if (isSubHand === true) {
          // console.log('handInPlay: ', handInPlay);


        }
        cards.filter((card, index) => {
          // console.log('card: ', card);
          const { rank } = card;
          if (rank > highestNumber) {
            // console.log('rank is higher: ', rank, handId, handInPlay.cards);
            highestHand = handInPlay.cards.find(ele => {
              ele.rank === rank;
              return ele;
            });
            highestNumber = rank;
          } else if (highestNumber > rank) {
            // console.log('highestNumber is higher: ', highestNumber, handId, handInPlay.cards);
            highestHand = handInPlay.cards.find((ele, i) => {
              ele.rank === rank;
              return ele;
            });
            // console.log('highestHand: ', highestHand);
            // console.log(handInPlay.cards.indexOf(highestHand));
          }
        });
        // console.log('highestNumber, highestHand: ', highestNumber, highestHand);

        // console.log('handId: ', handId, 'playerId: ', playerId, 'rank:', rank, 'hN: ', highestNumber);
      }, 0);
    }, 0);
  }
}