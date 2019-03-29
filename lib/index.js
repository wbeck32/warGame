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
      var thisHand = {
        winningCard: [],
        winningPlayer: 0,
        round: 1
      };
      console.log(99, numPlayers, numRanks, numSuits);
      return new _Deck.default(numPlayers, numRanks, numSuits).deal().map(function (u) {
        var highestNumber = 0;
        var _thisHand = thisHand,
            round = _thisHand.round;
        console.log(round);
        return u.reduce(function (a, ele, i) {
          if (ele[1] > highestNumber) {
            console.log('ele is higher', ele[1]);
            highestNumber = ele[1];
            thisHand = {
              winningCard: ele,
              winningPlayer: i,
              round: round++
            };
          } else if (ele[1] === highestNumber) {
            console.log('values are the same', i);
            thisHand = {
              round: round++
            };
          } else {
            console.log('hn is higher', highestNumber);
            thisHand = {
              round: round++
            };
            highestNumber;
          }

          return thisHand; // console.log(thisHand);
        }, 0);
      });
    }
  }]);

  return War;
}();

exports.default = War;