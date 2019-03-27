const chai = require('chai');
const assert = chai.assert;
import War from '../lib/index'
import Deck from '../lib/Deck'


describe('game test', () => {
  it('should compare card values correctly', () => {
    let testWar = new War(3).play()
    // console.log(testWar)
  })
  it('should', () => {

  })
  it('should', () => {

  })
})
describe('deck test', () => {
  it('should shuffle thoroughly', () => {
    let testDeck = new Deck(3).deal()

  })
  it('should deal cards correctly for two players', () => {
    let testDeck = new Deck(2)
    const cards = testDeck.deal()
    assert.equal(cards[0].length, 26)
  })
  it('should deal cards correctly for three players', () => {
    let testDeck = new Deck(3)
    const cards = testDeck.deal()
    assert.equal(cards[0].length, 18)
    assert.equal(cards[1].length, 17)
    assert.equal(cards[2].length, 17)
  })

  it('should', () => {

  })
  it('should', () => {

  })
})
describe('card test', () => {

  it('should', () => {
  })
  it('should', () => {

  })
})