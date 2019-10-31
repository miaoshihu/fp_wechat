//index.js
//获取应用实例

const app = getApp()
const requestUrl = require('../../config').requestUrl
const duration = 2000

Page({
  data: {
    list: [
    ]
  },
  //事件处理函数
  bindViewTapUpload: function () {

    console.log("bindViewTapUpload");
    var that = this;

    wx.chooseImage({
      count: 1,  //最多可以选择的图片总数
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        //启动上传等待中...
        wx.showToast({
          title: '正在上传...'+ tempFilePaths[0],
          icon: 'loading',
          mask: true,
          duration: 10000
        })

        console.log("chose #################### " + tempFilePaths[0])

        wx.uploadFile({
          url: 'http://localhost/upload/',
          filePath: tempFilePaths[0],
          name: 'uploadfile_ant',
          formData: {
          },
          header: {
            "Content-Type": "multipart/form-data"
          },
          success: function (res) {
            // var data = JSON.parse(res.data);
            //服务器返回格式: { "Catalog": "testFolder", "FileName": "1.jpg", "Url": "https://test.com/1.jpg" }
            console.log("upload success &&&&&&&&&&&&&success&&&&&&&&&&&&" + res);
          },
          fail: function (res) {

            console.log("upload error !!!!!!!!!!!!!!!!!  " + res.errMsg)
            wx.hideToast();
            wx.showModal({
              title: '错误提示',
              content: '上传图片失败' + res.content,
              showCancel: false,
              success: function (res) { }
            })
          }
        });
      }
    });
  },
  lower: function () {
    console.log("lower............")
  },

  loadData: function () {

    console.log("loadData %%%%%%%%%")
    // wx.request({
    //   // url: 'test.php', //仅为示例，并非真实的接口地址
    //   url: "test.php",
    //   data: {
    //     sid: 's1',
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })
  },

  onLoad: function (options) {
    console.log("onLoad called!");
    this.loadData();
  },
  onShow: function (options) {
    console.log("onShow called!");
  },

})
