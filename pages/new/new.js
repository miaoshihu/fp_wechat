// pages/new/new.js

const log = require('../../utils/log').log_new
const goodSubmitUrl = require('../../config').goodSubmitUrl
const uploadFileUrl = require('../../config').uploadFileUrl

Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_path_1: "../../imgs/add.jpeg",
    image_path_2: "../../imgs/add.jpeg",
    image1: '',
    image2: '',
  },

  formSubmit: function(e) {

    const app = getApp();

    e.detail.value.user_id = app.globalData.gOpenId;
    e.detail.value.user_nickname = app.globalData.gUserInfo.nickName;
    e.detail.value.image1 = this.data.image1;
    e.detail.value.image2 = this.data.image2;

    log("fromSubmit image1 = " + this.data.image1);
    log("fromSubmit image2 = " + this.data.image2);

    log('fromSubmit ' + JSON.stringify(e.detail.value))

    wx.request({
      url: goodSubmitUrl,
      data: e.detail.value,
      success: function (res) {
        // log("onLaunch -> wx.login self server success " + JSON.stringify(res));
        console.log(res.statusCode)
        console.log("submit success code : " + JSON.stringify(res.data))
      },
      fail: function (res) {
        log("submit faild " + res);
      }
    })
  },

  formReset: function() {
    log('formReset')
  },

  addImage1: function(e) {
    log("addImage1 " + e);
    // var _this = this;
    // wx.chooseImage({
    //   count: 1, //最多可以选择的图片总数
    //   sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
    //   sourceType: ['album', 'camera'],
    //   success: function(res) {
    //     var tempPath = res.tempFilePaths[0];
    //     _this.setData({
    //       image_path_1: tempPath,
    //     });
    //   }
    // });

    this.handleImage1Clicked();
  },

  addImage2: function(e) {
    this.handleImage2Clicked();
  },

  handleImage1Clicked: function(e) {

    log("bindViewTapUpload");
    var that = this;

    wx.chooseImage({
      count: 1,  //最多可以选择的图片总数
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        //启动上传等待中...
        that.showToastUploading(tempFilePaths);

        that.uploadFile1(tempFilePaths[0]);
        log("chose file: " + tempFilePaths[0])
       
      }
    });
  },

  handleImage2Clicked: function (e) {

    log("bindViewTapUpload");
    var that = this;

    wx.chooseImage({
      count: 1,  //最多可以选择的图片总数
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        //启动上传等待中...
        that.showToastUploading(tempFilePaths);

        that.uploadFile2(tempFilePaths[0]);
        log("chose file: " + tempFilePaths[0])

      }
    });
  },

  uploadFile1: function (path) {
    var _this = this;
    wx.uploadFile({
      url: uploadFileUrl,
      filePath: path,
      name: 'uploadfile_ant',
      formData: {
        myname: "lidehua",
      },
      header: {
        "Content-Type": "multipart/form-data"
      },
      success: function (res) {
        var data = JSON.parse(res.data);
        //服务器返回格式: { "Catalog": "testFolder", "FileName": "1.jpg", "Url": "https://test.com/1.jpg" }
        log("upload success " + JSON.stringify(res.data));
        log("upload success2 " + data.filename);
        _this.setData({
          image_path_1: path,
          image1: data.filename,
        });
      },
      fail: function (res) {

        log("upload error !!!!!!!!!!!!!!!!!  " + res.errMsg)

      }
    });
  },

  uploadFile2: function (path) {
    var _this = this;
    wx.uploadFile({
      url: uploadFileUrl,
      filePath: path,
      name: 'uploadfile_ant',
      formData: {
        myname: "lidehua",
      },
      header: {
        "Content-Type": "multipart/form-data"
      },
      success: function (res) {
        var data = JSON.parse(res.data);
        //服务器返回格式: { "Catalog": "testFolder", "FileName": "1.jpg", "Url": "https://test.com/1.jpg" }
        log("upload success " + JSON.stringify(res.data));
        _this.setData({
          image_path_2: path,
          image2: data.filename,
        });
      },
      fail: function (res) {

        log("upload error !!!!!!!!!!!!!!!!!  " + res.errMsg)

      }
    });
  },

  showToastUploading: function (tempFilePaths) {
    wx.showToast({
      title: '正在上传...' + tempFilePaths[0],
      icon: 'loading',
      mask: true,
      duration: 10000
    })
  },

  showToastSuccess: function (res) {

  },

  showToastFailed: function(res) {
    wx.hideToast();
    wx.showModal({
      title: '错误提示',
      content: '上传图片失败' + res.content,
      showCancel: false,
      success: function (res) { }
    })
  },

  onLoad: function(options) {
    log("onLoad");
  },
})
