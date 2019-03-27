const chai = require('chai');
const assert = chai.assert;
import War from '../lib/index'
import Deck from '../lib/Deck'


describe('ha', () => {



  describe('game test', () => {
    it('should compare card values correctly', () => {
      let myWar = new War(2)

      const cards = myWar.play()
      assert.ok(cards)
    })
    it('should', () => {

    })
    it('should', () => {

    })
  })
  describe('deck test', () => {
    it('should shuffle thoroughly', () => {
      let myDeck = new Deck(3).deal()

    })
    it('should deal cards evenly', () => {

    })
    it('should', () => {

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
})