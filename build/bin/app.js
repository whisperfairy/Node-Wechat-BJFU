/**
 * Created byon .
 *  User:  whisperfairy
 *  Date:  2016/7/3
 *  Time:  21:26
 */
'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Koa = require('koa');
var sha1 = require('crypto').createHash('sha1');
var app = new Koa();
var wechat = require('../config/wechatConfig').wechatConfig;
app.use(_regenerator2.default.mark(function _callee(next) {
    var signature, nonce, timestamp, echostr, result;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    signature = this.query.signature;
                    nonce = this.query.signature;
                    timestamp = this.query.timestamp;
                    echostr = this.query.ecostr;

                    sha1.update(content);
                    result = sha1.digest('hex');

                    [wechat.token, timestamp, nonce].sort().join("");
                    if (result == signature) {
                        this.body = echostr + "";
                    } else {
                        this.body = "wrong";
                    }

                case 8:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));
app.listen(6543);
console.log("listening 6543");