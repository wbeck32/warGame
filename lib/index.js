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
      var gameDeck = new _Deck.default(numPlayers).deal(); // console.log(22, gameDeck)
    }
  }]);

  return War;
}();

exports.default = War;