"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable no-console */
var Card =
/*#__PURE__*/
function () {
  function Card(ranksArray, suitsArray) {
    _classCallCheck(this, Card);

    this.card = [];
    this.ranks = ranksArray;
    this.suits = suitsArray;
  }

  _createClass(Card, [{
    key: "makeCard",
    value: function makeCard() {
      var card = this.card;
      var ranks = this.ranksArray.length;
      var suits = this.suitsArray.length;
      suits.reduce(function (a, v, i) {
        console.log(a, v, i);
        return card.push([ranks, suits]);
      }, 0);
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

    this.cards = [];
    this.numPlayers = numPlayers;
    this.numRanks = numRanks;
    this.numSuits = numSuits;
  }

  _createClass(Deck, [{
    key: "shuffle",
    value: function shuffle() {
      var shuffled = this.cards;
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

      this.cards = shuffled;
    }
  }, {
    key: "deal",
    value: function deal() {
      this.createDeck();
      this.shuffle();
      var dealPile = this.cards;
      var numPlayers = this.numPlayers;

      var dealtArray = _toConsumableArray(Array(numPlayers));

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
      var cards = this.cards;

      var ranksArray = _toConsumableArray(Array(numRanks).keys());

      var suitsArray = _toConsumableArray(Array(numSuits).keys());

      ranksArray.reduce(function (a, v, i) {
        var c = new Card(ranksArray, suitsArray);
        var card = c.makeCard(i);
        card.forEach(function (ele) {
          cards.push(ele);
        });
        return cards;
      }, 0);
      this.cards = cards;
    }
  }]);

  return Deck;
}();

exports.default = Deck;