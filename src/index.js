import Deck from './Deck'

export default class War {
  constructor(numPlayers) {
    this.numPlayers = numPlayers
  }
  play() {
    let numPlayers = this.numPlayers;
    let gameDeck = []
    let hand = [
      [
        ['hearts', 11],
        ['spades', 6],
        ['diamonds', 2],
        ['hearts', 5],
        ['diamonds', 9],
      ],
      [
        ['diamonds', 4],
        ['diamonds', 5],
        ['clubs', 3],
        ['hearts', 2],
        ['diamonds', 6],
      ],
      [
        ['spades', 7],
        ['hearts', 8],
        ['hearts', 9],
        ['hearts', 10],
        ['clubs', 8],
      ]
    ]
    let thisHand = {
      winningCard: [],
    }
    // return new Deck(numPlayers).deal()
    return hand.map((u) => {
      let highestNumber = 0
      return u.reduce((a, ele) => {
        if (ele[1] > highestNumber) {
          // console.log('ele is higher', ele[1])
          highestNumber = ele[1]
          thisHand.winningCard = ele
        } else {
          // console.log('hn is higher', highestNumber)
          highestNumber
        }
        // return thisHand;
        // return ele[1] > highestNumber ? highestNumber = ele[1] : highestNumber
        console.log(thisHand)
      }, 0)
    })
  }
}
