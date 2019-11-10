//app.js
const appId = require('./config').app_id
const appSecret = require('./config').app_secret
const wechatLoginUrl = require('./config').wechatLoginUrl

const log = require('./utils/log').log_app

App({
  onLaunch: function (options) {

    log("onLaunch options.path = " + options.path);
    log("onLaunch options.query = " + options.query);
    log("onLaunch options.scene = " + options.scene);
    log("onLaunch options.shareTicket = " + options.shareTicket);

    log("onLaunch -> wx.login");
    wx.login({
      success: function (res) {
        log("onLaunch -> wx.login success with code = " + res.code);
        wx.request({
          url: wechatLoginUrl,
          data: {
            code: res.code,
            app_id: appId,
            app_secret: appSecret
          },
          success: function (res) {
            log("onLaunch -> wx.login self server success " + JSON.stringify(res));
            var openId = res.data.openid
            console.log("openId = " + openId)
            console.log(res.statusCode)
            console.log("You did it!")
          },
          fail: function (res) {
            log("onLaunch -> wx.login self server fail " + res);
          }
        })
      }
    })
  },

  globalData: {
    userInfo: null
  }
})
