import Deck from './Deck'

export default class War {
  constructor(numPlayers) {
    this.numPlayers = numPlayers
  }
  play() {
    let numPlayers = this.numPlayers;
    let gameDeck = new Deck(numPlayers).deal()
    // console.log(22, gameDeck)

  }
}
