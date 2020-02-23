//index.js
//获取应用实例

const log = require('../../utils/log').log_needs
const app = getApp()
const listUrl = require('../../config').needListUrl
const duration = 2000

var curPage = 1;

Page({
  data: {
    list: [],
    title: "default"
  },

  onLoad: function (options) {
    log("onLoad");
    wx.setNavigationBarTitle({
      title: "求购"
    })
    this.loadData();
  },

  loadData: function () {
    log("loadData")

    var _this = this;
    var mylist = this.testAddList();
    var mylist2 = this.getList(curPage++);

    _this.setData({
      title: "....",
      list: mylist,
    })
  },

  getList: function (page) {
    console.log("getList page = " + page)
    var mydata = {}
    mydata.page = page;
    console.log(mydata)
    wx.request({
      url: listUrl,
      data: mydata,
      success: function (res) {
        // log("onLaunch -> wx.login self server success " + JSON.stringify(res));
        // console.log(res.statusCode)
        console.log("getNeedList success code : " + JSON.stringify(res.data))
      },
      fail: function (res) {
        log("getNeedList faild " + res);
      }
    })
  },

  handleClick: function (e) {
    // var id = e.currentTarget.dataset['id'];
    // var title = e.currentTarget.dataset['title'];
    // log("handleClick  " + id + " " + title);
    // this.launchPage(id,title);
    this.getList(curPage++)
  },

  onReachBottom: function () {
    log("onReachBottom");
    var mylist = this.testAddList();
    var _this = this;

    _this.setData({
      title: "....",
      list: mylist,
    })
  },

  launchPage: function (id, title) {
    log("launchPage " + id + " , " + title);
    wx.navigateTo({
      url: '../detail/detail?id=' + id + "&title=" + title,
    })
  },

  testAddList: function () {
    var curList = this.data.list;
    var length = this.data.list.length;
    for (var i = 0; i < 7; i++) {
      curList.push({
        id: (i + length),
        title: "求购 物体 " + (i + length),
        desc: "急需一台二手电动车，能用，接送孩子使用，要求好骑,八九成新就行",
        address: "花香小镇",
        nickname: "Alice",
        time: "11-26 08:50",
        price: "¥ " + this.testGeneratePrice(),
      });
    }
    return curList;
  },

  testGeneratePrice: function () {
    return parseInt(Math.random() * 300);
  },

})
