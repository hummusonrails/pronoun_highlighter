module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/words.js
var femaleList = ['she', 'her', 'hers', 'herself'];
var maleList = ['he', 'him', 'his', 'himself'];
var neutralList = ['they', 'them', 'theirs', 'themself'];
// CONCATENATED MODULE: ./components/evaltext.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var evaltext_EvalText =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EvalText, _React$Component);

  function EvalText() {
    _classCallCheck(this, EvalText);

    return _possibleConstructorReturn(this, _getPrototypeOf(EvalText).apply(this, arguments));
  }

  _createClass(EvalText, [{
    key: "render",
    value: function render() {
      var wordHighlight = femaleList.includes(this.props.word.toLowerCase().replace(/[^A-Za-z0-9]/g, '')) ? "femaleWord" : maleList.includes(this.props.word.toLowerCase().replace(/[^A-Za-z0-9]/g, '')) ? "maleWord" : neutralList.includes(this.props.word.toLowerCase().replace(/[^A-Za-z0-9]/g, '')) ? "neutralWord" : "neutralWord";
      return external_react_default.a.createElement("div", {
        className: "jsx-920209421" + " " + "textBox"
      }, external_react_default.a.createElement(style_default.a, {
        styleId: "920209421",
        css: ["@import url('https://fonts.googleapis.com/css?family=Inconsolata|Poor+Story');", ".textBox.jsx-920209421{display:inline-block;font-family:'Inconsolata',monospace;font-size:18px;}", ".femaleWord.jsx-920209421{font-family:'Poor Story',cursive;font-size:22px;font-weight:bold;background-color:pink;margin:2px;}", ".maleWord.jsx-920209421{font-family:'Poor Story',cursive;font-size:22px;font-weight:bold;background-color:cornflowerblue;margin:2px;}", ".neutralWord.jsx-920209421{margin:2px;}"]
      }), external_react_default.a.createElement("span", {
        className: "jsx-920209421" + " " + (wordHighlight || "")
      }, this.props.word));
    }
  }]);

  return EvalText;
}(external_react_default.a.Component);

/* harmony default export */ var evaltext = (evaltext_EvalText);
// CONCATENATED MODULE: ./components/header.js



var header_Header = function Header() {
  return external_react_default.a.createElement("div", {
    className: "jsx-810514276"
  }, external_react_default.a.createElement(style_default.a, {
    styleId: "810514276",
    css: ["@import url('https://fonts.googleapis.com/css?family=Permanent+Marker');", ".header-area.jsx-810514276{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:75px;background-color:black;margin-bottom:10px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".header-text.jsx-810514276{font-family:'Permanent Marker',cursive;font-size:48px;color:white;}", "mark.jsx-810514276{color:red;}"]
  }), external_react_default.a.createElement("div", {
    className: "jsx-810514276" + " " + "header-area"
  }, external_react_default.a.createElement("span", {
    className: "jsx-810514276" + " " + "header-text"
  }, "Gender Pronoun ", external_react_default.a.createElement("mark", {
    className: "jsx-810514276"
  }, "Highlighter"))));
};

/* harmony default export */ var header = (header_Header);
// CONCATENATED MODULE: ./pages/index.js



function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  pages_inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    pages_classCallCheck(this, Index);

    _this = pages_possibleConstructorReturn(this, pages_getPrototypeOf(Index).call(this, props));
    _this.state = {
      textInput: ''
    };
    _this.handleChange = _this.handleChange.bind(pages_assertThisInitialized(pages_assertThisInitialized(_this)));
    return _this;
  }

  pages_createClass(Index, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        textInput: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var formattedText = this.state.textInput.length > 0 ? this.state.textInput.split(" ").map(function (word) {
        return external_react_default.a.createElement(evaltext, {
          word: word
        });
      }) : 'Waiting for your input.';
      return external_react_default.a.createElement("div", {
        className: "jsx-4221879327"
      }, external_react_default.a.createElement(style_default.a, {
        styleId: "4221879327",
        css: ["@import url('https://fonts.googleapis.com/css?family=Kumar+One+Outline');", ".body.jsx-4221879327{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".main-content-wrapper.jsx-4221879327{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".form-area.jsx-4221879327{margin-right:5px;}", ".divider.jsx-4221879327{width:10px;margin:6px;background:black;}"]
      }), external_react_default.a.createElement(header, null), external_react_default.a.createElement("div", {
        className: "jsx-4221879327" + " " + "main-content-wrapper"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4221879327" + " " + "form-area"
      }, external_react_default.a.createElement("form", {
        className: "jsx-4221879327"
      }, external_react_default.a.createElement("textarea", {
        rows: "30",
        cols: "60",
        value: this.state.value,
        onChange: this.handleChange,
        id: "input-area",
        className: "jsx-4221879327"
      }))), external_react_default.a.createElement("div", {
        className: "jsx-4221879327" + " " + "divider"
      }), external_react_default.a.createElement("div", {
        className: "jsx-4221879327" + " " + "text-area"
      }, formattedText)), "\xDF        ");
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ })

/******/ });