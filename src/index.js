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
    // console.log(99, numPlayers, numRanks, numSuits);
    const myDeck = new Deck(numPlayers, numRanks, numSuits).deal();
    const hands = [];
    const deckIt = myDeck[Symbol.iterator]();
    for (const card of deckIt) {
      const cards = [];
      card.forEach((ele, i) => {
        for (let u = 0;u <= numPlayers;u++) {
          let handNum = 0;
          console.log('ele.userId === u: ', ele.userId === u);
          if (ele.userId === u) cards.push(card[handNum]);
          handNum++;
        }
        return cards;
      });
      console.log('cards: ', cards);
    }
    // console.log('hands : ', hands);
    // myDeck.reduce((a, ele, i) => {
    //   console.log('a, ele, i: ', a, ele, i);
    //   const { rank, userId } = ele;
    //   let handNum = 1;
    //   console.log('rank, userId: ', rank, userId);
    //   const aHand = {
    //     handNum,
    //     userId,
    //     rank
    //   };
    //   hands.push(aHand);
    //   handNum++;
    // }, 0);
    // console.log('hands: ', hands);
    // hands.push(hand);

    // myDeck.forEach((ele, i) => {
    //   // console.log('ele, i: ', ele, i);
    //   let handNum = 0;
    //   const hand = {
    //     handNum: handNum++,
    //     userId: i,
    //     card: ele[handNum]
    //   };
    //   // console.log('hand: ', hand);
    //   handNum++;
    //   hands.push(hand);
    // });
    // console.log('hands: ', hands);

    myDeck.map((user) => {

      let highestNumber = 0;
      let { round } = thisHand;
      console.log(round);
      return user.reduce((a, ele, i) => {
        if (ele[1] > highestNumber) {
          // console.log('ele is higher', ele[1]);
          highestNumber = ele[1];
          thisHand = {
            winningCard: ele, winningPlayer: i, round: round++,
          };
        } else if (ele[1] === highestNumber) {
          // console.log('values are the same', i);
          thisHand = {
            round: round++,
          };
        } else {
          // console.log('hn is higher', highestNumber);
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
