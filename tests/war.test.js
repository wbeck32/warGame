/* eslint-disable no-console,no-undef, no-unused-vars */
const { chai, assert } = require('chai');
import Deck from '../lib/Deck';
import War from '../lib/index';


describe('game test', () => {
  it('should compare card values correctly', () => {
    const testWar = new War(10, 6, 4).play();
    // console.log(testWar)
  });
  it('should create second war when two cards match in a hand', () => {
    // const testWar = new War(3, 1, 1).play();
  });
});
describe('deck test', () => {
  it('should shuffle thoroughly', () => {
    // const testDeck = new Deck(3, 6, 3).deal();
    // console.log('testDeck: ', testDeck);
  });
  it('should not allow too many ranks', () => {

  });
  it('should not allow too many suits', () => {

  });
  it('should deal cards correctly for an odd number of cards', () => {
    // let testDeck = new Deck(2);
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

  });
  it('should', () => {

  });
});
describe('card test', () => {

  it('should', () => {
  });
  it('should', () => {

  });
});