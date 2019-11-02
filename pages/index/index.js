//index.js
//获取应用实例

const log = require('../../utils/log').log_index
const app = getApp()
const testIndexUrl = require('../../config').testIndexUrl
const duration = 2000

Page({
  data: {
    list: [],
    title: "default"
  },

  onLoad: function(options) {
    log("onLoad called!");

    this.loadData();
  },

  onShow: function(options) {
    log("onShow called!");
  },

  loadData: function() {
    log("loadData ")

    var _this = this;
    var mylist = this.testAddList();

    _this.setData({
      title: "....",
      list: mylist,
    })
  },

  onReachBottom: function() {
    log("onReachBottom");
    var mylist = this.testAddList();
    var _this = this;

    _this.setData({
      title: "....",
      list: mylist,
    })
  },

  testAddList: function() {
    var curList = this.data.list;
    var length = this.data.list.length;
    for (var i = 0; i < 7; i++) {
      curList.push({
        type: (i + length),
        title: "物体 " + (i + length),
      });
    }
    return curList;
  }

})
