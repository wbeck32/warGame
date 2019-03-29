"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Deck = _interopRequireDefault(require("./Deck"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var War =
/*#__PURE__*/
function () {
  function War(numPlayers, numRanks, numSuits) {
    _classCallCheck(this, War);

    this.numPlayers = numPlayers;
    this.numRanks = numRanks;
    this.numSuits = numSuits;
  }

  _createClass(War, [{
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
      var tmpArray = [];
      gameDeck.reduce(function (a, v, i) {
        console.log(' v, i: ', v, i);
        var tempId = v.handId;
        var tmpArray = Array.from({
          length: numRanks
        }, function (x, i) {
          return [];
        });
        tmpArray.forEach(function (ele, i) {
          if (v && v.handId === tempId) tmpArray[tempId].push(v);
        });
        console.log(tmpArray);
        var playerId = v.playerId,
            rank = v.rank,
            suit = v.suit;
        var handId = v.handId; // console.log('playerId, rank, suit, handId: ', playerId, rank, suit, handId);

        function playSubHand(v) {
          console.log(333333333333333);
          v.forEach(function (value, i) {// console.log('value,i: ', value, i);
          });
        } // if ()
        // console.log('highestNumber, rank: ', highestNumber, rank, rank === highestNumber);


        if (rank > highestNumber) {
          // console.log('rank is higher', rank);
          highestNumber = rank;
          hand = {
            winningCard: v,
            winningPlayer: playerId,
            handId: handId++
          };
        } else if (handId === handId && rank === rank) {// console.log('handId && rank: ', v, i);
          // playSubHand(v);
        } else {
          // console.log('hn is higher', highestNumber);
          hand = {
            handId: handId++
          };
          highestNumber;
        }

        return hand; // console.log(hand);
      }, 0);
    }
  }]);

  return War;
}();

exports.default = War;