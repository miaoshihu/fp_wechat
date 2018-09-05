//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    entrances: [
      {
        "title": "招聘",
        "id": "jobs",
        "index": "1",
        "image": "../../imgs/icon1.png",
      },
      {
        "title": "求职",
        "id": "apply",
        "index": "2",
        "image": "../../imgs/icon2.png",
      },
      {
        "title": "出租",
        "id": "rent",
        "index": "3",
        "image": "../../imgs/icon1.png",
      },
      {
        "title": "出售",
        "id": "sale",
        "index": "4",
        "image": "../../imgs/icon2.png",
      },
      {
        "title": "二手物品",
        "id": "second_hand",
        "index": "5",
        "image": "../../imgs/icon1.png",
      },
    ],
    list: [
      {
        "id": 1,
        "type":"jobs",
        "title":"快递员",
        "desc": "中通快递公司招聘全职快递"
      },
      {
        "id": 2,
        "type": "apply",
        "title": "平面设计师",
        "desc": "寻求一份PS类的设计工作"
      },
      {
        "id": 3,
        "type": "rent",
        "title": "幸福家园两居",
        "desc": "1600一个月，押一付三"
      },
      {
        "id": 4,
        "type": "sale",
        "title": "颐和家园三居",
        "desc": "89平,180万，精装修"
      },
      {
        "id": 5,
        "type": "jobs",
        "title": "大巴司机",
        "desc": "上海到苏州的客车，要求5年驾驶经验"
      }
    ],
  },

  onShow: function (options) {
    console.log("onShow called!");
  },

  onEntranceClick: function (event) {
    // console.log(event);
    console.log(event.currentTarget.dataset.info.title+"dd");
    console.log(event.currentTarget.dataset.info.title + "!!!");
    var vid = event.currentTarget.dataset.info.id;
    var title = event.currentTarget.dataset.info.title;
    wx.navigateTo({
      url: '../detail/detail?id=' + vid + '&title=' + title
    })
    // wx.showToast({
    //   title: event.currentTarget.dataset.info.title,
    //   icon: 'none',
    //   duration: 2000
    // });

  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

})
