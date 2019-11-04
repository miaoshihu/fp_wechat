// pages/detail/index.js

const log = require('../../utils/log').log_detail

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "0",
    title: "title",
    price: "12",
    short_desc: "short desc",
    desc: "desc",
    phone: "185xxx",
    address: "花田小区",
    image1: "",
    image2: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    log("onLoad " + options.id + " " + options.title);
    this.setData({ id: options.id, title: options.title });
  },

  phoneCall: function (e) {
    var phone = e.currentTarget.dataset.phone;
    log("phoneCall " + phone);
    wx.makePhoneCall({
      phoneNumber: phone,
    });
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    log("onUnload");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    log("onShareAppMessage");
  }
})
