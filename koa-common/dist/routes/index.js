"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = setupRoutes;

var _koaRouter = require("koa-router");

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _ping = require("./ping");

var _ping2 = _interopRequireDefault(_ping);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setupRoutes(app) {
    var router = new _koaRouter2.default();

    (0, _ping2.default)(router);

    app.use(router.routes())
    // Makes sure a 405 Method Not Allowed is sent
    .use(router.allowedMethods());
};