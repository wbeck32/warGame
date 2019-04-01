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
      var players = {
        player: {
          playerId: 0,
          cardsWon: []
        }
      };
      var highestNumber = 1;
      var highestHand = {};
      var currentPlayers = numPlayers;
      var gameDeck = new _Deck.default(numPlayers, numRanks, numSuits).deal();
      gameDeck.reduce(function (a, v, i) {
        // console.log('a, v, i: ', a, v, i);
        function playSubHand() {
          var data = v;
          var tmpArr = [];

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
          var filtered = obj.filter(function (thing) {
            if (thing[1] > 1) {
              v.forEach(function (elem) {
                if (elem.rank == thing[0]) tmpArr.push(elem);
              });
            }
          });
          return tmpArr;
        }

        var handInPlay = {
          handId: 0,
          players: [],
          cards: [],
          highestNumber: 1,
          highestHand: {},
          isSubHand: false
        };
        var match = playSubHand();
        console.log('match222: ', match);
        v.forEach(function (hand, idxx) {
          var subHandId = 0;
          var subHandRank = 0; // TODO why is the match array being created multiple times
          // TODO store all of players winning hands
          // TODO use reduce? to group matches in a given hand

          if (match && match.length > 0 && match[0].handId) {
            console.log('match: ', match); // console.log('a match is a match', match, match[0].handId, match[0].playerId, match[0].rank);

            var _players = [];
            var _cards = [];
            match.forEach(function (elemen, ind) {
              // console.log('elemen,ind: ', elemen);
              // console.log('match[0].handId === elemen.handId: ', match[0].handId, elemen.handId);
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
              }

              return handInPlay;
            });
          } else {
            var _players2 = [];
            var _cards2 = [];
            v.filter(function (item) {
              // console.log('it is not a match: ', item.handId, item.playerId, item.rank);
              _players2.push(item.playerId);

              _cards2.push({
                rank: item.rank,
                suit: item.suit
              }); // handInPlay = {
              // handId: item.handId,
              // players,
              // cards,
              // highestNumber: 1,
              // highestHand: {},
              // isSubHand: false
              // };
              // return handInPlay;

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

          if (isSubHand === true) {// console.log('handInPlay: ', handInPlay);
          }

          cards.filter(function (card, index) {
            // console.log('card: ', card);
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
              }); // console.log('highestHand: ', highestHand);
              // console.log(handInPlay.cards.indexOf(highestHand));
            }
          }); // console.log('highestNumber, highestHand: ', highestNumber, highestHand);
          // console.log('handId: ', handId, 'playerId: ', playerId, 'rank:', rank, 'hN: ', highestNumber);
        }, 0);
      }, 0);
    }
  }]);
  return War;
}();

exports.default = War;