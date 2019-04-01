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
      var handInPlay = {
        handId: 0,
        players: [],
        cards: [],
        isSubHand: false
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

        v.forEach(function (hand, idxx) {
          var subHandId = 0;
          var subHandRank = 0; // TODO why is the match array being created multiple times
          // TODO store all of players winning hands
          // TODO use reduce? to group matches in a given hand

          var match = playSubHand(idxx);

          if (match && match.length > 0 && match[0].handId) {
            // console.log('a match is a match', match[0].handId, match[0].playerId, match[0].rank);
            var _players = [];
            var _cards = [];
            match.forEach(function (elemen) {
              if (match[0].rank === elemen.rank && match[0].handId === elemen.handId) {
                _players.push(elemen.playerId);

                _cards.push({
                  rank: elemen.rank,
                  suit: elemen.suit
                });

                handInPlay = {
                  handId: subHandId,
                  players: _players,
                  cards: _cards,
                  highestNumber: 1,
                  highestHand: {},
                  isSubHand: true
                };
                return handInPlay;
              }
            });
          } else {
            var _handId = hand.handId;
            var _players2 = [];
            var _cards2 = [];

            _players2.push(hand.playerId);

            _cards2.push({
              rank: hand.rank,
              suit: hand.suit
            });

            handInPlay = {
              handId: _handId,
              players: _players2,
              cards: _cards2,
              highestNumber: highestNumber,
              highestHand: highestHand,
              isSubHand: false
            };
            return handInPlay;
          } // console.log("======handInPlay======");
          // console.log(handInPlay);
          // console.log("======handInPlay======");


          var _handInPlay = handInPlay,
              handId = _handInPlay.handId,
              players = _handInPlay.players,
              cards = _handInPlay.cards,
              isSubHand = _handInPlay.isSubHand;
          var _handInPlay2 = handInPlay,
              highestNumber = _handInPlay2.highestNumber,
              highestHand = _handInPlay2.highestHand;
          cards.forEach(function (card, kijihih) {
            console.log('card: ', card, highestNumber, highestHand);
            var rank = card.rank;

            if (rank > highestNumber) {
              // console.log('rank is higher: ', rank, handId, isSubHand);
              highestHand === hand;
              highestNumber = rank;
            } else if (highestNumber > rank) {
              // console.log('highestNumber is higher: ', highestNumber, handId, isSubHand);
              highestHand = hand; //   // highestNumber;
              // }
            }
          }); // console.log('handId: ', handId, 'playerId: ', playerId, 'rank:', rank, 'hN: ', highestNumber);
        }, 0);
      });
    }
  }]);
  return War;
}();

exports.default = War;