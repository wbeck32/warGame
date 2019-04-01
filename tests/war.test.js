/* eslint-disable no-undef, no-unused-vars */
const { chai, assert, expect } = require('chai');
import Deck from '../lib/Deck';
import War from '../lib/index';


describe('game test', () => {
  it('should compare card values correctly', () => {
    const testWar = new War(4, 4, 3).play();
    // assert winning hand and game winner are correct based on seed data
  });
  it('should create second war when two cards match in a hand', () => {
    // TODO
  });
});
describe('deck test', () => {
  it('should not allow too many ranks', () => {
    const testDeck = new Deck(4, 15, 3).deal();
    expect(testDeck).to.have.length(15);
    assert.isEmpty(testDeck[0]);
    expect(testDeck[12]).to.be.empty;
  });
  it('should not allow too many suits', () => {
    const testDeck = new Deck(4, 13, 5).deal();
    expect(testDeck).to.have.length(13);
    expect(testDeck[0]).to.be.empty;
  });
  it('should deal cards correctly for an odd number of cards', () => {
    let testDeck = new Deck(5, 13, 3).deal();
    // assert that all players have no more or less
    // than one card than each other
  });
  it('should deal cards correctly for three players', () => {
    // let testDeck = new Deck(3, 6, 4).deal();
    // assert that all players have no more or less
    // than one card than each other
  });

  it('should not create any duplicate cards', () => {
    // let testDeck = new Deck(2, 10, 4).deal();
    // testDeck.forEach(card => {
    //   let firstIndex = testDeck.indexOf(card);
    //   let lastIndex = testDeck.lastIndexOf(card);
    //   assert.equal(firstIndex, lastIndex);
    // });
  });
  it('should create enough cards to deal evenly', () => {

  });
  it('should not create more than 52 cards', () => {
    const testDeck = new Deck(5, 15, 5).deal();
    expect(testDeck).to.have.length(15);
    expect(testDeck[0]).to.be.empty;
  });
});
