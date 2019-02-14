//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    recommend:[],
    keyword:''
  },

  gotoSearch(){
    wx.navigateTo({
      url:'/pages/search/search?keyword='+this.data.keyword
    })
  },
  onLoad: function () {
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting',
      data: {
        method: 'baidu.ting.billboard.billList',
        type: 2,
        size: 10,
        offset: 0
      },
      success: (res) => {
        let data = res.data.song_list;
        console.log(data);
        
        let recommend = data.slice(0, 5);

        

        // 获取最热门的歌曲名，并写入搜索框
        data.sort((a,b)=>b.hot-a.hot);

        // 设置数据到data
        this.setData({
          recommend,
          keyword:data[0].title
        });
      }
    })
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
