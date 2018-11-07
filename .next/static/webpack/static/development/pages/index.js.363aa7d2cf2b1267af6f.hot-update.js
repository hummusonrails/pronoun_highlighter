webpackHotUpdate("static/development/pages/index.js",{

/***/ "./logic/count_funcs.js":
/*!******************************!*\
  !*** ./logic/count_funcs.js ***!
  \******************************/
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

/***/ })

})
//# sourceMappingURL=index.js.363aa7d2cf2b1267af6f.hot-update.js.map