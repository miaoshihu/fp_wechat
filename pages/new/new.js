// pages/new/new.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_path_1: "../../imgs/add.jpeg",
    image_path_2: "../../imgs/add.jpeg"
  },

  bindInputName: function (e) {
    console.log("Page-new bindInputName e " + e.detail.value);
  },

  formSubmit: function (e) {
    console.log('Page-new form发生了submit事件，携带数据为hh：', e)
  },

  formReset: function () {
    console.log('Page-new form发生了reset事件')
  },

  onLoad: function (options) {
    console.log("Page-new onLoad");
  },
  onShow: function (options) {
    console.log("Page-new onShow");
  },
})