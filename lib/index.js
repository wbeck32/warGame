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
      var gameDeck = new _Deck.default(numPlayers, numRanks, numSuits).deal();
      gameDeck.reduce(function (a, v, i) {
        var handWinner = {
          handId: 0,
          winningCard: [{
            rank: 0,
            suit: ''
          }],
          winningPlayer: 0
        };
        var gameWinner = {
          playerId: 0,
          cardsWon: []
        };

        function playSubHand() {
          var data = v;
          var matchArr = [];

          var countBy = function countBy(d, id) {
            return d.reduce(function (r, _ref, i, a) {
              var rank = _ref.rank;
              return r[rank] = a.filter(function (x) {
                return x.rank == rank;
              }).length, r;
            }, {});
          };

          var counts = countBy(data, data.rank);
          var obj = Object.entries(counts);
          obj.filter(function (thing) {
            if (thing[1] > 1) {
              v.forEach(function (elem) {
                if (elem.rank == thing[0]) matchArr.push(elem);
              });
            }
          });
          return matchArr;
        }

        var handInPlay = {
          handId: 0,
          players: [],
          cards: [],
          highestNumber: 1,
          highestHand: {},
          isSubHand: false
        }; // TODO why is the match array being created multiple times
        // TODO store all of players winning hands
        // TODO use reduce? to group matches in a given hand

        var match = playSubHand();
        v.forEach(function (hand, idxx) {
          var subHandId = 0;

          if (match && match.length > 0) {
            var _players = [];
            var _cards = [];
            match.forEach(function (elemen, ind) {
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
                subHandId++;
                return handInPlay;
              }
            });
          } else {
            var _players2 = [];
            var _cards2 = [];
            v.forEach(function (item, index) {
              _players2.push(item.playerId);

              _cards2.push({
                rank: item.rank,
                suit: item.suit
              });

              handInPlay = {
                handId: item.handId,
                players: _players2,
                cards: _cards2,
                highestNumber: 1,
                highestHand: {},
                isSubHand: false
              };
              return handInPlay;
            });
          }

          var _handInPlay = handInPlay,
              handId = _handInPlay.handId,
              players = _handInPlay.players,
              cards = _handInPlay.cards,
              isSubHand = _handInPlay.isSubHand;
          var _handInPlay2 = handInPlay,
              highestNumber = _handInPlay2.highestNumber,
              highestHand = _handInPlay2.highestHand;

          if (isSubHand) {
            // TODO figure this out
            var _handId = v[0].handId; // get the cards from these specific users' next hand - handId + 1
          } else {
            cards.filter(function (card, index) {
              var rank = card.rank;

              if (rank > highestNumber) {
                // console.log('rank is higher: ', rank, handId, handInPlay.cards);
                highestHand = handInPlay.cards.find(function (ele) {
                  ele.rank === rank;
                  return ele;
                });
                highestNumber = rank;
              } else if (highestNumber > rank) {
                // console.log('highestNumber is higher: ', highestNumber, handId, handInPlay.cards);
                highestHand = handInPlay.cards.find(function (ele, i) {
                  ele.rank === rank;
                  return ele;
                });
              }

              handWinner = {
                handId: 0,
                winningCard: [{
                  rank: 0,
                  suit: ''
                }],
                winningPlayer: 0
              };
            });
            gameWinner = {
              playerId: 0,
              cards: []
            };
            return gameWinner;
          }
        });
      }, 0);
    }
  }]);
  return War;
}();

exports.default = War;