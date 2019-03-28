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
  function War(numPlayers) {
    _classCallCheck(this, War);

    this.numPlayers = numPlayers;
  }

  _createClass(War, [{
    key: "play",
    value: function play() {
      var numPlayers = this.numPlayers;
      var gameDeck = [];
      var hand = [[['hearts', 11], ['spades', 6], ['diamonds', 2], ['hearts', 5], ['diamonds', 9]], [['diamonds', 4], ['diamonds', 5], ['clubs', 3], ['hearts', 2], ['diamonds', 6]], [['spades', 7], ['hearts', 8], ['hearts', 9], ['hearts', 10], ['clubs', 8]]];
      var thisHand = {
        winningCard: [] // return new Deck(numPlayers).deal()

      };
      return hand.map(function (u) {
        var highestNumber = 0;
        return u.reduce(function (a, ele) {
          if (ele[1] > highestNumber) {
            // console.log('ele is higher', ele[1])
            highestNumber = ele[1];
            thisHand.winningCard = ele;
          } else {
            // console.log('hn is higher', highestNumber)
            highestNumber;
          } // return thisHand;
          // return ele[1] > highestNumber ? highestNumber = ele[1] : highestNumber


          console.log(thisHand);
        }, 0);
      });
    }
  }]);

  return War;
}();

exports.default = War;