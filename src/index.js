/* eslint-disable no-unused-vars */
import Deck from './Deck';


export default class War {
  constructor(numPlayers, numRanks, numSuits) {
    this.numPlayers = numPlayers;
    this.numRanks = numRanks;
    this.numSuits = numSuits;
  }

  play() {
    const { numPlayers, numRanks, numSuits } = this;
    const gameDeck = new Deck(numPlayers, numRanks, numSuits).deal();

    gameDeck.reduce((a, v, i) => {
      let handWinner = {
        handId: 0,
        winningCard: [{ rank: 0, suit: '' }],
        winningPlayer: 0,
      };

      let gameWinner = {
        playerId: 0,
        cardsWon: []
      };

      function playSubHand() {
        const data = v;
        let matchArr = [];
        const countBy = (d, id) => d.reduce((r, { rank }, i, a) => (r[rank] = a.filter(x => x.rank == rank).length, r), {});
        const counts = countBy(data, data.rank);
        let obj = Object.entries(counts);
        obj.filter(thing => {
          if (thing[1] > 1) {
            v.forEach(elem => {
              if (elem.rank == thing[0]) matchArr.push(elem);
            });
          }
        });
        return matchArr;
      }

      let handInPlay = {
        handId: 0,
        players: [],
        cards: [],
        highestNumber: 1,
        highestHand: {},
        isSubHand: false
      };

      // TODO why is the match array being created multiple times
      // TODO store all of players winning hands
      // TODO use reduce? to group matches in a given hand

      const match = playSubHand();
      v.forEach((hand, idxx) => {
        let subHandId = 0;

        if (match && match.length > 0) {
          const players = [];
          const cards = [];
          match.forEach((elemen, ind) => {
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
              subHandId++;
              return handInPlay;
            }
          });
        } else {
          const players = [];
          const cards = [];
          v.forEach((item, index) => {
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
        if (isSubHand) {
          // TODO figure this out
          let { handId } = v[0];
          // get the cards from these specific users' next hand - handId + 1
        } else {
          cards.filter((card, index) => {
            const { rank } = card;
            if (rank > highestNumber) {
              highestHand = handInPlay.cards.find(ele => {
                ele.rank === rank;
                return ele;
              });
              highestNumber = rank;
            } else if (highestNumber > rank) {
              highestHand = handInPlay.cards.find((ele, i) => {
                ele.rank === rank;
                return ele;
              });
            }
            handWinner = {
              handId: 0,
              winningCard: [{ rank: 0, suit: '' }],
              winningPlayer: 0
            };
          });
          gameWinner = {
            playerId: 0,
            cards: []
          };
          return gameWinner;
        }
      });
    }, 0);
  }
}