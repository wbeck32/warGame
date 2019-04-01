/* eslint-disable no-console,no-undef, no-unused-vars */
const { chai, assert } = require('chai');
import Deck from '../lib/Deck';
import War from '../lib/index';


// players,ranks,suits
describe('game test', () => {
  it('should compare card values correctly', () => {
    const testWar = new War(4, 4, 3).play();
  });
  it('should create second war when two cards match in a hand', () => {
    // TODO
  });
});
describe('deck test', () => {
  it('should shuffle thoroughly', () => {
    // const testDeck = new Deck(3, 6, 3).deal();
    // console.log('testDeck: ', testDeck);
  });
  it('should not allow too many ranks', () => {
    const testWar = new War(4, 15, 3).play();
  });
  it('should not allow too many suits', () => {
    const testWar = new War(4, 13, 5).play();

  });
  it('should deal cards correctly for an odd number of cards', () => {
    let testDeck = new Deck(5, 13, 3).deal();
    // const cards = testDeck.deal();
    // assert.equal(cards[0].length, 26);
  });
  it('should deal cards correctly for three players', () => {
    // let testDeck = new Deck(3);
    // const cards = testDeck.deal();
    // assert.equal(cards[0].length, 18);
    // assert.equal(cards[1].length, 17);
    // assert.equal(cards[2].length, 17);
  });

  it('should not create any duplicate cards', () => {
    // use array.every indexOf ?

  });
  it('should create enough cards to deal evenly', () => {

  });
  it('should not create more than 52 cards', () => {
    const testDeck = new Deck(5, 15, 5).deal();

  });
});
