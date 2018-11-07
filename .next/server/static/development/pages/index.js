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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/counters.js":
/*!********************************!*\
  !*** ./components/counters.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/bengreenberg/Development/gender_project/components/counters.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Counters =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Counters, _React$Component);

  function Counters() {
    _classCallCheck(this, Counters);

    return _possibleConstructorReturn(this, _getPrototypeOf(Counters).apply(this, arguments));
  }

  _createClass(Counters, [{
    key: "render",
    value: function render() {
      var femaleCount = this.props.femaleNum;
      var maleCount = this.props.maleNum;
      var neutralCount = this.props.neutralNum;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-725514212" + " " + "textBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "725514212",
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ncmVlbmJlcmcvRGV2ZWxvcG1lbnQvZ2VuZGVyX3Byb2plY3QvY29tcG9uZW50cy9jb3VudGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRa0IiLCJmaWxlIjoiL1VzZXJzL2JlbmdyZWVuYmVyZy9EZXZlbG9wbWVudC9nZW5kZXJfcHJvamVjdC9jb21wb25lbnRzL2NvdW50ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ291bnRlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZmVtYWxlQ291bnQgPSB0aGlzLnByb3BzLmZlbWFsZU51bTtcbiAgICBjb25zdCBtYWxlQ291bnQgPSB0aGlzLnByb3BzLm1hbGVOdW07XG4gICAgY29uc3QgbmV1dHJhbENvdW50ID0gdGhpcy5wcm9wcy5uZXV0cmFsTnVtO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0Qm94XCI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZXItYXJlYVwiPkZlbWFsZSBDb3VudDoge2ZlbWFsZUNvdW50fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGVyLWFyZWFcIj5NYWxlIENvdW50OiB7bWFsZUNvdW50fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGVyLWFyZWFcIj5OZXV0cmFsIENvdW50OiB7bmV1dHJhbENvdW50fTwvZGl2PlxuXG4gICAgPC9kaXY+IFxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvdW50ZXJzXG4iXX0= */\n/*@ sourceURL=/Users/bengreenberg/Development/gender_project/components/counters.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-725514212" + " " + "counter-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "Female Count: ", femaleCount), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-725514212" + " " + "counter-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "Male Count: ", maleCount), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-725514212" + " " + "counter-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Neutral Count: ", neutralCount));
    }
  }]);

  return Counters;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Counters);

/***/ }),

/***/ "./components/evaltext.js":
/*!********************************!*\
  !*** ./components/evaltext.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _words__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./words */ "./components/words.js");
var _jsxFileName = "/Users/bengreenberg/Development/gender_project/components/evaltext.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var EvalText =
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
      var wordHighlight = _words__WEBPACK_IMPORTED_MODULE_2__["femaleList"].includes(this.props.word.toLowerCase().replace(/[\W].*/g, '')) ? "femaleWord" : _words__WEBPACK_IMPORTED_MODULE_2__["maleList"].includes(this.props.word.toLowerCase().replace(/[\W].*/g, '')) ? "maleWord" : "neutralWord";
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-920209421" + " " + "textBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "920209421",
        css: "@import url('https://fonts.googleapis.com/css?family=Inconsolata|Poor+Story');.textBox.jsx-920209421{display:inline-block;font-family:'Inconsolata',monospace;font-size:18px;}.femaleWord.jsx-920209421{font-family:'Poor Story',cursive;font-size:22px;font-weight:bold;background-color:pink;margin:2px;}.maleWord.jsx-920209421{font-family:'Poor Story',cursive;font-size:22px;font-weight:bold;background-color:cornflowerblue;margin:2px;}.neutralWord.jsx-920209421{margin:2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ncmVlbmJlcmcvRGV2ZWxvcG1lbnQvZ2VuZGVyX3Byb2plY3QvY29tcG9uZW50cy9ldmFsdGV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVa0IsQUFFc0YsQUFHdEQsQUFRYSxBQVFBLEFBUXZCLFdBQ2IsVUF4QnVDLFlBUXRCLEFBUUEsZUFQRSxBQVFBLFNBaEJGLFFBU08sQUFRVSxPQWhCbEMsZUFTYSxVQVFBLENBUGIsVUFRQSIsImZpbGUiOiIvVXNlcnMvYmVuZ3JlZW5iZXJnL0RldmVsb3BtZW50L2dlbmRlcl9wcm9qZWN0L2NvbXBvbmVudHMvZXZhbHRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2ZlbWFsZUxpc3QsIG1hbGVMaXN0LCBuZXV0cmFsTGlzdH0gZnJvbSAnLi93b3Jkcyc7XG5cbmNsYXNzIEV2YWxUZXh0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHdvcmRIaWdobGlnaHQgPVxuICAgICAgZmVtYWxlTGlzdC5pbmNsdWRlcyh0aGlzLnByb3BzLndvcmQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXFxXXS4qL2csICcnKSkgPyBcImZlbWFsZVdvcmRcIiA6IFxuICAgICAgICBtYWxlTGlzdC5pbmNsdWRlcyh0aGlzLnByb3BzLndvcmQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXFxXXS4qL2csICcnKSkgPyBcIm1hbGVXb3JkXCIgOiBcIm5ldXRyYWxXb3JkXCJcblxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0Qm94XCI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SW5jb25zb2xhdGF8UG9vcitTdG9yeScpO1xuICAgICAgICBcbiAgICAgICAgLnRleHRCb3gge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcblxuICAgICAgICB9XG4gICAgICAgIC5mZW1hbGVXb3JkIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1Bvb3IgU3RvcnknLCBjdXJzaXZlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xuICAgICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLm1hbGVXb3JkIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1Bvb3IgU3RvcnknLCBjdXJzaXZlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uZXV0cmFsV29yZCB7XG4gICAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17d29yZEhpZ2hsaWdodH0+e3RoaXMucHJvcHMud29yZH08L3NwYW4+XG4gICAgPC9kaXY+IFxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEV2YWxUZXh0XG4iXX0= */\n/*@ sourceURL=/Users/bengreenberg/Development/gender_project/components/evaltext.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-920209421" + " " + (wordHighlight || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, this.props.word));
    }
  }]);

  return EvalText;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (EvalText);

/***/ }),

/***/ "./components/head.js":
/*!****************************!*\
  !*** ./components/head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/bengreenberg/Development/gender_project/components/head.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Gender Pronoun Project"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })));
});

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/bengreenberg/Development/gender_project/components/header.js";



var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    class: "header",
    className: "jsx-2029849001",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2029849001",
    css: "@import url('https://fonts.googleapis.com/css?family=Permanent+Marker');@import url(https://fonts.googleapis.com/css?family=Playfair+Display);@import url(https://fonts.googleapis.com/css?family=PT+Mono);*.jsx-2029849001{box-sizing:border-box;margin-bottom:10px;}header.jsx-2029849001{border-width:1px;border-style:solid solid dashed solid;border-color:blue;}body.jsx-2029849001{font:normal 100%/150% \"PT Mono\",sans-serif;}h1.jsx-2029849001,h2.jsx-2029849001,h3.jsx-2029849001{font-family:\"Playfair Display\";font-size:36px;color:black;}a.jsx-2029849001{-webkit-text-decoration:none;text-decoration:none;color:black;}li.jsx-2029849001{list-style:none;}header.jsx-2029849001,nav.jsx-2029849001>ul.jsx-2029849001{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}#logo.jsx-2029849001,nav.jsx-2029849001{-webkit-flex:1;-ms-flex:1;flex:1;}#logo.jsx-2029849001{padding-left:2em;}nav.jsx-2029849001 ul.jsx-2029849001{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}nav.jsx-2029849001 li.jsx-2029849001{padding:0 1em;}mark.jsx-2029849001{font-family:'Permanent Marker';color:black;}img.jsx-2029849001{width:35px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ncmVlbmJlcmcvRGV2ZWxvcG1lbnQvZ2VuZGVyX3Byb2plY3QvY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR2tCLEFBRThFLEFBQ0YsQUFDVCxBQUtwQyxBQUtMLEFBTTJCLEFBSWIsQUFNVixBQUtMLEFBTUgsQUFNTixBQUlVLEFBSVEsQUFJWixBQUlrQixBQUtwQixXQUNiLEdBVEEsRUF4QkEsQ0FyQndDLEFBcUN4QyxLQTFDcUIsU0FlSixBQXVDSCxFQWhCZCxRQXJDQSxFQVVBLEFBNENBLEdBdkNjLElBS0EsS0FmTSxHQVdwQixJQUtBLFdBZkEsQ0F5QkEsdUJBY0EiLCJmaWxlIjoiL1VzZXJzL2JlbmdyZWVuYmVyZy9EZXZlbG9wbWVudC9nZW5kZXJfcHJvamVjdC9jb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBlcm1hbmVudCtNYXJrZXInKTsgICAgICBcbiAgICAgIEBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5KTtcbiAgICAgIEBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1QVCtNb25vKTtcbiAgICAgIFxuICAgICAgLyogR2xvYmFsIFN0eWxlcyAqL1xuICAgICAgXG4gICAgICAqIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgICAgaGVhZGVyIHtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQgc29saWQgZGFzaGVkIHNvbGlkO1xuICAgICAgICBib3JkZXItY29sb3I6IGJsdWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGJvZHkge1xuICAgICAgICBmb250OiBub3JtYWwgMTAwJS8xNTAlIFwiUFQgTW9ub1wiLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuICAgICAgXG4gICAgICBoMSwgaDIsIGgzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiO1xuICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgfVxuICAgICAgXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qIE1ha2UgaGVhZGVyIGFuZCBOYXYgdWwgZmxleCBjb250YWluZXJzICovXG4gICAgICBcbiAgICAgIGhlYWRlciwgbmF2PnVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyogR2l2ZSBIZWFkZXIgZmxleCBpdGVtcyBlcXVhbCBzcGFjZSAqL1xuICAgICAgXG4gICAgICAjbG9nbywgbmF2IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgI2xvZ28ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgbmF2IHVsIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgbmF2IGxpIHtcbiAgICAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICAgIH1cblxuICAgICAgbWFyayB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUGVybWFuZW50IE1hcmtlcic7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxoMSBpZD1cImxvZ29cIj48YSBocmVmPVwiL1wiPkdlbmRlciBQcm9ub3VuIDxtYXJrPkhpZ2hsaWdodGVyPC9tYXJrPjwvYT48L2gxPlxuICAgICAgPG5hdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2JlbmhheWVodWRpL3Byb25vdW5faGlnaGxpZ2h0ZXJcIiB0YXJnZXQ9XCJfbmV3XCI+PGltZyBzcmM9XCIvc3RhdGljL2dpdGh1Yl9pY29uLnBuZ1wiIGFsdD1cImdpdGh1YiBpY29uXCIgLz48L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICA8L2hlYWRlcj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdfQ== */\n/*@ sourceURL=/Users/bengreenberg/Development/gender_project/components/header.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    id: "logo",
    className: "jsx-2029849001",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-2029849001",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Gender Pronoun ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("mark", {
    className: "jsx-2029849001",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Highlighter"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-2029849001",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2029849001",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2029849001",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/benhayehudi/pronoun_highlighter",
    target: "_new",
    className: "jsx-2029849001",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/github_icon.png",
    alt: "github icon",
    className: "jsx-2029849001",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/words.js":
/*!*****************************!*\
  !*** ./components/words.js ***!
  \*****************************/
/*! exports provided: femaleList, maleList, neutralList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "femaleList", function() { return femaleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maleList", function() { return maleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "neutralList", function() { return neutralList; });
var femaleList = ['she', 'her', 'hers', 'herself'];
var maleList = ['he', 'him', 'his', 'himself'];
var neutralList = ['they', 'them', 'theirs', 'themself'];

/***/ }),

/***/ "./logic/count_func.js":
/*!*****************************!*\
  !*** ./logic/count_func.js ***!
  \*****************************/
/*! exports provided: countInstances */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countInstances", function() { return countInstances; });
var countInstances = function countInstances(listArr, inputArr) {
  var counter = 0;

  for (var i = 0; i <= inputArr.length; i++) {
    if (listArr.includes(inputArr[i])) {
      counter += 1;
    }

    ;
  }

  ;
  return counter;
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_evaltext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/evaltext */ "./components/evaltext.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_counters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/counters */ "./components/counters.js");
/* harmony import */ var _components_words__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/words */ "./components/words.js");
/* harmony import */ var _logic_count_func__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../logic/count_func */ "./logic/count_func.js");
var _jsxFileName = "/Users/bengreenberg/Development/gender_project/pages/index.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.state = {
      textInput: '',
      maleCount: 0,
      femaleCount: 0,
      neutralCount: 0
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.analyzeText = _this.analyzeText.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Index, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        textInput: event.target.value
      });
    }
  }, {
    key: "analyzeText",
    value: function analyzeText(event) {
      event.preventDefault();
      this.setState({
        maleCount: Object(_logic_count_func__WEBPACK_IMPORTED_MODULE_7__["countInstances"])(_components_words__WEBPACK_IMPORTED_MODULE_6__["maleList"], this.state.textInput.split(" ")),
        femaleCount: Object(_logic_count_func__WEBPACK_IMPORTED_MODULE_7__["countInstances"])(_components_words__WEBPACK_IMPORTED_MODULE_6__["femaleList"], this.state.textInput.split(" ")),
        neutralCount: Object(_logic_count_func__WEBPACK_IMPORTED_MODULE_7__["countInstances"])(_components_words__WEBPACK_IMPORTED_MODULE_6__["neutralList"], this.state.textInput.split(" "))
      });
      console.log(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var formattedText = this.state.textInput.length > 0 ? this.state.textInput.split(" ").map(function (word) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_evaltext__WEBPACK_IMPORTED_MODULE_3__["default"], {
          word: word,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        });
      }) : 'Waiting for your input.';
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1620005165",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1620005165",
        css: "@import url('https://fonts.googleapis.com/css?family=Kumar+One+Outline');.body.jsx-1620005165{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.main-content-wrapper.jsx-1620005165{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.form-area.jsx-1620005165{margin-right:5px;}.divider.jsx-1620005165{width:1px;margin:6px;background:black;}.counter-box.jsx-1620005165{margin-top:22em;padding:0px 2px 0px 1px;border-radius:10px;border-width:5px;border-style:outset;border-color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ncmVlbmJlcmcvRGV2ZWxvcG1lbnQvZ2VuZGVyX3Byb2plY3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkNzQixBQUVxRixBQUd6RCxBQUtBLEFBS0ksQUFHUCxBQUtNLFVBSkwsTUFLYSxDQVIxQixJQUltQixpQkFDbkIsRUFJcUIsbUJBQ0YsZUFwQkssQUFLQyxFQWdCSCxvQkFDSCxpQkFDbkIsdUNBdEJBLHFCQUtBIiwiZmlsZSI6Ii9Vc2Vycy9iZW5ncmVlbmJlcmcvRGV2ZWxvcG1lbnQvZ2VuZGVyX3Byb2plY3QvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL2hlYWQnO1xuaW1wb3J0IEV2YWxUZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvZXZhbHRleHQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgQ291bnRlcnMgZnJvbSAnLi4vY29tcG9uZW50cy9jb3VudGVycyc7XG5pbXBvcnQge2ZlbWFsZUxpc3QsIG1hbGVMaXN0LCBuZXV0cmFsTGlzdH0gZnJvbSAnLi4vY29tcG9uZW50cy93b3Jkcyc7XG5pbXBvcnQgeyBjb3VudEluc3RhbmNlcyB9IGZyb20gJy4uL2xvZ2ljL2NvdW50X2Z1bmMnO1xuXG4gIGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdGV4dElucHV0OiAnJyxcbiAgICAgICAgbWFsZUNvdW50OiAwLFxuICAgICAgICBmZW1hbGVDb3VudDogMCxcbiAgICAgICAgbmV1dHJhbENvdW50OiAwXG4gICAgICB9O1xuICBcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuYW5hbHl6ZVRleHQgPSB0aGlzLmFuYWx5emVUZXh0LmJpbmQodGhpcyk7XG4gICAgfVxuICBcbiAgICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0ZXh0SW5wdXQ6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYW5hbHl6ZVRleHQoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWFsZUNvdW50OiBjb3VudEluc3RhbmNlcyhtYWxlTGlzdCwgdGhpcy5zdGF0ZS50ZXh0SW5wdXQuc3BsaXQoXCIgXCIpKSxcbiAgICAgICAgZmVtYWxlQ291bnQ6IGNvdW50SW5zdGFuY2VzKGZlbWFsZUxpc3QsIHRoaXMuc3RhdGUudGV4dElucHV0LnNwbGl0KFwiIFwiKSksXG4gICAgICAgIG5ldXRyYWxDb3VudDogY291bnRJbnN0YW5jZXMobmV1dHJhbExpc3QsIHRoaXMuc3RhdGUudGV4dElucHV0LnNwbGl0KFwiIFwiKSlcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgICB9XG4gIFxuICAgIHJlbmRlcigpIHtcblxuICAgICAgY29uc3QgZm9ybWF0dGVkVGV4dCA9IFxuICAgICAgICB0aGlzLnN0YXRlLnRleHRJbnB1dC5sZW5ndGggPiAwID8gdGhpcy5zdGF0ZS50ZXh0SW5wdXQuc3BsaXQoXCIgXCIpLm1hcCh3b3JkID0+IDxFdmFsVGV4dCB3b3JkPXt3b3JkfSAvPikgOiAnV2FpdGluZyBmb3IgeW91ciBpbnB1dC4nXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWQgLz5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUt1bWFyK09uZStPdXRsaW5lJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1haW4tY29udGVudC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb3JtLWFyZWEge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiA2cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvdW50ZXItYm94IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDJweCAwcHggMXB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBvdXRzZXQ7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWFyZWFcIj5cbiAgICAgICAgICAgICAgPGZvcm0+ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjMwXCIgY29scz1cIjYwXCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gaWQ9XCJpbnB1dC1hcmVhXCIgLz5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5hbmFseXplVGV4dChldmVudCl9PkFuYWx5emUgVGV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1hcmVhXCI+XG4gICAgICAgICAgICAgIHtmb3JtYXR0ZWRUZXh0fVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZXItYm94XCI+XG4gICAgICAgICAgICAgICAgPENvdW50ZXJzIFxuICAgICAgICAgICAgICAgICAgZmVtYWxlTnVtPXt0aGlzLnN0YXRlLmZlbWFsZUNvdW50fSBtYWxlTnVtPXt0aGlzLnN0YXRlLm1hbGVDb3VudH0gbmV1dHJhbE51bT17dGhpcy5zdGF0ZS5uZXV0cmFsQ291bnR9IFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=/Users/bengreenberg/Development/gender_project/pages/index.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1620005165" + " " + "main-content-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1620005165" + " " + "form-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        className: "jsx-1620005165",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
        rows: "30",
        cols: "60",
        value: this.state.value,
        onChange: this.handleChange,
        id: "input-area",
        className: "jsx-1620005165",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: function onClick(event) {
          return _this2.analyzeText(event);
        },
        className: "jsx-1620005165",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Analyze Text")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1620005165" + " " + "divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1620005165" + " " + "text-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, formattedText, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1620005165" + " " + "counter-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_counters__WEBPACK_IMPORTED_MODULE_5__["default"], {
        femaleNum: this.state.femaleCount,
        maleNum: this.state.maleCount,
        neutralNum: this.state.neutralCount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      })))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map