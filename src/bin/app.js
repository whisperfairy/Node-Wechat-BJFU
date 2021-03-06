/**
 * Created byon .
 *  User:  whisperfairy
 *  Date:  2016/7/3
 *  Time:  21:26
 */
'use strict'
const Koa = require('koa');
const crypto=require('crypto');
let app = new Koa();
const wechat=require('../config/wechatConfig').wechatConfig;
app.use(async (ctx, next) => {
    const sha1= crypto.createHash('sha1')
    const signature = ctx.query.signature;
    const nonce =ctx.query.nonce;
    const timestamp = ctx.query.timestamp;
    const echostr= ctx.query.ecostr;
    const content= [wechat.token, timestamp, nonce].sort().join("");
    console.log(ctx.query)
    console.log(signature);
    sha1.update(content);
    const result = sha1.digest('hex');
    console.log(result);
    if(result==signature)
    {
        ctx.body=echostr+"";
    }
    else
    {
        ctx.body="wrong";
    }
});
app.listen(6543);
console.log("listening 6543");