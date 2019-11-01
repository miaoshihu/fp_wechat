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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
