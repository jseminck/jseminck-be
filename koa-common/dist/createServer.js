"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createServer;

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _middlewares = require("./middlewares");

var _middlewares2 = _interopRequireDefault(_middlewares);

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("reflect-metadata");
require("babel-polyfill");

function createServer() {
  var app = new _koa2.default();

  (0, _middlewares2.default)(app);
  (0, _routes2.default)(app);

  return app;
};