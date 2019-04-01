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
      gameDeck.reduce(function (a, v, i) {
        var allMatches = [];

        function playSubHand(j) {
          if (gameDeck[j] !== undefined) {
            var lookup = gameDeck[j].reduce(function (a, e) {
              a[e.rank] = e.rank in a ? ++a[e.rank] : 0;
              return a;
            }, {});
            return gameDeck[j].filter(function (e) {
              return lookup[e.rank];
            });
          }
        }

        v.forEach(function (urg, idxx) {
          var playerId = urg.playerId,
              rank = urg.rank,
              suit = urg.suit;
          var handId = urg.handId;
          var tmpArray = [];
          var currHandId = 0;
          var match = playSubHand(idxx);
          if (match) allMatches.push(match); // TODO why is the match array being created multiple times
          // TODO; store all of players winning hands

          function compare(thisHand) {
            // console.log('handId, rank, highestNumber: ', handId, rank, highestNumber);
            if (rank > highestNumber) {
              console.log('rank is higher: ', rank);
              highestHand === hand;
              highestNumber = rank;
            } else if (highestNumber > rank) {
              console.log('highestNumber is higher: ', highestNumber);
              highestHand = hand;
              highestNumber;
            }
          }
        });
      }, 0);
    }
  }]);
  return War;
}();

exports.default = War;