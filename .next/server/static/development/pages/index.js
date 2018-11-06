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
      var wordHighlight = _words__WEBPACK_IMPORTED_MODULE_2__["femaleList"].includes(this.props.word.toLowerCase().replace(/[^A-Za-z0-9]/g, '')) ? "femaleWord" : _words__WEBPACK_IMPORTED_MODULE_2__["maleList"].includes(this.props.word.toLowerCase().replace(/[^A-Za-z0-9]/g, '')) ? "maleWord" : _words__WEBPACK_IMPORTED_MODULE_2__["neutralList"].includes(this.props.word.toLowerCase().replace(/[^A-Za-z0-9]/g, '')) ? "neutralWord" : "neutralWord";
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-920209421" + " " + "textBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "920209421",
        css: "@import url('https://fonts.googleapis.com/css?family=Inconsolata|Poor+Story');.textBox.jsx-920209421{display:inline-block;font-family:'Inconsolata',monospace;font-size:18px;}.femaleWord.jsx-920209421{font-family:'Poor Story',cursive;font-size:22px;font-weight:bold;background-color:pink;margin:2px;}.maleWord.jsx-920209421{font-family:'Poor Story',cursive;font-size:22px;font-weight:bold;background-color:cornflowerblue;margin:2px;}.neutralWord.jsx-920209421{margin:2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ncmVlbmJlcmcvRGV2ZWxvcG1lbnQvZ2VuZGVyX3Byb2plY3QvY29tcG9uZW50cy9ldmFsdGV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXa0IsQUFFc0YsQUFHdEQsQUFRYSxBQVFBLEFBUXZCLFdBQ2IsVUF4QnVDLFlBUXRCLEFBUUEsZUFQRSxBQVFBLFNBaEJGLFFBU08sQUFRVSxPQWhCbEMsZUFTYSxVQVFBLENBUGIsVUFRQSIsImZpbGUiOiIvVXNlcnMvYmVuZ3JlZW5iZXJnL0RldmVsb3BtZW50L2dlbmRlcl9wcm9qZWN0L2NvbXBvbmVudHMvZXZhbHRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2ZlbWFsZUxpc3QsIG1hbGVMaXN0LCBuZXV0cmFsTGlzdH0gZnJvbSAnLi93b3Jkcyc7XG5cbmNsYXNzIEV2YWxUZXh0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHdvcmRIaWdobGlnaHQgPVxuICAgICAgZmVtYWxlTGlzdC5pbmNsdWRlcyh0aGlzLnByb3BzLndvcmQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXkEtWmEtejAtOV0vZywgJycpKSA/IFwiZmVtYWxlV29yZFwiIDogXG4gICAgICAgIG1hbGVMaXN0LmluY2x1ZGVzKHRoaXMucHJvcHMud29yZC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teQS1aYS16MC05XS9nLCAnJykpID8gXCJtYWxlV29yZFwiIDpcbiAgICAgICAgICBuZXV0cmFsTGlzdC5pbmNsdWRlcyh0aGlzLnByb3BzLndvcmQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXkEtWmEtejAtOV0vZywgJycpKSA/IFwibmV1dHJhbFdvcmRcIiA6IFwibmV1dHJhbFdvcmRcIiBcblxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0Qm94XCI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SW5jb25zb2xhdGF8UG9vcitTdG9yeScpO1xuICAgICAgICBcbiAgICAgICAgLnRleHRCb3gge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcblxuICAgICAgICB9XG4gICAgICAgIC5mZW1hbGVXb3JkIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1Bvb3IgU3RvcnknLCBjdXJzaXZlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xuICAgICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLm1hbGVXb3JkIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1Bvb3IgU3RvcnknLCBjdXJzaXZlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uZXV0cmFsV29yZCB7XG4gICAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17d29yZEhpZ2hsaWdodH0+e3RoaXMucHJvcHMud29yZH08L3NwYW4+XG4gICAgPC9kaXY+IFxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEV2YWxUZXh0Il19 */\n/*@ sourceURL=/Users/bengreenberg/Development/gender_project/components/evaltext.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-920209421" + " " + (wordHighlight || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, this.props.word));
    }
  }]);

  return EvalText;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (EvalText);

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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-432725990",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "432725990",
    css: "@import url('https://fonts.googleapis.com/css?family=Kumar+One+Outline');.header-area.jsx-432725990{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:75px;background-color:black;margin-bottom:10px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.header-text.jsx-432725990{font-family:'Kumar One Outline',cursive;font-size:36px;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ncmVlbmJlcmcvRGV2ZWxvcG1lbnQvZ2VuZGVyX3Byb2plY3QvY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR2tCLEFBRStFLEFBR3pELEFBUTRCLHdDQUMxQixlQUNILFlBQ2QsT0FWYyxZQUNXLHVCQUNKLG1CQUNJLG1HQUN6QiIsImZpbGUiOiIvVXNlcnMvYmVuZ3JlZW5iZXJnL0RldmVsb3BtZW50L2dlbmRlcl9wcm9qZWN0L2NvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUt1bWFyK09uZStPdXRsaW5lJyk7XG4gICAgICBcbiAgICAgIC5oZWFkZXItYXJlYSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogNzVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyLXRleHQge1xuICAgICAgICBmb250LWZhbWlseTogJ0t1bWFyIE9uZSBPdXRsaW5lJywgY3Vyc2l2ZTtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1hcmVhXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci10ZXh0XCI+R2VuZGVyIFByb25vdW4gPG1hcms+SGlnaGxpZ2h0ZXI8L21hcms+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXX0= */\n/*@ sourceURL=/Users/bengreenberg/Development/gender_project/components/header.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-432725990" + " " + "header-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-432725990" + " " + "header-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Gender Pronoun ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("mark", {
    className: "jsx-432725990",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Highlighter"))));
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
/* harmony import */ var _components_evaltext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/evaltext */ "./components/evaltext.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
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
      textInput: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
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
    key: "render",
    value: function render() {
      var formattedText = this.state.textInput.length > 0 ? this.state.textInput.split(" ").map(function (word) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_evaltext__WEBPACK_IMPORTED_MODULE_2__["default"], {
          word: word,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        });
      }) : 'Waiting for your input.';
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4221879327",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4221879327",
        css: "@import url('https://fonts.googleapis.com/css?family=Kumar+One+Outline');.body.jsx-4221879327{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.main-content-wrapper.jsx-4221879327{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.form-area.jsx-4221879327{margin-right:5px;}.divider.jsx-4221879327{width:10px;margin:6px;background:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ncmVlbmJlcmcvRGV2ZWxvcG1lbnQvZ2VuZGVyX3Byb2plY3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJzQixBQUVxRixBQUd6RCxBQUtBLEFBS0ksQUFHTixXQUNBLE1BSGIsS0FJbUIsaUJBQ25CLG1DQWZ3QixBQUtDLDhFQUp6QixxQkFLQSIsImZpbGUiOiIvVXNlcnMvYmVuZ3JlZW5iZXJnL0RldmVsb3BtZW50L2dlbmRlcl9wcm9qZWN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2YWxUZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvZXZhbHRleHQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5cbiAgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB0ZXh0SW5wdXQ6ICcnXG4gICAgICB9O1xuICBcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG4gIFxuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRleHRJbnB1dDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIFxuICAgIHJlbmRlcigpIHtcblxuICAgICAgY29uc3QgZm9ybWF0dGVkVGV4dCA9IFxuICAgICAgICB0aGlzLnN0YXRlLnRleHRJbnB1dC5sZW5ndGggPiAwID8gdGhpcy5zdGF0ZS50ZXh0SW5wdXQuc3BsaXQoXCIgXCIpLm1hcCh3b3JkID0+IDxFdmFsVGV4dCB3b3JkPXt3b3JkfSAvPikgOiAnV2FpdGluZyBmb3IgeW91ciBpbnB1dC4nXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S3VtYXIrT25lK091dGxpbmUnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmJvZHkge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWFpbi1jb250ZW50LXdyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZvcm0tYXJlYSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiA2cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWFyZWFcIj5cbiAgICAgICAgICAgICAgPGZvcm0+ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjMwXCIgY29scz1cIjYwXCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gaWQ9XCJpbnB1dC1hcmVhXCIgLz5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1hcmVhXCI+XG4gICAgICAgICAgICAgIHtmb3JtYXR0ZWRUZXh0fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG7DnyAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=/Users/bengreenberg/Development/gender_project/pages/index.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4221879327" + " " + "main-content-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4221879327" + " " + "form-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        className: "jsx-4221879327",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
        rows: "30",
        cols: "60",
        value: this.state.value,
        onChange: this.handleChange,
        id: "input-area",
        className: "jsx-4221879327",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4221879327" + " " + "divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4221879327" + " " + "text-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, formattedText)), "\xDF        ");
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