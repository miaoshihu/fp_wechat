// pages/detail/index.js

const log = require('../../utils/log').log_self

Page({

  /**
   * 页面的初始数据
   */
  data: {
    have_userinfo: null,
  },

  onLoad: function(options) {
    log("onLoad");
    wx.setNavigationBarTitle({
      title: "我的"
    })

    this.setData({
      have_userinfo: getApp().globalData.have_userinfo
    })

  },

  gotoPubish: function(e) {

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

    // if (point <= 10) {
    //   log("gotoPubish point = " + point + "  < 10 , return!");
    //   wx.showToast({
    //     title: '积分不足',
    //     icon: 'none',
    //     duration: 2000
    //   })
    //   return;
    // }

    wx.getStorage({
      key: 'point',
      success(res) {
        wx.navigateTo({
          url: '../new/new'
        })
      },
      fail: function(res) {
        wx.navigateTo({
          url: '../author/author'
        })
      }
    })

  },

  gotoPubish2: function(e) {
    wx.navigateTo({
      url: '../new2/new2'
    })
  },

  gotoMyPublish1: function(e) {
    log("gotoMyPublish1");
    wx.navigateTo({
      url: '../mylist/mylist'
    })
  },

  gotoMyPublish2: function(e) {
    log("gotoMyPublish2");
    wx.navigateTo({
      url: '../mylist/mylist'
    })
  },

  onGotUserInfo: function(e) {
    log("onGotUserInfo");
    if (e.detail.userInfo != null) {
      log("userinfo != null " + JSON.stringify(e.detail.userInfo));
      this.setNickname(e.detail.userInfo.nickName);
      this.setHaveUserInfo('true');
    } else {
      log("userinfo = null");
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  setNickname: function(nickname) {
    var app = getApp();
    wx.setStorage({
      key: "nickname",
      data: nickname,
    });
    app.globalData.nickname = nickname;
    log("setNickname " + nickname);
  },

  setHaveUserInfo: function(value) {
    this.setData({
      have_userinfo: value,
    })
    wx.setStorage({
      key: "have_userinfo",
      data: value,
    });
    log("setHaveUserInfo " + value);
  },

})