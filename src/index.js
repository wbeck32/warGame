import Deck from './Deck'

export default class War {
  constructor(numPlayers) {
    this.numPlayers = numPlayers
  }
  play() {
    let numPlayers = this.numPlayers;
    let gameDeck = []
    new Deck(numPlayers).deal()
      .map((u, idx) => {
        gameDeck[idx] = u
      })
    gameDeck.reduce((a, v, i) => {
      console.log(v, i)
    }, 0)



  }
}
