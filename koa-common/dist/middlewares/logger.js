"use strict";

var _db = require("../db");

var _db2 = _interopRequireDefault(_db);

var _Log = require("../entity/Log");

var _Log2 = _interopRequireDefault(_Log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function setupLogger(app) {
    var _this = this;

    app.use(function _callee(ctx, next) {
        var start, ms, database;
        return regeneratorRuntime.async(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        start = Date.now();
                        _context.next = 3;
                        return regeneratorRuntime.awrap(next());

                    case 3:
                        ms = Date.now() - start;
                        _context.prev = 4;
                        _context.next = 7;
                        return regeneratorRuntime.awrap((0, _db2.default)());

                    case 7:
                        database = _context.sent;
                        _context.next = 10;
                        return regeneratorRuntime.awrap(database.getRepository(_Log2.default).save(createLog(ctx.method + " " + ctx.url, ms)));

                    case 10:
                        _context.next = 15;
                        break;

                    case 12:
                        _context.prev = 12;
                        _context.t0 = _context["catch"](4);

                        console.warn(_context.t0);

                    case 15:
                    case "end":
                        return _context.stop();
                }
            }
        }, null, _this, [[4, 12]]);
    });
};

function createLog(endpoint, duration) {
    var log = new _Log2.default();
    log.endpoint = endpoint;
    log.duration = duration;
    return log;
}