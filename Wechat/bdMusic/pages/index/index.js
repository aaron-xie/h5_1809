//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    recommend: [],
    keyword: '',
    tabs: app.globalData.types,
    tabsData: [],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    sliderWidth:0
  },

  gotoSearch() {
    wx.navigateTo({
      url: '/pages/search/search?keyword=' + this.data.keyword
    })
  },
  handleMore(e){
    //获取传入的索引值
    let index = e.currentTarget.dataset.index;
    let type = this.data.tabs[index].type;

    wx.navigateTo({
      url: '/pages/list/list?type=' + type
    })
  },
  onLoad: function() {
    app.getData({
      data:{
        type:2
      }
    }).then(data=>{
     data = data.song_list;
      console.log(data);

      let recommend = data.slice(0, 5);



      // 获取最热门的歌曲名，并写入搜索框
      data.sort((a, b) => b.hot - a.hot);

      // 设置数据到data
      this.setData({
        recommend,
        keyword: data[0].title
      });
    })

    // 获取设备信息
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log('info:', res, that.data.tabs.length);
        // px与rpx的换算比例
        let rpx = 750 / res.windowWidth;

        //像素宽度
        let itemWidth = res.windowWidth / that.data.tabs.length;
        // rpx宽度
        let itemWidthRpx = rpx * itemWidth

        that.setData({
          //sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderWidth: itemWidthRpx,
          sliderOffset: itemWidthRpx * that.data.activeIndex
        });
      }
    });

    this.getData(0);
  },

  // 跳转到播放器
  gotoPlayer(e){
    wx.navigateTo({
      url: '/pages/player/player?songid=' + e.currentTarget.dataset.songid
    })
  },
  tabClick: function (e) {
    //e.currentTarget.id为索引值
    let idx = e.currentTarget.id
    this.setData({
      sliderOffset: idx * this.data.sliderWidth,
      activeIndex: idx
    });

    this.getData(idx);
  },
  getData(idx){
    app.getData({
      data:{
        type: this.data.tabs[idx].type,
        size: 5,
      }
    }).then(data=>{
      data = data.song_list;
      let arr = this.data.tabsData;
      arr[idx] = data;

      this.setData({
        tabsData: arr
      })
    })
  },
  onShow() {
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
  onShareAppMessage() {
    console.log('page onShareAppMessage');
    return {
      title: '今天是个特殊的日子，终于熬到初十了',
      path: '/pages/index/index',
      imageUrl: '/img/g3.jpg'
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