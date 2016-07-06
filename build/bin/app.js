/**
 * Created byon .
 *  User:  whisperfairy
 *  Date:  2016/7/3
 *  Time:  21:26
 */
'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Koa = require('koa');
var crypto = require('crypto');
var app = new Koa();
var wechat = require('../config/wechatConfig').wechatConfig;
app.use(function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
        var sha1, signature, nonce, timestamp, echostr, content, result;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        sha1 = crypto.createHash('sha1');
                        signature = ctx.query.signature;
                        nonce = ctx.query.signature;
                        timestamp = ctx.query.timestamp;
                        echostr = ctx.query.ecostr;
                        content = [wechat.token, timestamp, nonce].sort().join("");

                        console.log(ctx.query);
                        console.log(signature);
                        sha1.update(content);
                        result = sha1.digest('hex');

                        console.log(result);
                        if (result == signature) {
                            ctx.body = echostr + "";
                        } else {
                            ctx.body = "wrong";
                        }

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());
app.listen(6543);
console.log("listening 6543");