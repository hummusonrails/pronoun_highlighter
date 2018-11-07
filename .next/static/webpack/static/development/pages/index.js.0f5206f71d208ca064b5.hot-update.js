webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_evaltext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/evaltext */ "./components/evaltext.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_counters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/counters */ "./components/counters.js");
/* harmony import */ var _components_words__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/words */ "./components/words.js");
/* harmony import */ var _logic_count_func__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logic/count_func */ "./logic/count_func.js");
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
        maleCount: Object(_logic_count_func__WEBPACK_IMPORTED_MODULE_6__["countInstances"])(_components_words__WEBPACK_IMPORTED_MODULE_5__["maleList"], this.state.textInput.split(" ")),
        femaleCount: Object(_logic_count_func__WEBPACK_IMPORTED_MODULE_6__["countInstances"])(_components_words__WEBPACK_IMPORTED_MODULE_5__["femaleList"], this.state.textInput.split(" ")),
        neutralCount: Object(_logic_count_func__WEBPACK_IMPORTED_MODULE_6__["countInstances"])(_components_words__WEBPACK_IMPORTED_MODULE_5__["neutralList"], this.state.textInput.split(" "))
      });
      console.log(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var formattedText = this.state.textInput.length > 0 ? this.state.textInput.split(" ").map(function (word) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_evaltext__WEBPACK_IMPORTED_MODULE_2__["default"], {
          word: word,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        });
      }) : 'Waiting for your input.';
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4130840558",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4130840558",
        css: "@import url('https://fonts.googleapis.com/css?family=Kumar+One+Outline');.body.jsx-4130840558{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.main-content-wrapper.jsx-4130840558{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.form-area.jsx-4130840558{margin-right:5px;}.divider.jsx-4130840558{width:10px;margin:6px;background:black;}.counter-box.jsx-4130840558{margin-top:20em;border-radius:10px;border-width:5px;border-style:outset;border-color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ncmVlbmJlcmcvRGV2ZWxvcG1lbnQvZ2VuZGVyX3Byb2plY3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNzQixBQUVxRixBQUd6RCxBQUtBLEFBS0ksQUFHTixBQUtLLFdBSkwsS0FLUSxDQVJyQixLQUltQixhQUtBLElBSm5CLGFBS3NCLG9CQUNILEVBckJLLEFBS0MsZUFpQnpCLCtEQXJCQSxxQkFLQSIsImZpbGUiOiIvVXNlcnMvYmVuZ3JlZW5iZXJnL0RldmVsb3BtZW50L2dlbmRlcl9wcm9qZWN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2YWxUZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvZXZhbHRleHQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgQ291bnRlcnMgZnJvbSAnLi4vY29tcG9uZW50cy9jb3VudGVycyc7XG5pbXBvcnQge2ZlbWFsZUxpc3QsIG1hbGVMaXN0LCBuZXV0cmFsTGlzdH0gZnJvbSAnLi4vY29tcG9uZW50cy93b3Jkcyc7XG5pbXBvcnQgeyBjb3VudEluc3RhbmNlcyB9IGZyb20gJy4uL2xvZ2ljL2NvdW50X2Z1bmMnO1xuXG4gIGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdGV4dElucHV0OiAnJyxcbiAgICAgICAgbWFsZUNvdW50OiAwLFxuICAgICAgICBmZW1hbGVDb3VudDogMCxcbiAgICAgICAgbmV1dHJhbENvdW50OiAwXG4gICAgICB9O1xuICBcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuYW5hbHl6ZVRleHQgPSB0aGlzLmFuYWx5emVUZXh0LmJpbmQodGhpcyk7XG4gICAgfVxuICBcbiAgICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0ZXh0SW5wdXQ6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYW5hbHl6ZVRleHQoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWFsZUNvdW50OiBjb3VudEluc3RhbmNlcyhtYWxlTGlzdCwgdGhpcy5zdGF0ZS50ZXh0SW5wdXQuc3BsaXQoXCIgXCIpKSxcbiAgICAgICAgZmVtYWxlQ291bnQ6IGNvdW50SW5zdGFuY2VzKGZlbWFsZUxpc3QsIHRoaXMuc3RhdGUudGV4dElucHV0LnNwbGl0KFwiIFwiKSksXG4gICAgICAgIG5ldXRyYWxDb3VudDogY291bnRJbnN0YW5jZXMobmV1dHJhbExpc3QsIHRoaXMuc3RhdGUudGV4dElucHV0LnNwbGl0KFwiIFwiKSlcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgICB9XG4gIFxuICAgIHJlbmRlcigpIHtcblxuICAgICAgY29uc3QgZm9ybWF0dGVkVGV4dCA9IFxuICAgICAgICB0aGlzLnN0YXRlLnRleHRJbnB1dC5sZW5ndGggPiAwID8gdGhpcy5zdGF0ZS50ZXh0SW5wdXQuc3BsaXQoXCIgXCIpLm1hcCh3b3JkID0+IDxFdmFsVGV4dCB3b3JkPXt3b3JkfSAvPikgOiAnV2FpdGluZyBmb3IgeW91ciBpbnB1dC4nXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1LdW1hcitPbmUrT3V0bGluZScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tYWluLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZm9ybS1hcmVhIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDZweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY291bnRlci1ib3gge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMGVtO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBvdXRzZXQ7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWFyZWFcIj5cbiAgICAgICAgICAgICAgPGZvcm0+ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjMwXCIgY29scz1cIjYwXCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gaWQ9XCJpbnB1dC1hcmVhXCIgLz5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5hbmFseXplVGV4dChldmVudCl9PkFuYWx5emUgVGV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1hcmVhXCI+XG4gICAgICAgICAgICAgIHtmb3JtYXR0ZWRUZXh0fVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZXItYm94XCI+XG4gICAgICAgICAgICAgICAgPENvdW50ZXJzIFxuICAgICAgICAgICAgICAgICAgZmVtYWxlTnVtPXt0aGlzLnN0YXRlLmZlbWFsZUNvdW50fSBtYWxlTnVtPXt0aGlzLnN0YXRlLm1hbGVDb3VudH0gbmV1dHJhbE51bT17dGhpcy5zdGF0ZS5uZXV0cmFsQ291bnR9IFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG7DnyAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=/Users/bengreenberg/Development/gender_project/pages/index.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4130840558" + " " + "main-content-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4130840558" + " " + "form-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        className: "jsx-4130840558",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
        rows: "30",
        cols: "60",
        value: this.state.value,
        onChange: this.handleChange,
        id: "input-area",
        className: "jsx-4130840558",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: function onClick(event) {
          return _this2.analyzeText(event);
        },
        className: "jsx-4130840558",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Analyze Text")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4130840558" + " " + "divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4130840558" + " " + "text-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, formattedText, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4130840558" + " " + "counter-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_counters__WEBPACK_IMPORTED_MODULE_4__["default"], {
        femaleNum: this.state.femaleCount,
        maleNum: this.state.maleCount,
        neutralNum: this.state.neutralCount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      })))), "\xDF        ");
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.0f5206f71d208ca064b5.hot-update.js.map