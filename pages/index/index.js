//index.js
//获取应用实例

const log = require('../../utils/log').log_index
const app = getApp()
const testIndexUrl = require('../../config').testIndexUrl
const duration = 2000

Page({
  data: {
    list: [
    ],
    title: "default"
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  lower: function () {
    log("lower............")
  },

  loadData: function () {

    var _this = this

    _this.setData({
      title: "...."
    })

    log("loadData %%%%%%%%%")
    // wx.request({
    //   // url: 'test.php', //仅为示例，并非真实的接口地址
    //   url: testIndexUrl,
    //   data: {
    //     sid: 's1',
    //     code: "java",
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log("*****33********" + res.data)
    //     _this.setData({
    //       title: res.data
    //     })
    //   },
    //   fail: function (res) {
    //     console.log("*****44********" + res.data)
    //     _this.setData({
    //       title: "failed" + res.errMsg
    //     })
    //   },
    // })
  },

  onLoad: function (options) {
    log("onLoad called!");

    this.loadData();
  },
  onShow: function (options) {
    log("onShow called!");
  },

})
