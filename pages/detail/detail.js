// pages/detail/index.js

const log = require('../../utils/log').log_detail
const goodUrl = require('../../config').goodUrl

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    title: "",
    price: "",
    short_desc: "",
    descs: "",
    phone: "",
    address: "",
    image1: "",
    image2: "",
    time: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    log("onLoad " + options.id + " " + options.title);
    wx.setNavigationBarTitle({
      title: "详情"
    })
    this.loadData(options.id);
  },

  loadData: function(id) {
    log("loadData id = " + id)
    var _this = this;
    var mydata = {}
    mydata.id = id;

    wx.request({
      url: goodUrl,
      data: mydata,
      success: function(res) {
        if (res.data.code != 0) {
          log("loadData id = " + id + "success , but code = " + res.data.code);
          return;
        }
        var good = res.data.data;
        log("loadData id = " + id + "success , good = " + JSON.stringify(good));
        _this.setData({
          id: good.id,
          name: good.name,
          price: good.price,
          short_desc: good.short_desc,
          descs: good.descs,
          phone: good.phone,
          nickname: good.user_nickname,
          time: _this.getDateTime(good.time_stamp),
          address: good.address,
          image1: good.image1,
          image2: good.image2,
        })
        // console.log("getList success code : " + JSON.stringify(res.data))
      },
      fail: function(res) {
        log("loadData id = " + id + " faild " + res.errMsg);
      }
    })
  },

  phoneCall: function(e) {
    var phone = this.data.phone;
    log("phoneCall " + phone);
    wx.makePhoneCall({
      phoneNumber: phone,
    });
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    log("onUnload");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    var _this = this;
    log("onShareAppMessage id = " + _this.data.id + " , title = " + _this.data.name);
    return {
      title: '出售 ' + _this.data.name + "  " + _this.data.price + "元",
      path: 'pages/detail/detail?id=' + _this.data.id, // 路径，传递参数到指定页面。
      imageUrl: _this.data.image1,
      success: (res) => {
        console.log("转发成功", res);
      },
      fail: (res) => {
        console.log("转发失败", res);
      }
    }
  },

  getDateTime: function(time_stamp) {
    // log("getDateTime " + time_stamp);
    var date = new Date(time_stamp * 1000);
    // var Y = date.getFullYear() + '-';
    var month = date.getMonth();
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var M = (month + 1 < 10 ? '0' + (month + 1) : month + 1) + '-';
    var D = day < 10 ? '0' + day + ' ' : day + ' ';
    var h = hour < 10 ? '0' + hour + ':' : hour + ':';
    var m = min < 10 ? '0' + min : min;
    // return Y + M + D + h + m;
    return M + D + h + m;
  },
})
