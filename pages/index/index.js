//index.js
//获取应用实例
const app = getApp()
const requestUrl = require('../../config').requestUrl
const duration = 2000

Page({
  data: {
    list: [
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  lower: function () {
    console.log("lower............")
  },

  loadData: function () {

    console.log("loadData %%%%%%%%%")
    wx.request({
      // url: 'test.php', //仅为示例，并非真实的接口地址
      url: "test.php",
      data: {
        sid: 's1',
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },

  onLoad: function (options) {
    console.log("onLoad called!");
    this.loadData();
  },
  onShow: function (options) {
    console.log("onShow called!");
  },

})