"use strict";

var _typeorm = require("typeorm");

var _ormConfig = require("../../ormConfig.json");

var _ormConfig2 = _interopRequireDefault(_ormConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var database = void 0;

module.exports = function getDatabase() {
    var _this = this;

    return new Promise(function _callee(resolve, reject) {
        return regeneratorRuntime.async(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;

                        if (!database) {
                            _context.next = 4;
                            break;
                        }

                        resolve(database);
                        return _context.abrupt("return");

                    case 4:
                        _context.next = 6;
                        return regeneratorRuntime.awrap((0, _typeorm.createConnection)(_ormConfig2.default));

                    case 6:
                        database = _context.sent;

                        resolve(database);
                        _context.next = 14;
                        break;

                    case 10:
                        _context.prev = 10;
                        _context.t0 = _context["catch"](0);

                        console.warn(_context.t0);
                        reject(_context.t0);

                    case 14:
                    case "end":
                        return _context.stop();
                }
            }
        }, null, _this, [[0, 10]]);
    });
};