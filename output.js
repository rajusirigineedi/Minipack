(function (modules, mappings) {
  function localRequire(relativePath) {
    return require(mappings[relativePath]);
  }

  function require(id) {
    const fn = modules[id];
    const exports = {};
    fn(localRequire, exports);
    return exports;
  }

  require(0);
})(
  {
    0: function (require, exports) {
      "use strict";

      var _message = _interopRequireDefault(require("./message.js"));
      var _another = require("./another.js");
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      console.log(
        "Entry file ",
        _message["default"],
        " value ",
        _another.THIS_IS_ANOTHER
      );
    },
    1: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports["default"] = void 0;
      var _name = require("./name.js");
      var _default = (exports["default"] = "Hello ".concat(_name.name));
    },
    2: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.THIS_IS_ANOTHER = void 0;
      var THIS_IS_ANOTHER = (exports.THIS_IS_ANOTHER = 312);
    },
    3: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.name = void 0;
      var name = (exports.name = "HELLO BUNDLER");
    },
  },
  { "./message.js": 1, "./another.js": 2, "./name.js": 3 }
);
