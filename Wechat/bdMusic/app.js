//app.js
App({
  onLaunch: function() {
    console.log('onLaunch')
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow() {
    console.log('onShow')
  },
  onHide() {
    console.log('onHide')
  },
  getData({ url = 'https://tingapi.ting.baidu.com/v1/restserver/ting',data={}}) {
    let opt = {
      url,
      data: {
        method: 'baidu.ting.billboard.billList',
        type:1,
        size:10,
        offset:0,
        ...data
      }
    }

    return new Promise((resolve,reject)=>{
      wx.request({
        url: opt.url,
        data: opt.data,
        success: (res) => {
          let data = res.data;
          resolve(data)
        },
        fail:err=>{
          reject(err)
        }
      })
    })
    
  },
  globalData: {
    types: [{
      type: 1,
      alias: '新歌',
      title: '新歌榜'
    }, {
      type: 16,
      alias: '流行',
      title: '流行音乐'
    }, {
      type: 21,
      alias: '欧美',
      title: '欧美金曲'
    }, {
      type: 25,
      alias: '网络',
      title: '网络神曲'
    }, {
      type: 11,
      alias: '摇滚',
      title: '摇滚重金属'
    }, {
      type: 22,
      alias: '经典',
      title: '经典老歌榜'
    }]
  },

})