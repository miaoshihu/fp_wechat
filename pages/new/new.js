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

  bindInputName: function (e) {
    log("Page-new bindInputName e " + e.detail.value);
  },

  formSubmit: function (e) {
    log('Page-new form发生了submit事件，携带数据为hh：', e)
  },

  formReset: function () {
    log('Page-new form发生了reset事件')
  },

  onLoad: function (options) {
    log("Page-new onLoad");
  },
  onShow: function (options) {
    log("Page-new onShow");
  },
})
