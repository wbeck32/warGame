"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/* eslint-disable no-console */
var Card =
/*#__PURE__*/
function () {
  function Card(dealtCard) {
    (0, _classCallCheck2.default)(this, Card);
    this.card = {};
    this.dealtCard = dealtCard;
  }

  (0, _createClass2.default)(Card, [{
    key: "makeCard",
    value: function makeCard() {
      var card = this.card;
      var _this$dealtCard = this.dealtCard,
          _this$dealtCard$card = _this$dealtCard.card,
          suit = _this$dealtCard$card.suit,
          rank = _this$dealtCard$card.rank,
          handId = _this$dealtCard.handId,
          playerId = _this$dealtCard.playerId;
      card = {
        handId: handId,
        playerId: playerId,
        rank: rank,
        suit: suit
      };
      return card;
    }
  }]);
  return Card;
}();

var Deck =
/*#__PURE__*/
function () {
  function Deck(numPlayers, numRanks, numSuits) {
    (0, _classCallCheck2.default)(this, Deck);
    this.deck = [];
    this.numPlayers = numPlayers;
    this.numRanks = numRanks;
    this.numSuits = numSuits;
  }

  (0, _createClass2.default)(Deck, [{
    key: "shuffle",
    value: function shuffle() {
      var shuffled = this.deck;
      var currentIndex = shuffled.length;
      var temporaryValue;
      var randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = shuffled[currentIndex];
        shuffled[currentIndex] = shuffled[randomIndex];
        shuffled[randomIndex] = temporaryValue;
      }

      this.deck = shuffled;
    }
  }, {
    key: "deal",
    value: function deal() {
      var _marked =
      /*#__PURE__*/
      _regenerator.default.mark(handIds),
          _marked2 =
      /*#__PURE__*/
      _regenerator.default.mark(playerIds);

      // The goal of this function was to build an array of hands.
      // Each array would be constructed from random numbers
      // and be structured like this:
      // const handArray = [
      //   [
      //     { handId: 0, player: 0, rank: 8, suit: 'diamonds' },
      //     { handId: 0, player: 1, rank: 6, suit: 'spades' },
      //     { handId: 0, player: 2, rank: 4, suit: 'hearts' },
      //   ],
      //   [
      //     { handId: 1, player: 0, rank: 1, suit: 'diamonds' },
      //     { handId: 1, player: 1, rank: 9, suit: 'hearts' },
      //     { handId: 1, player: 2, rank: 7, suit: 'hearts' },
      //   ],
      //   [
      //     { handId: 2, player: 0, rank: 8, suit: 'hearts' },
      //     { handId: 2, player: 1, rank: 6, suit: 'spades' },
      //     { handId: 2, player: 2, rank: 4, suit: 'hearts' },
      //   ],
      // ];
      // After the array was built, each object in each hand would
      // instantiate a Card object like so:
      // const dealtCard = {
      //   card: v,
      //   handId,
      //   playerId
      // };
      // dealtArray.push(new Card(dealtCard).makeCard())
      var numPlayers = this.numPlayers,
          numRanks = this.numRanks,
          numSuits = this.numSuits;
      this.createDeck(numRanks, numSuits);
      this.shuffle();
      var dealStack = this.deck;
      var handId = 0;
      var playerId = 0;
      var handArray = [];

      function handIds() {
        return _regenerator.default.wrap(function handIds$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(handId <= numRanks - 1)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return handId++;

              case 3:
                _context.next = 6;
                break;

              case 5:
                handId = 0;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _marked);
      }

      function playerIds() {
        return _regenerator.default.wrap(function playerIds$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(1, playerId);

                if (!(playerId < numPlayers)) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 4;
                return playerId++;

              case 4:
                _context2.next = 7;
                break;

              case 6:
                playerId = 0; // yield playerId++;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _marked2);
      }

      dealStack.forEach(function (card) {
        var handId = handIds().next().value;
        var hand = {
          handId: handId,
          playerId: playerIds().next().value,
          card: card
        };
        console.log('hand: ', hand);
        handArray.push(hand);
      });
      console.log('handArray: ', handArray); // const hId = handIds();
      // // console.log(hId.next().value);
      // for (const prop in dealStack) {
      //   // console.log(`dealStack.${prop} = ${dealStack[prop]}`);
      // }
      // // console.log(dealStack, typeof dealStack);
      // const dealtArray = [];
      // const handArray = Array.from({ length: numRanks }, (x, i) => []);
      // handArray.forEach((hand, i) => {
      //   // console.log(8989898, hId.next().value);
      //   // const hi = hId.next().value;
      //   // console.log('hi: ', hi);
      //   // handArray[i].push(card = {
      //   //   handId,
      //   //   playerId: 0
      //   // });
      //   dealStack.forEach((card, idx) => {
      //     const hi = hId.next().value;
      //     console.log('hi: ', hi);
      //     // console.log(hId.next().value);
      //   });
      // });
      // dealtArray.forEach((ele) => {
      //   let handId = 0;
      //   do {
      //     ele.handId = handId + 1;
      //     handId = handId + 1;
      //   } while (handId < numRanks);
      // });
      // dealtArray.forEach((ele) => {
      //   let playerId = 0;
      //   do {
      //     ele.playerId = playerId + 1;
      //     playerId = playerId + 1;
      //   } while (playerId <= numPlayers);
      // });
      // return dealtArray;
    }
  }, {
    key: "createDeck",
    value: function createDeck(numRanks, numSuits) {
      var deck = this.deck;
      var allSuits = ['clubs', 'diamonds', 'hearts', 'spades'];
      var suits = allSuits.slice(0, numSuits);
      var intialDeck = Array.from({
        length: numRanks
      }, function (v, i) {
        return i + 1;
      });
      var it = intialDeck[Symbol.iterator]();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var member = _step.value;
          suits.forEach(function (i) {
            it = {
              suit: i,
              rank: member
            };
            deck.push(it);
          });
        };

        for (var _iterator = it[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
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
    }
  }]);
  return Deck;
}();

exports.default = Deck;