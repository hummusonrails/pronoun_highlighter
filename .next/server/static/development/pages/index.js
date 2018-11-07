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
var _jsxFileName = "/Users/doughty/bc/submittedhw/unit12/pronoun_highlighter/components/evaltext.js";



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
        css: "@import url('https://fonts.googleapis.com/css?family=Inconsolata|Poor+Story');.textBox.jsx-920209421{display:inline-block;font-family:'Inconsolata',monospace;font-size:18px;}.femaleWord.jsx-920209421{font-family:'Poor Story',cursive;font-size:22px;font-weight:bold;background-color:pink;margin:2px;}.maleWord.jsx-920209421{font-family:'Poor Story',cursive;font-size:22px;font-weight:bold;background-color:cornflowerblue;margin:2px;}.neutralWord.jsx-920209421{margin:2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3VnaHR5L2JjL3N1Ym1pdHRlZGh3L3VuaXQxMi9wcm9ub3VuX2hpZ2hsaWdodGVyL2NvbXBvbmVudHMvZXZhbHRleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2tCLEFBRXNGLEFBR3RELEFBUWEsQUFRQSxBQVF2QixXQUNiLFVBeEJ1QyxZQVF0QixBQVFBLGVBUEUsQUFRQSxTQWhCRixRQVNPLEFBUVUsT0FoQmxDLGVBU2EsVUFRQSxDQVBiLFVBUUEiLCJmaWxlIjoiL1VzZXJzL2RvdWdodHkvYmMvc3VibWl0dGVkaHcvdW5pdDEyL3Byb25vdW5faGlnaGxpZ2h0ZXIvY29tcG9uZW50cy9ldmFsdGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZmVtYWxlTGlzdCwgbWFsZUxpc3QsIG5ldXRyYWxMaXN0fSBmcm9tICcuL3dvcmRzJztcblxuY2xhc3MgRXZhbFRleHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgd29yZEhpZ2hsaWdodCA9XG4gICAgICBmZW1hbGVMaXN0LmluY2x1ZGVzKHRoaXMucHJvcHMud29yZC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teQS1aYS16MC05XS9nLCAnJykpID8gXCJmZW1hbGVXb3JkXCIgOiBcbiAgICAgICAgbWFsZUxpc3QuaW5jbHVkZXModGhpcy5wcm9wcy53b3JkLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15BLVphLXowLTldL2csICcnKSkgPyBcIm1hbGVXb3JkXCIgOlxuICAgICAgICAgIG5ldXRyYWxMaXN0LmluY2x1ZGVzKHRoaXMucHJvcHMud29yZC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teQS1aYS16MC05XS9nLCAnJykpID8gXCJuZXV0cmFsV29yZFwiIDogXCJuZXV0cmFsV29yZFwiIFxuXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRCb3hcIj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1JbmNvbnNvbGF0YXxQb29yK1N0b3J5Jyk7XG4gICAgICAgIFxuICAgICAgICAudGV4dEJveCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuXG4gICAgICAgIH1cbiAgICAgICAgLmZlbWFsZVdvcmQge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9vciBTdG9yeScsIGN1cnNpdmU7XG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gICAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAubWFsZVdvcmQge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9vciBTdG9yeScsIGN1cnNpdmU7XG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICAgICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5ldXRyYWxXb3JkIHtcbiAgICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXt3b3JkSGlnaGxpZ2h0fT57dGhpcy5wcm9wcy53b3JkfTwvc3Bhbj5cbiAgICA8L2Rpdj4gXG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRXZhbFRleHQiXX0= */\n/*@ sourceURL=/Users/doughty/bc/submittedhw/unit12/pronoun_highlighter/components/evaltext.js */",
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
var _jsxFileName = "/Users/doughty/bc/submittedhw/unit12/pronoun_highlighter/components/header.js";



var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-810514276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "810514276",
    css: "@import url('https://fonts.googleapis.com/css?family=Permanent+Marker');.header-area.jsx-810514276{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:75px;background-color:black;margin-bottom:10px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.header-text.jsx-810514276{font-family:'Permanent Marker',cursive;font-size:48px;color:white;}mark.jsx-810514276{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3VnaHR5L2JjL3N1Ym1pdHRlZGh3L3VuaXQxMi9wcm9ub3VuX2hpZ2hsaWdodGVyL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdrQixBQUU4RSxBQUd4RCxBQVEyQixBQU05QixVQUNaLDZCQU5pQixlQUNILFlBQ2QsUUFWYyxZQUNXLHVCQUNKLG1CQUNJLG1HQUN6QiIsImZpbGUiOiIvVXNlcnMvZG91Z2h0eS9iYy9zdWJtaXR0ZWRody91bml0MTIvcHJvbm91bl9oaWdobGlnaHRlci9jb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1QZXJtYW5lbnQrTWFya2VyJyk7ICAgICAgXG4gICAgICBcbiAgICAgIC5oZWFkZXItYXJlYSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogNzVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyLXRleHQge1xuICAgICAgICBmb250LWZhbWlseTogJ1Blcm1hbmVudCBNYXJrZXInLCBjdXJzaXZlO1xuICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cblxuICAgICAgbWFyayB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1hcmVhXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci10ZXh0XCI+R2VuZGVyIFByb25vdW4gPG1hcms+SGlnaGxpZ2h0ZXI8L21hcms+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXX0= */\n/*@ sourceURL=/Users/doughty/bc/submittedhw/unit12/pronoun_highlighter/components/header.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-810514276" + " " + "header-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-810514276" + " " + "header-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Gender Pronoun ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("mark", {
    className: "jsx-810514276",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
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
var neutralList = ['they', 'them', 'theirs', 'themself', 'me', 'mine', 'you', 'your', 'yours', 'ours', 'us', 'we', 'I', 'ze', 'hir'];

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
var _jsxFileName = "/Users/doughty/bc/submittedhw/unit12/pronoun_highlighter/pages/index.js";



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
        css: "@import url('https://fonts.googleapis.com/css?family=Kumar+One+Outline');.body.jsx-4221879327{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.main-content-wrapper.jsx-4221879327{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.form-area.jsx-4221879327{margin-right:5px;}.divider.jsx-4221879327{width:10px;margin:6px;background:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3VnaHR5L2JjL3N1Ym1pdHRlZGh3L3VuaXQxMi9wcm9ub3VuX2hpZ2hsaWdodGVyL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCc0IsQUFFcUYsQUFHekQsQUFLQSxBQUtJLEFBR04sV0FDQSxNQUhiLEtBSW1CLGlCQUNuQixtQ0Fmd0IsQUFLQyw4RUFKekIscUJBS0EiLCJmaWxlIjoiL1VzZXJzL2RvdWdodHkvYmMvc3VibWl0dGVkaHcvdW5pdDEyL3Byb25vdW5faGlnaGxpZ2h0ZXIvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZhbFRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9ldmFsdGV4dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcblxuICBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIHRleHRJbnB1dDogJydcbiAgICAgIH07XG4gIFxuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgXG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGV4dElucHV0OiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICBjb25zdCBmb3JtYXR0ZWRUZXh0ID0gXG4gICAgICAgIHRoaXMuc3RhdGUudGV4dElucHV0Lmxlbmd0aCA+IDAgPyB0aGlzLnN0YXRlLnRleHRJbnB1dC5zcGxpdChcIiBcIikubWFwKHdvcmQgPT4gPEV2YWxUZXh0IHdvcmQ9e3dvcmR9IC8+KSA6ICdXYWl0aW5nIGZvciB5b3VyIGlucHV0LidcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1LdW1hcitPbmUrT3V0bGluZScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tYWluLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZm9ybS1hcmVhIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDZweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tYXJlYVwiPlxuICAgICAgICAgICAgICA8Zm9ybT4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiMzBcIiBjb2xzPVwiNjBcIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBpZD1cImlucHV0LWFyZWFcIiAvPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWFyZWFcIj5cbiAgICAgICAgICAgICAge2Zvcm1hdHRlZFRleHR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbsOfICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=/Users/doughty/bc/submittedhw/unit12/pronoun_highlighter/pages/index.js */",
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