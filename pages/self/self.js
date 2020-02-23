// pages/detail/index.js

const log = require('../../utils/log').log_self

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  onLoad: function (options) {
    log("onLoad");
    this.setData({
      have_userinfo: false,
    })
  },

  gotoPubish: function (e) {

    // wx.navigateTo({
    //   url: '../new/new'
    // })

    const app = getApp();
    var point = app.globalData.point;
    if (point == null) {
      log("gotoPubish point = null , return!");
      wx.showToast({
        title: '初始化失败',
        icon: 'none',
        duration: 2000
      })
      return;
    }

    if (point <= 10) {
      log("gotoPubish point = " + point + "  < 10 , return!");
      wx.showToast({
        title: '积分不足',
        icon: 'none',
        duration: 2000
      })
      return;
    }

    wx.getStorage({
      key: 'point',
      success(res) {
        wx.navigateTo({
          url: '../new/new'
        })
      },
      fail: function (res) {
        wx.navigateTo({
          url: '../author/author'
        })
      }
    })

  },

  gotoPubish2: function (e) {
    wx.navigateTo({
      url: '../new2/new2'
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
      log("userinfo != null " + e.detail.userInfo);
      var app = getApp();
      app.globalData.gUserInfo = e.detail.userInfo;
      this.setData({
        have_userinfo: true,
      })
    } else {
      log("userinfo = null");
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
