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
      }; // console.log(99, numPlayers, numRanks, numSuits);

      var myDeck = new _Deck.default(numPlayers, numRanks, numSuits).deal();
      var hands = [];
      var deckIt = myDeck[Symbol.iterator]();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var card = _step.value;
          var cards = [];
          card.forEach(function (ele, i) {
            for (var u = 0; u <= numPlayers; u++) {
              var handNum = 0;
              console.log('ele.userId === u: ', ele.userId === u);
              if (ele.userId === u) cards.push(card[handNum]);
              handNum++;
            }

            return cards;
          });
          console.log('cards: ', cards);
        };

        for (var _iterator = deckIt[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        } // console.log('hands : ', hands);
        // myDeck.reduce((a, ele, i) => {
        //   console.log('a, ele, i: ', a, ele, i);
        //   const { rank, userId } = ele;
        //   let handNum = 1;
        //   console.log('rank, userId: ', rank, userId);
        //   const aHand = {
        //     handNum,
        //     userId,
        //     rank
        //   };
        //   hands.push(aHand);
        //   handNum++;
        // }, 0);
        // console.log('hands: ', hands);
        // hands.push(hand);
        // myDeck.forEach((ele, i) => {
        //   // console.log('ele, i: ', ele, i);
        //   let handNum = 0;
        //   const hand = {
        //     handNum: handNum++,
        //     userId: i,
        //     card: ele[handNum]
        //   };
        //   // console.log('hand: ', hand);
        //   handNum++;
        //   hands.push(hand);
        // });
        // console.log('hands: ', hands);

      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      myDeck.map(function (user) {
        var highestNumber = 0;
        var _thisHand = thisHand,
            round = _thisHand.round;
        console.log(round);
        return user.reduce(function (a, ele, i) {
          if (ele[1] > highestNumber) {
            // console.log('ele is higher', ele[1]);
            highestNumber = ele[1];
            thisHand = {
              winningCard: ele,
              winningPlayer: i,
              round: round++
            };
          } else if (ele[1] === highestNumber) {
            // console.log('values are the same', i);
            thisHand = {
              round: round++
            };
          } else {
            // console.log('hn is higher', highestNumber);
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