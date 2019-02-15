// pages/search/search.js
let timer;
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword:'',
    result:[],
    showInput:true,//是否显示搜索框
  },

  handlerSearch(e){console.log(e)
    let keyword = e.detail.value;
    if(keyword.length<=0) {
      this.setData({
        result:[]
      });
      return;
    }
    this.setData({
      keyword
    })
    clearTimeout(timer)
    timer = setTimeout(()=>{
      this.getData(keyword);
    },500)
    
  },

  // 点击搜索按钮
  handleShowInput(){
    this.setData({
      showInput:true
    })
  },
  handleHideInput(){
    this.setData({
      showInput: false
    })
  },

  clearInput(){
    this.setData({
      keyword:'',
      result:[]
    })
  },

  getData(keyword){
    app.getData({
      data: {
        method: 'baidu.ting.search.catalogSug',
        query: keyword
      }
    }).then(data=>{console.log('data:',data)
      data = data.song;
      console.log(data);



      // 设置数据到data
      this.setData({
        result: data
      });
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let {keyword} = options

    this.setData({
      keyword
    })
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