//index.js
//获取应用实例

const log = require('../../utils/log').log_index
const app = getApp()
const goodListUrl = require('../../config').goodListUrl
const duration = 2000

var curPage = 1;

Page({
  data: {
    list: [],
    title: "default"
  },

  onLoad: function(options) {
    log("onLoad");

    this.loadData();
  },

  loadData: function() {
    log("loadData")

    var _this = this;
    var mylist2 = this.getList(curPage++);

    _this.setData({
      title: "....",
      list: mylist2,
    })
  },

  getList: function(page) {
    console.log("getList page = " + page)
    var mydata = {}
    mydata.page = page;
    console.log(mydata)
    wx.request({
      url: goodListUrl,
      data: mydata,
      success: function (res) {
        // log("onLaunch -> wx.login self server success " + JSON.stringify(res));
        // console.log(res.statusCode)
        console.log("getList success code : " + JSON.stringify(res.data))
      },
      fail: function (res) {
        log("getList faild " + res);
      }
    })
  },

  handleClick: function(e) {
    // var id = e.currentTarget.dataset['id'];
    // var title = e.currentTarget.dataset['title'];
    // log("handleClick  " + id + " " + title);
    // this.launchPage(id,title);
    this.getList(curPage++)
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

  launchPage: function(id, title) {
    log("launchPage " + id + " , " + title);
    wx.navigateTo({
      url: '../detail/detail?id=' + id + "&title=" + title,
    })
  },

  testAddList: function() {
    var curList = this.data.list;
    var length = this.data.list.length;
    for (var i = 0; i < 7; i++) {
      curList.push({
        id: (i + length),
        title: "物体 " + (i + length),
        desc: "刚买的一个月，这个可好用了，一直舍不得用，现在卖出去，大家不要抢的太凶",
        address: "花香镇",
        nickname: "Alice",
        time: "11-26 08:50",
        price: "¥ " + 1,
        image1: "",
        image2: "",
      });
    }
    return curList;
  },

})
