// pages/new/new.js

const log = require('../../utils/log').log_new
const goodSubmitUrl = require('../../config').goodSubmitUrl

Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_path_1: "../../imgs/add.jpeg",
    image_path_2: "../../imgs/add.jpeg"
  },

  formSubmit: function(e) {

    const app = getApp();

    e.detail.value.user_id = app.globalData.gOpenId;
    e.detail.value.user_nickname = app.globalData.gUserInfo.nickName;

    log('fromSubmit ' + JSON.stringify(e.detail.value))

    wx.request({
      url: goodSubmitUrl,
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

  addImage1: function(e) {
    log("addImage1 " + e);
    var _this = this;
    wx.chooseImage({
      count: 1, //最多可以选择的图片总数
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],
      success: function(res) {
        var tempPath = res.tempFilePaths[0];
        _this.setData({
          image_path_1: tempPath,
        });
      }
    });
  },

  onLoad: function(options) {
    log("onLoad");
  },
})
