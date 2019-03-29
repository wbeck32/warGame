"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable no-console */
var Card =
/*#__PURE__*/
function () {
  function Card(ranks, suits) {
    _classCallCheck(this, Card);

    this.card = [];
    this.ranks = ranks;
    this.suits = suits;
  }

  _createClass(Card, [{
    key: "makeCard",
    value: function makeCard() {
      var card = this.card,
          ranks = this.ranks,
          suits = this.suits;
      console.log(888, ranks, suits);
      return card;
    }
  }]);

  return Card;
}();

var Deck =
/*#__PURE__*/
function () {
  function Deck(numPlayers, numRanks, numSuits) {
    _classCallCheck(this, Deck);

    this.deck = [];
    this.numPlayers = numPlayers;
    this.numRanks = numRanks;
    this.numSuits = numSuits;
  }

  _createClass(Deck, [{
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
      var numPlayers = this.numPlayers,
          numRanks = this.numRanks,
          numSuits = this.numSuits;
      this.createDeck(numRanks, numSuits);
      this.shuffle();
      var dealPile = this.deck;
      var dealtArray = Array.from({
        length: numPlayers
      }, function (v, i) {
        return i + 1;
      });
      dealtArray.map(function (u, idx) {
        dealtArray[idx] = [];
      });
      dealPile.reduce(function (a, v, i) {
        var modu = i % numPlayers;
        dealtArray[modu].push(v);
      }, 0);
      return dealtArray;
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