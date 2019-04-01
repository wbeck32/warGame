"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Deck = _interopRequireDefault(require("./Deck"));

/* eslint-disable no-console, no-unused-vars, no-undefined */
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
      var highestHand = {};
      var currentPlayers = numPlayers;
      var gameDeck = new _Deck.default(numPlayers, numRanks, numSuits).deal();
      console.log('gameDeck: ', gameDeck);
      gameDeck.reduce(function (a, v, i) {
        v.forEach(function (w, j) {
          var playerId = hand.playerId,
              rank = hand.rank,
              suit = hand.suit;
          var handId = hand.handId;
          playSubHand(handId);

          function playSubHand(handId) {
            var compareArray = new Array();

            for (var h = 0; h <= numRanks; h++) {
              compareArray[h] = new Array();
            }

            var filter = v.filter(function (mele, idx) {
              // console.log('mele, idx: ', mele.handId, idx);
              compareArray[idx][mele.handId] = mele;
            });
          }

          var tmpArray = [];
          var currHandId = 0;
          compare(v); // TODO; store all of players winning hands

          function compare(v) {
            // console.log('handId, rank, highestNumber: ', handId, rank, highestNumber);
            if (rank > highestNumber) {
              // console.log('rank is higher: ', rank);
              highestHand === hand;
              highestNumber = rank;
            } else if (highestNumber > rank) {
              // console.log('highestNumber is higher: ', highestNumber);
              highestHand = hand;
              highestNumber;
            } else {
              // this is not comparing the right values
              // console.log('they seem to be equal');
              // console.log('hand.rank: ', hand.rank);
              var match = v.filter(function (item) {
                // console.log('handId: ', item.handId, hand.handId);
                // console.log('rank: ', item.rank, hand.rank);
                item.handId === hand.handId && item.rank === hand.rank;
              }); // console.log('match: ', match);

              tmpArray.push(v); // console.log('tmpArray: ', tmpArray);
            }
          }
        });
      }, 0);
    }
  }]);
  return War;
}();

exports.default = War;