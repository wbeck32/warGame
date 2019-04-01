/* eslint-disable no-console,no-undef, no-unused-vars */
const { chai, assert, expect } = require('chai');
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
  it('should not allow too many ranks', () => {
    const testDeck = new Deck(4, 15, 3).deal();
    expect(testDeck).to.have.length(15);
    expect(testDeck[0]).to.be.empty;
  });
  it('should not allow too many suits', () => {
    const testDeck = new Deck(4, 13, 5).deal();
    expect(testDeck).to.have.length(13);
    expect(testDeck[0]).to.be.empty;
  });
  it('should deal cards correctly for an odd number of cards', () => {
    let testDeck = new Deck(5, 13, 3).deal();
    // console.log('testDeck: ', testDeck);
    // const cards = testDeck.deal();
    // assert.equal(cards[0].length, 26);
  });
  it('should deal cards correctly for three players', () => {
    let testDeck = new Deck(3, 6, 4).deal();
    console.log('testDeck: ', testDeck);

    // assert.equal(cards[0].length, 18);
    // assert.equal(cards[1].length, 17);
    // assert.equal(cards[2].length, 17);
  });

  it('should not create any duplicate cards', () => {
    // let testDeck = new Deck(2, 10, 4).deal();
    // TODO still not dealing correctly
    // use array.every indexOf ?

  });
  it('should create enough cards to deal evenly', () => {

  });
  it('should not create more than 52 cards', () => {
    const testDeck = new Deck(5, 15, 5).deal();
    expect(testDeck).to.have.length(15);
    expect(testDeck[0]).to.be.empty;
  });
});
