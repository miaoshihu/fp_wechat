// pages/detail/index.js

const log = require('../../utils/log').log_self

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      /*withCredentials默认值为true,可不填，当设为false时就获取不到用户的加密信息*/
      withCredentials: true,
      success: function (res) {
        log('***get user success*********');
        log(res)
        var user = res.userInfo
        _this.setData({
          userInfo: user,
          hasUserInfo: true
        })

      },
      fail: function (res) {
        log('***get user ffffa*********');
        log(res)
      }
    })
  },

  gotoPubish: function(e) {
    wx.navigateTo({
      url: '../new/new'
    })
  },

  gotoMyPublish: function(e) {
    wx.navigateTo({
      url: '../mylist/mylist'
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
