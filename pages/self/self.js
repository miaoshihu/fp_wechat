// pages/detail/index.js

const log = require('../../utils/log').log_self

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  onLoad: function (options) {
  },

  gotoPubish: function (e) {
    wx.navigateTo({
      url: '../new/new'
    })
  },

  gotoMyPublish: function (e) {
    wx.navigateTo({
      url: '../mylist/mylist'
    })
  },

  onGotUserInfo: function (e) {
    log("onGotUserInfo");
    if (e.detail.userInfo != null) {
      log("userinfo != null " + e.detail.userInfo.nickName);
      var app = getApp();
      app.globalData.gUserInfo = e.detail.userInfo;

      this.gotoPubish();
    } else {
      log("userinfo = null");
    }
    log("error: " + e.detail.errMsg)
    log("userInfo: " + e.detail.userInfo)
    log("rawData: " + e.detail.rawData)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
