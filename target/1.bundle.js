System.registerDynamic("npm:babel-runtime@5.8.34/helpers/class-call-check", [], true, function(req, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$", [], true, function(req, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/object/define-property", ["npm:core-js@1.2.6/library/modules/$"], true, function(req, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = req('npm:core-js@1.2.6/library/modules/$');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.34/core-js/object/define-property", ["npm:core-js@1.2.6/library/fn/object/define-property"], true, function(req, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": req('npm:core-js@1.2.6/library/fn/object/define-property'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.34/helpers/create-class", ["npm:babel-runtime@5.8.34/core-js/object/define-property"], true, function(req, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var _Object$defineProperty = req('npm:babel-runtime@5.8.34/core-js/object/define-property')["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.register('src/zoo.js', ['npm:babel-runtime@5.8.34/helpers/create-class', 'npm:babel-runtime@5.8.34/helpers/class-call-check'], function (_export) {
  var _createClass, _classCallCheck, getBarkStyle, Dog, Wolf;

  return {
    setters: [function (_npmBabelRuntime5834HelpersCreateClass) {
      _createClass = _npmBabelRuntime5834HelpersCreateClass['default'];
    }, function (_npmBabelRuntime5834HelpersClassCallCheck) {
      _classCallCheck = _npmBabelRuntime5834HelpersClassCallCheck['default'];
    }],
    execute: function () {
      'use strict';

      getBarkStyle = function getBarkStyle(isHowler) {
        return isHowler ? 'woooooow!' : 'woof, woof!';
      };

      Dog = (function () {
        function Dog(name, breed) {
          _classCallCheck(this, Dog);

          this.name = name;
          this.breed = breed;
        }

        _createClass(Dog, [{
          key: 'bark',
          value: function bark() {
            return this.name + ': ' + getBarkStyle(this.breed === 'husky');
          }
        }]);

        return Dog;
      })();

      _export('Dog', Dog);

      Wolf = (function () {
        function Wolf(name) {
          _classCallCheck(this, Wolf);

          this.name = name;
        }

        _createClass(Wolf, [{
          key: 'bark',
          value: function bark() {
            return this.name + ': ' + getBarkStyle(true);
          }
        }]);

        return Wolf;
      })();

      _export('Wolf', Wolf);
    }
  };
});
//# sourceMappingURL=1.bundle.js.map