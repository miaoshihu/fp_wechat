// pages/new/new.js

const log = require('../../utils/log').log_new

Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_path_1: "../../imgs/add.jpeg",
    image_path_2: "../../imgs/add.jpeg"
  },

  bindInputName: function(e) {
    log("Page-new bindInputName e " + e.detail.value);
  },

  formSubmit: function(e) {
    log('Page-new form发生了submit事件，携带数据为hh：', e)
  },

  formReset: function() {
    log('Page-new form发生了reset事件')
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
    log("Page-new onLoad");
  },
  onShow: function(options) {
    log("Page-new onShow");
  },
})
