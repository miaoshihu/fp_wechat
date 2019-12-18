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
    this.getList(curPage++);
  },

  getList: function(page) {
    console.log("getList page = " + page)
    var mydata = {}
    var _this = this;
    mydata.page = page;
    console.log(mydata)
    wx.request({
      url: goodListUrl,
      data: mydata,
      success: function (res) {
        // log("onLaunch -> wx.login self server success " + JSON.stringify(res));
        // console.log(res.statusCode)
        if (res.data.code != 0) {
          console.log("code != 0 !!!!!!!!!!");
          return;
        }
        var newlist = _this.parseData(res.data.data);
        _this.setData({
          list: newlist,
        })
        console.log("getList success code : " + JSON.stringify(res.data))
      },
      fail: function (res) {
        log("getList faild " + res);
      }
    })
  },

  parseData: function(data) {
    console.log("parseData1 = " + data);
    console.log("parseData2 = " + JSON.stringify(data));
    
    var curList = this.data.list;
    var length = this.data.list.length;

    for (var k = 0; k < data.length; k++) {
      var item = data[k];
      console.log("pushg " + item.id + " " + item.name + " " + item.user_nickname);
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
      });
      
    }
    return curList;
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

  },

  launchPage: function(id, title) {
    log("launchPage " + id + " , " + title);
    wx.navigateTo({
      url: '../detail/detail?id=' + id + "&title=" + title,
    })
  },

})
