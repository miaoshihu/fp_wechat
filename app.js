//app.js
const appId = require('./config').app_id
const appSecret = require('./config').app_secret
const wechatLoginUrl = require('./config').wechatLoginUrl

const log = require('./utils/log').log_app

App({
  onLaunch: function(options) {

    log("onLaunch options.path = " + options.path);
    log("onLaunch options.query = " + options.query);
    log("onLaunch options.scene = " + options.scene);
    log("onLaunch options.shareTicket = " + options.shareTicket);

    log("onLaunch -> wx.login");
    this.getOpenId();

  },

  getOpenId: function () {
    var that = this;
    wx.getStorage({
      key: 'openid',
      success(res) {
        console.log("success getStorage " + res.data);
        const app = getApp()
        app.globalData.gOpenId = res.data;
        wx.hideToast();
        wx.showModal({
          title: '本地获取',
          content: "openid = " + app.globalData.gOpenId,
          showCancel: false,
          success: function (res) { }
        })
      },
      fail(res) {
        console.log("faild getStorage " + res.data)
        that.getOpenIdFromServer();
      }
    })
  },

  getOpenIdFromServer: function() {
    wx.login({
      success: function(res) {
        log("onLaunch -> wx.login success with code = " + res.code);
        wx.request({
          url: wechatLoginUrl,
          data: {
            code: res.code,
            app_id: appId,
            app_secret: appSecret
          },
          success: function(res) {
            // log("onLaunch -> wx.login self server success " + JSON.stringify(res));
            var openId = res.data.openid
            gOpenId = openId;
            console.log("openId = " + openId)
            console.log(res.statusCode)
            console.log("You did it!")

            wx.setStorage({
              key: "openid",
              data: openId,
            })

            wx.hideToast();
            wx.showModal({
              title: '网络获取成功',
              content: "openid = " + openId,
              showCancel: false,
              success: function (res) { }
            })
          },
          fail: function(res) {
            log("onLaunch -> wx.login self server fail " + res);

            wx.hideToast();
            wx.showModal({
              title: '网络获取失败',
              content: "openid 获取失败",
              showCancel: false,
              success: function (res) { }
            })
          }
        })
      }
    })
  },

  globalData: {
    gUserInfo: null,
    gOpenId: null,
  },
})
