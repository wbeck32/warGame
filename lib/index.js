"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Deck = _interopRequireDefault(require("./Deck"));

/* eslint-disable no-console, no-unused-vars */
var War =
/*#__PURE__*/
function () {
  function War(numPlayers, numRanks, numSuits) {
    (0, _classCallCheck2.default)(this, War);
    this.numPlayers = numPlayers;
    this.numRanks = numRanks;
    this.numSuits = numSuits;
  }

  (0, _createClass2.default)(War, [{
    key: "play",
    value: function play() {
      var numPlayers = this.numPlayers,
          numRanks = this.numRanks,
          numSuits = this.numSuits;
      var hand = {
        handId: 0,
        winningCard: [{
          rank: 0,
          suit: ''
        }],
        winningPlayer: 0
      };
      var player = {
        playerId: 0,
        cardsWon: []
      };
      var subHand = {
        subHandId: 0,
        winningCard: [{
          rank: 0,
          suit: ''
        }],
        winningPlayer: 0
      };
      var highestNumber = 1;
      var currentPlayers = numPlayers;
      var gameDeck = new _Deck.default(numPlayers, numRanks, numSuits).deal();
      return;
      gameDeck.forEach(function (v, i) {
        var playerId = v.playerId,
            rank = v.rank,
            suit = v.suit;
        var handId = v.handId; // The problem I ran into here was that all the playerIds kept reverting to 0
        // My best conclusion was that it's related to the miscounting of the
        // playerId and handId in the deal() function
        // The importance of grouping the arrays by hands was to iterate through each hand
        // to check to see if there were duplicate rank values in any given hand.
        // I could then build an array of playerIds that were matches and call playSubHand

        function playSubHand(tiedPlayers) {
          tiedPlayers.forEach(function (ele, idx) {// pull the next card from their hands and then go through the comparison process again
          });
        }

        if (rank > highestNumber) {
          highestNumber = rank;
          hand = {
            winningCard: v,
            winningPlayer: playerId,
            handId: handId++
          };
        } else {
          hand = {
            handId: handId++
          };
          highestNumber;
        } // At the end of each hand and subHand, the winning player would have their winning card object stored

      });
    }
  }]);
  return War;
}();

exports.default = War;