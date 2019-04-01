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
          handId = _this$dealtCard.handId,
          playerId = _this$dealtCard.playerId,
          rank = _this$dealtCard.rank,
          suit = _this$dealtCard.suit;
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

      var numPlayers = this.numPlayers,
          numRanks = this.numRanks,
          numSuits = this.numSuits;
      this.createDeck(numRanks, numSuits);
      this.shuffle();
      var dealStack = this.deck;
      var handId = 0;
      var playerId = 0;
      var dealtArray = Array.from({
        length: numRanks
      }, function (x, i) {
        return [];
      });
      var numHands = numRanks;
      var numPersons = numPlayers;

      function handIds() {
        return _regenerator.default.wrap(function handIds$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(playerId < numPersons)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return handId;

              case 3:
                _context.next = 9;
                break;

              case 5:
                playerId = 0;
                handId++;
                _context.next = 9;
                return handId;

              case 9:
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
                if (!(playerId < numPersons)) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 3;
                return playerId++;

              case 3:
                _context2.next = 8;
                break;

              case 5:
                playerId = 0;
                _context2.next = 8;
                return playerId;

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _marked2);
      }

      dealStack.forEach(function (card) {
        var hand = {
          handId: handIds().next().value,
          playerId: playerIds().next().value,
          rank: card.rank,
          suit: card.suit
        };
        var handObj = new Card(hand).makeCard();
        dealtArray[hand.handId].push(handObj);
      }); // console.log('dealtArray: ', dealtArray);

      return dealtArray;
    }
  }, {
    key: "createDeck",
    value: function createDeck() {
      // TODO: make sure there are enough cards so no player has more than one card more or less than the others
      var deck = this.deck,
          numPlayers = this.numPlayers,
          numRanks = this.numRanks,
          numSuits = this.numSuits;
      if (numRanks > 13 || numSuits > 4) console.log("Nope, that would make ".concat(numRanks * numSuits, " cards and that is too many cards."));
      var even = numRanks * numSuits % numPlayers;
      if (even > 1) console.log("That is not a fair game. One player would only have ".concat(even, " cards."));
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