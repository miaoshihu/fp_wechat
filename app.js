//app.js
const appId = require('./config').app_id
const appSecret = require('./config').app_secret
const getOpenidUrl = require('./config').getOpenidUrl
const authorLoginUrl = require('./config').authorLoginUrl
const CITY = require('./config').city

const log = require('./utils/log').log_app

App({
  onLaunch: function(options) {

    log("onLaunch");
    this.getOpenId();

  },

  onShow: function(options) {
    log("onShow");
    this.setHaveUserInfoDefaultValue();
  },

  getOpenId: function() {
    log("getOpenId");
    var that = this;
    wx.getStorage({
      key: 'openid',
      success(res) {
        log("getOpenId success getStorage " + res.data);
        const app = getApp()
        app.globalData.gOpenId = res.data;
        
        that.checkAndAuthorLogin();
      },
      fail(res) {
        log("getOpenId failed getStorage " + res.data);
        that.getOpenIdFromServer();
      }
    })
  },
  checkAndAuthorLogin: function() {
    log("checkAndAuthorLogin");
    var that = this;
    wx.getStorage({
      key: 'nickname',
      success(res) {
        log("checkAndAuthorLogin success -> doAuthorLogin");
        that.doAuthorLogin();
      },
      fail(res) {
        log("checkAndAuthorLogin failed");
      }
    })
  },

  doAuthorLogin: function() {
    // 检查是否可用?

    log("doAuthorLogin ");
    const app = getApp()
    wx.request({
      url: authorLoginUrl,
      data: {
        id: app.globalData.gOpenId,
        city: CITY,
      },
      success: function(res) {
        log("onLaunch -> wx.login self server success " + JSON.stringify(res));
        const status_code = res.statusCode;
        const code = res.data.code;
        if (code != 0) {
          log("onLaunch -> wx.login self server failed " + res.data.desc + "return;");
          return;
        }

        const app = getApp()
        var author = res.data.data
        log("doAuthorLogin statuscode = " + res.statusCode)
        log("doAuthorLogin author = " + JSON.stringify(author))

        app.globalData.phone = author.phone;
        app.globalData.point = author.point;
        app.globalData.address = author.address;
        app.globalData.town = author.town;
        app.author_token = author.token;

        wx.getStorage({
          key: 'nickname',
          success(res) {
            app.globalData.nickname = res.data;
          },
          fail(res) {
            app.globalData.nickname = author.nickname;
          }
        })

        wx.setStorage({
          key: "nickname",
          data: author.nickname,
        })

        wx.setStorage({
          key: "point",
          data: author.point,
        })

        wx.setStorage({
          key: "town",
          data: author.town,
        })

        wx.setStorage({
          key: "address",
          data: author.address,
        })
        wx.setStorage({
          key: "phone",
          data: author.phone,
        })

        wx.setStorage({
          key: "status",
          data: author.status,
        })

      },
      fail: function(res) {
        log("doAuthorLogin failed " + JSON.stringify(author));
      }
    })
  },

  getOpenIdFromServer: function() {
    log("getOpenIdFromServer");
    var that = this;
    wx.login({
      success: function(res) {
        log("getOpenIdFromServer -> wx.login success with code = " + res.code);
        wx.request({
          url: getOpenidUrl,
          data: {
            code: res.code,
            city: CITY,
            app_id: appId,
            app_secret: appSecret
          },
          success: function(res) {
            const app = getApp()
            var openId = res.data.openid
            app.globalData.gOpenId = openId;
            log("getOpenIdFromServer -> wx.login self server success " + JSON.stringify(res));

            wx.setStorage({
              key: "openid",
              data: openId,
            })

            that.doAuthorLogin();
          },
          fail: function(res) {
            log("getOpenIdFromServer -> wx.login self server fail " + res);

            wx.hideToast();
            wx.showModal({
              title: '网络获取失败',
              content: "openid 获取失败 " + res.errMsg,
              showCancel: false,
              success: function(res) {}
            })
          }
        })
      }
    })
  },

  setHaveUserInfoDefaultValue: function() {
    var _this = this;
    wx.getStorage({
      key: 'have_userinfo',
      success(res) {
        log('setHaveUserInfoDefaultValue have_userinfo = ' + res.data)
        _this.setHaveUserInfo(res.data)
      },
      fail(res) {
        log('onLsetHaveUserInfoDefaultValue  have_userinfo = false')
        _this.setHaveUserInfo('false')
      }
    })
  },

  setHaveUserInfo: function(value) {
    wx.setStorage({
      key: "have_userinfo",
      data: value,
    });
    log("setHaveUserInfo " + value);

    const app = getApp()
    app.globalData.have_userinfo = value;
  },

  globalData: {

    have_userinfo: null,

    is_wx_auth: false,

    author_token: null,
    gOpenId: null,
    nickname: null,
    phone: null,
    address: null,
    town: null,
    point: null,
  },
})
