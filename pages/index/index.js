//index.js
//获取应用实例

const log = require('../../utils/log').log_index
const app = getApp()
const goodListUrl = require('../../config').goodListUrl
const duration = 2000

var curPage = 1;
var pages = -1;

Page({
  data: {
    list: [],
    title: "default"
  },

  onLoad: function (options) {
    log("onLoad");

    this.loadData();
  },

  loadData: function () {
    log("loadData")

    var _this = this;
    this.getList();
  },

  getList: function () {
    log("getList curPage = " + curPage)
    var mydata = {}
    var _this = this;
    mydata.page = curPage;
    wx.request({
      url: goodListUrl,
      data: mydata,
      success: function (res) {
        // log("onLaunch -> wx.login self server success " + JSON.stringify(res));
        // console.log(res.statusCode)
        if (res.data.code != 0) {
          log("getList curPage = " + curPage + " success , but code != 0 !!!!!!!!!!");
          return;
        }
        log("getList curPage = " + curPage + " success lenth = " + res.data.data.length)
        pages = res.data.total;
        var newlist = _this.parseData(res.data.data);
        _this.setData({
          list: newlist,
        })
        // console.log("getList success code : " + JSON.stringify(res.data))
      },
      fail: function (res) {
        log("getList curPage = " + curPage + "  faild " + res.errMsg);
      }
    })

    curPage += 1;
  },

  parseData: function (data) {
    // console.log("parseData = " + JSON.stringify(data));

    var curList = this.data.list;
    var length = this.data.list.length;

    for (var k = 0; k < data.length; k++) {
      var item = data[k];
      log("parse good " + item.id + " " + item.name + " " + item.user_nickname);
      curList.push({
        id: item.id,
        title: item.name,
        desc: item.short_desc,
        address: item.address,
        nickname: item.user_nickname,
        time: item.create_time,
        price: item.price,
        image1: item.image1,
        image2: item.image2,
        time: this.getDateTime(item.time_stamp),
      });

    }
    return curList;
  },

  handleClick: function (e) {
    var id = e.currentTarget.dataset['id'];
    var title = e.currentTarget.dataset['title'];
    log("handleClick  " + id + " " + title);
    this.launchPage(id,title);
    // this.getList(curPage++)
  },

  onReachBottom: function () {
    log("onReachBottom " + curPage + " , pages = " + pages);
    if (curPage <= pages) {
      this.getList();
    }
  },

  launchPage: function (id, title) {
    log("launchPage " + id + " , " + title);
    wx.navigateTo({
      url: '../detail/detail?id=' + id + "&title=" + title,
    })
  },

  getDateTime: function (time_stamp) {
    // log("getDateTime " + time_stamp);
    var date = new Date(time_stamp * 1000);
    // var Y = date.getFullYear() + '-';
    var month = date.getMonth();
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var M = (month + 1 < 10 ? '0' + (month + 1) : month + 1) + '-';
    var D = day < 10 ? '0' + day + ' ': day + ' ';
    var h = hour < 10 ? '0' + hour + ':' : hour + ':';
    var m = min < 10 ? '0' + min : min;
    // return Y + M + D + h + m;
    return M + D + h + m;
  },
})
