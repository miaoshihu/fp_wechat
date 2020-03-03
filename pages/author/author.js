// pages/new/new.js

const log = require('../../utils/log').log_user
const authorSubmitUrl = require('../../config').authorSubmitUrl
const CITY = require('../../config').city

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  
  onLoad: function (options) {
    log("onLoad");
    wx.setNavigationBarTitle({
      title: "个人信息完善"
    })
  },

  formSubmit: function(e) {

    const app = getApp();

    e.detail.value.user_id = app.globalData.gOpenId;
    e.detail.value.user_nickname = app.globalData.gUserInfo.nickName;
    e.detail.value.city = CITY;

    log('fromSubmit ' + JSON.stringify(e.detail.value))

    wx.request({
      url: authorSubmitUrl,
      data: e.detail.value,
      success: function (res) {
        // log("onLaunch -> wx.login self server success " + JSON.stringify(res));
        console.log(res.statusCode)
        console.log("submit success code : " + JSON.stringify(res.data))
      },
      fail: function (res) {
        log("submit faild " + JSON.stringify(res));
      }
    })
  },

  formReset: function() {
    log('formReset')
  },

  showToastSuccess: function (res) {
    wx.hideToast();
    wx.showModal({
      title: '创建用户成功',
      content: '创建用户成功' + res.content,
      showCancel: false,
      success: function (res) { }
    })
  },

  showToastFailed: function(res) {
    wx.hideToast();
    wx.showModal({
      title: '错误提示',
      content: '创建用户失败' + res.content,
      showCancel: false,
      success: function (res) { }
    })
  },

})
