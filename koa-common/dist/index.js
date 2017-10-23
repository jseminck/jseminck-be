"use strict";

var _createServer = require("./createServer");

var _createServer2 = _interopRequireDefault(_createServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _createServer2.default)();

app.listen(12345);
console.log("app is listening on: http://localhost:12345");