//index.js
//获取应用实例
const app = getApp();
const page = getCurrentPages();
console.log(app, page)

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    username:app.globalData.username
  },
  //事件处理函数
  bindViewTap: function() {
    wx.reLaunch({
      url: '../list/list'
    })
  },

  //编程式导航跳转
  handlerGo(e){
    wx.switchTab({
      url: '/pages/list/list',
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow(){
    console.log('page onShow')
  },
  onReady() {
    console.log('page onReady')
  },
  onHide() {
    console.log('page onHide')
  },
  onUnload() {
    console.log('page onUnload')
  }, 
  onPullDownRefresh() {
    console.log('page onPullDownRefresh')
  },
  onReachBottom() {
    console.log('page onReachBottom')
  },
  onPageScroll(obj) {
    //console.log('page onPageScroll',obj.scrollTop)
  },
  onShareAppMessage(){
    console.log('page onShareAppMessage');
    return {
      title:'今天是个特殊的日子，终于熬到初十了',
      path:'/pages/index/index',
      imageUrl:'/img/g3.jpg'
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
