// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword:'',
    result:[],
    showInput:true
  },

  handlerSearch(e){
    let keyword = e.detail.value;
    if(keyword.length<=0) return;
    this.getData(keyword);
  },

  clearInput(){
    this.setData({
      keyword:'',
      result:[],
      showInput:true
    })
  },

  getData(keyword){
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting',
      data: {
        method: 'baidu.ting.search.catalogSug',
        query: keyword
      },
      success: (res) => {
        let data = res.data.album;
        console.log(data);



        // 设置数据到data
        this.setData({
          keyword,
          result: data
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let {keyword} = options

    this.getData(keyword);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})