//app.js
const appId = require('./config').app_id
const appSecret = require('./config').app_secret
const wechatLoginUrl = require('./config').wechatLoginUrl

const log = require('./utils/log').log_app

App({
  onLaunch: function (options) {

    log("App() onLaunch options.path = " + options.path);
    log("App() onLaunch options.query = " + options.query);
    log("App() onLaunch options.scene = " + options.scene);
    log("App() onLaunch options.shareTicket = " + options.shareTicket);

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


    // wx.login({
    //   success: function (res) {

    //     wx.request({
    //       url: wechatLoginUrl,
    //       data: {
    //         code: res.code,
    //         app_id: appId,
    //         app_secret: appSecret
    //       },
    //       success: function (res) {
    //         console.log("wx.request fps server success ***********")     
    //         console.log("res = " + res.data)
    //         console.log(res.statusCode)      
    //       }
    //     })

    //   }
    // })
  },

  globalData: {
    userInfo: null
  }
})
