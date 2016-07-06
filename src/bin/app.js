/**
 * Created byon .
 *  User:  whisperfairy
 *  Date:  2016/7/3
 *  Time:  21:26
 */
'use strict'
const Koa = require('koa');
const sha1=require('crypto').createHash('sha1');
let app = new Koa();
const wechat=require('../config/wechatConfig').wechatConfig;
app.use(function *(next) {
    const signature = this.query.signature;
    const nonce =this.query.signature;
    const timestamp = this.query.timestamp;
    const echostr= this.query.ecostr;
    sha1.update(content);
    const result = sha1.digest('hex');
    [wechat.token,timestamp,nonce].sort().join("");
    if(result==signature)
    {
         this.body=echostr+"";
    }
    else
    {
        this.body="wrong";
    }
});
app.listen(6543);
console.log("listening 6543");