// pages/new/new.js

const log = require('../../utils/log').log_new2
const needSubmitUrl = require('../../config').needSubmitUrl
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
      title: "我要求购"
    })
  },

  formSubmit: function(e) {

    const app = getApp();

    e.detail.value.user_id = app.globalData.gOpenId;
    e.detail.value.user_nickname = app.globalData.gUserInfo.nickName;
    e.detail.value.city = CITY;

    log('fromSubmit ' + JSON.stringify(e.detail.value))

    wx.request({
      url: needSubmitUrl,
      data: e.detail.value,
      success: function (res) {
        // log("onLaunch -> wx.login self server success " + JSON.stringify(res));
        console.log(res.statusCode)
        console.log("submit success code : " + JSON.stringify(res.data))
      },
      fail: function (res) {
        log("submit faild " + res);
      }
    })
  },

  formReset: function() {
    log('formReset')
  },

})
