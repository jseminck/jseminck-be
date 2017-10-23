webpackHotUpdate(6,{

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _logs = __webpack_require__(399);

var _logs2 = _interopRequireDefault(_logs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\projects\\jseminck-be\\frontend\\src\\pages\\logs.js?entry";


var LogsContainer = function (_React$Component) {
    (0, _inherits3.default)(LogsContainer, _React$Component);

    function LogsContainer() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, LogsContainer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LogsContainer.__proto__ || (0, _getPrototypeOf2.default)(LogsContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            logs: []
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(LogsContainer, [{
        key: "componentDidMount",
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var response, _ref3, logs;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return fetch("http://localhost:12345/logs");

                            case 2:
                                response = _context.sent;
                                _context.next = 5;
                                return response.json();

                            case 5:
                                _ref3 = _context.sent;
                                logs = _ref3.data;

                                this.setState({ logs: logs });

                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentDidMount() {
                return _ref2.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_logs2.default, { logs: this.state.logs, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            });
        }
    }]);

    return LogsContainer;
}(_react2.default.Component);

exports.default = LogsContainer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xccGFnZXNcXGxvZ3MuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMb2dzVmlldyIsIkxvZ3NDb250YWluZXIiLCJzdGF0ZSIsImxvZ3MiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWM7Ozs7Ozs7OztJQUVBLEE7Ozs7Ozs7Ozs7Ozs7OzhOLEFBQ2pCO2tCQUFRLEFBQ0UsQTtBQURGLEFBQ0o7Ozs7Ozs7Ozs7Ozs7O3VDQUl1QixNQUFBLEEsQUFBTTs7aUNBQXZCO0E7O3VDQUN1QixTQUFBLEEsQUFBUzs7O2lEQUF4QjtBLDZDQUFOLEFBRVIsQTs7cUNBQUEsQUFBSyxTQUFTLEVBQUMsTUFBZixBQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBR1QsQUFDTDttQ0FBTyxBQUFDLGdDQUFTLE1BQU0sS0FBQSxBQUFLLE1BQXJCLEFBQTJCOzhCQUEzQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7OztFQWI0QixnQkFBTSxBOztrQkFBNUIsQSIsImZpbGUiOiJsb2dzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L3Byb2plY3RzL2pzZW1pbmNrLWJlL2Zyb250ZW5kIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "E:\\projects\\jseminck-be\\frontend\\src\\pages\\logs.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\projects\\jseminck-be\\frontend\\src\\pages\\logs.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/logs")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5lM2EzODNjNDM0OGVlYTRlM2Q4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9ncy5qcz80ZDhmMDhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2dzVmlldyBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2dzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ3NDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBsb2dzOiBbXVxuICAgIH1cblxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDoxMjM0NS9sb2dzXCIpO1xuICAgICAgICBjb25zdCB7IGRhdGE6IGxvZ3MgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2dzfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPExvZ3NWaWV3IGxvZ3M9e3RoaXMuc3RhdGUubG9nc30gLz5cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvbG9ncy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTs7QUFEQTs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7O0FBYkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==