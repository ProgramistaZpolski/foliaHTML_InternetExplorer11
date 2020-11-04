"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// foliaHTML v.1.0.0
// by liskqu, ProgramistaZpolski
var CSScustomURL;

addCSS = function addCSS() {
  var css = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "https://cdn.jsdelivr.net/gh/lisqu16/foliaHTML@0.1.3/css.css";
  cssE = document.createElement("link");
  var attrbs = [{
    "attrb": "rel",
    "value": "stylesheet"
  }, {
    "attrb": "type",
    "value": "text/css"
  }, {
    "attrb": "href",
    "value": css
  }];

  for (var i in attrbs) {
    cssE.setAttribute(attrbs[i].attrb, attrbs[i].value);
  }

  document.head.appendChild(cssE);
};

addCSScustomURL = function addCSScustomURL() {
  var css = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : CSScustomURL;
  cssE = document.createElement("link");
  var attrbs = [{
    "attrb": "rel",
    "value": "stylesheet"
  }, {
    "attrb": "type",
    "value": "text/css"
  }, {
    "attrb": "href",
    "value": css
  }];

  for (var i in attrbs) {
    cssE.setAttribute(attrbs[i].attrb, attrbs[i].value);
  }

  document.head.appendChild(cssE);
};

var tags = ["duzyTekst", "naSrodku", "malyTekst", "przycisk", "tekstPrzycisk", "czcionkaSerif", "czcionkaSans", "czcionkaSans2", "czcionkaMono", "czcionkaMono2", "czcionkaMono", "czcionkaMono2", "czcionkaComic", "czcionkaDisplay", "cienMaly", "cienSredni", "cienDuzy", "cienNajwiekszy", "sredniTekst", "poLewej", "poPrawej", "przekreslonyTekst", "pogrubionyTekst", "lekkiTekst", "najwiekszyTekst"];

loadTags = function loadTags() {
  try {
    if (_typeof(tags) != "object") throw new Error("Nie udało się załadować \"tagów\".");

    var _iterator = _createForOfIteratorHelper(tags),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var i = _step.value;
        document.createElement(tags[i]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } catch (error) {
    return console.error("Wystąpił błąd foliaHTML!\nTreść: " + error.message);
  }
};

function s() {
  addCSS();
  loadTags();
}

function sc(curl) {
  CSScustomURL = curl;
  addCSScustomURL();
  loadTags();
}
