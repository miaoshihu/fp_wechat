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

  onLoad: function (options) {
    log("onLoad called!");

    this.loadData();
  },

  onShow: function (options) {
    log("onShow called!");
  },

  loadData: function () {
    log("loadData ")

    var _this = this;
    var mylist = this.testAddList();

    _this.setData({
      title: "....",
      list: mylist,
    })
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

  testAddList: function () {
    var curList = this.data.list;
    var length = this.data.list.length;
    for (var i = 0; i < 7; i++) {
      curList.push({
        type: (i + length),
        title: "物体 " + (i + length),
        price: this.testGeneratePrice() + "元",
        image1: this.generateImage(),
        image2: this.generateImage(),
      });
    }
    return curList;
  },

  testGeneratePrice: function() {
    return parseInt(Math.random() * 300);
  },

  generateImage: function () {
    var list = [
      "https://android-screenimgs.25pp.com/fs08/2019/08/06/7/109_5a2aa003ed42083d7516ec9f83b44019_234x360.jpg",
      "https://android-screenimgs.25pp.com/fs08/2019/08/06/1/109_eb84b0e60a186d8e190966318ea64c11_234x360.jpg",
      "https://android-screenimgs.25pp.com/fs08/2019/08/06/7/109_782857e0828f5f395d1ecea00cabf24f_234x360.jpg",
      "https://android-screenimgs.25pp.com/fs08/2019/08/06/4/109_b88738d6aaf289b193f4b87efd6b0461_234x360.jpg",
      "https://android-screenimgs.25pp.com/fs08/2019/10/15/7/110_795c0870b67927ea8d762ff9c6dbc891_234x360.jpg",
      "https://android-screenimgs.25pp.com/fs08/2019/10/15/2/110_4350c692352f48962c78d48781898fdb_234x360.jpg",
      "https://android-screenimgs.25pp.com/fs08/2019/10/15/3/110_fee734e01ddcac9a3457cbff0a575536_234x360.jpg",
      "https://android-screenimgs.25pp.com/fs08/2019/10/15/9/110_5d104e23a02925014ef71e13c682b78b_234x360.jpg",
      "https://android-screenimgs.25pp.com/fs08/2019/10/15/10/110_eceef0a721904adf2442495890df0c87_234x360.jpg",
      "https://android-screenimgs.25pp.com/fs08/2019/09/18/1/110_8a083d3e1d7b07fab76e269ad908aa32_234x360.jpg",
      "https://android-screenimgs.25pp.com/fs08/2019/09/18/7/110_aec22cd89a488962f651ffa1577ee57f_234x360.jpg",
      "https://android-screenimgs.25pp.com/fs08/2019/09/18/8/110_1a949466b0a53d06cc231c13eb3df1c7_234x360.jpg",
      "https://android-screenimgs.25pp.com/fs08/2019/09/18/0/110_fde50f4c0cc8c7c44232c81f519b7bb7_234x360.jpg",
      "https://android-screenimgs.25pp.com/fs08/2019/07/30/3/110_58f8c211ba92e76ae1f7024dfbf47fd0_234x360.jpg",
      "https://android-screenimgs.25pp.com/fs08/2019/07/30/0/110_777198276689b170b2497f70635c20c5_234x360.jpg",
      "https://android-screenimgs.25pp.com/fs08/2019/07/30/0/110_ba3318a1c76abd22de18a767a83d7b79_234x360.jpg",
      "https://android-screenimgs.25pp.com/fs08/2019/07/30/8/110_6ca08c2688bc5e125fff78a2939a3827_234x360.jpg",
      "https://android-screenimgs.25pp.com/fs08/2019/09/20/7/110_de6ae7691f74aab6159c747957586f67_234x360.jpg",
      "https://android-screenimgs.25pp.com/fs08/2019/09/20/0/110_527c78768a2365b8bae7efc1388c0788_234x360.jpg",
      "https://android-screenimgs.25pp.com/fs08/2019/09/20/4/110_bcc4208f7a63db051f7b122e8a563c39_234x360.jpg",
      "https://android-screenimgs.25pp.com/fs08/2019/09/20/2/110_12b4e67ca691cd46803191e14aea8ee3_234x360.jpg",

    ]

    var index = parseInt(Math.random() * list.length);
    return list[index];
  }

})
