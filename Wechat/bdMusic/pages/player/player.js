// pages/player/player.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songinfo:{},
    player:null,
    paused:true
  },

  // 下载歌词
  handleDownload(){
    wx.downloadFile({
      url: this.data.songinfo.lrclink,
      success:()=>{
        console.log('success')
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {songid} = options;

    // 根据id获取歌曲信息
    // method=baidu.ting.song.play&songid=877578
    app.getData({
      data:{
        method:'baidu.ting.song.playAAC',
        songid
      }
    }).then(data=>{
      console.log('歌曲信息：',data)
      this.setData({
        songinfo:{
          ...data.songinfo,
          ...data.bitrate
        }
      })

      let player = wx.createInnerAudioContext();
      player.src = data.bitrate.file_link;
      // 暂停事件
      player.onPause(()=>{console.log('paused')
        this.setData({
          paused:true
        })
      });
      player.onPlay(() => {console.log('play')
        this.setData({
          paused: false
        })
      })
      this.setData({
        player
      })
    })
  },

  play() {
    console.log(this.data.player)
    let {player} = this.data;
    if(player.paused){
      player.play();
    }else{
      player.pause();
    }
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //let {songinfo} = this.data;
    
    // player.play();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.data.player.destroy()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})