(() => {
  // webpackBootstrap
  "use strict";
  var __webpack_modules__ = {
    /***/ "./example/another.js":
      /*!****************************!*\
  !*** ./example/another.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   THIS_IS_ANOTHER: () => (/* binding */ THIS_IS_ANOTHER)\n/* harmony export */ });\nconst THIS_IS_ANOTHER = 312;\n\n\n//# sourceURL=webpack://minipack/./example/another.js?"
        );

        /***/
      },

    /***/ "./example/entry.js":
      /*!**************************!*\
  !*** ./example/entry.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _message_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.js */ "./example/message.js");\n/* harmony import */ var _another_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./another.js */ "./example/another.js");\n\n\nconsole.log("Entry file ", _message_js__WEBPACK_IMPORTED_MODULE_0__["default"], " value ", _another_js__WEBPACK_IMPORTED_MODULE_1__.THIS_IS_ANOTHER);\n\n\n//# sourceURL=webpack://minipack/./example/entry.js?'
        );

        /***/
      },

    /***/ "./example/message.js":
      /*!****************************!*\
  !*** ./example/message.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./name.js */ "./example/name.js");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`Hello ${_name_js__WEBPACK_IMPORTED_MODULE_0__.name}`);\n\n\n//# sourceURL=webpack://minipack/./example/message.js?'
        );

        /***/
      },

    /***/ "./example/name.js":
      /*!*************************!*\
  !*** ./example/name.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   name: () => (/* binding */ name)\n/* harmony export */ });\nconst name = "HELLO BUNDLER";\n\n\n//# sourceURL=webpack://minipack/./example/name.js?'
        );

        /***/
      },
  };
  /************************************************************************/
  // The module cache
  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {},
    });

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  /************************************************************************/
  /* webpack/runtime/define property getters */
  (() => {
    // define getter functions for harmony exports
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();

  /* webpack/runtime/hasOwnProperty shorthand */
  (() => {
    __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();

  /* webpack/runtime/make namespace object */
  (() => {
    // define __esModule on exports
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
      }
      Object.defineProperty(exports, "__esModule", { value: true });
    };
  })();

  /************************************************************************/

  // startup
  // Load entry module and return exports
  // This entry module can't be inlined because the eval devtool is used.
  var __webpack_exports__ = __webpack_require__("./example/entry.js");
})();
