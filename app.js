//app.js
App({
  onLaunch: function (options) {

    console.log("App() onLaunch options.path = " + options.path);
    console.log("App() onLaunch options.query = " + options.query);
    console.log("App() onLaunch options.scene = " + options.scene);
    console.log("App() onLaunch options.shareTicket = " + options.shareTicket);

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


    // wx.login({
    //   success: function (res) {

    //     wx.request({
    //       url: 'http://127.0.0.1:8077/fps/wechat_login',
    //       data: {
    //         code: res.code,
    //         app_id: "my_app_id",
    //         app_secret: "my_app_secret"
    //       },
    //       success: function (res) {
    //         console.log("wx.request fps server success ***********")     
    //         console.log("res = " + res.data)
    //         console.log(res.statusCode)      
    //       }
    //     })

    //   }
    // })
  },

  globalData: {
    userInfo: null
  }
})
