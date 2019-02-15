// pages/list/list.js
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[],
    type:null,
    pageNo:1,
    size:10,
    hasMore:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let type = options.type;//1,2,16

    let current = app.globalData.types.filter(item=>item.type==type)[0];
    wx.setNavigationBarTitle({
      title: current.title
    });

    this.setData({type});

    //参数：//method=baidu.ting.billboard.billList&type=1&size=10&offset=0
    this.getData({type});
  },

  getData({ type = this.data.type, size = this.data.size}){
    let offset = (this.data.pageNo-1)*size;
    app.getData({
      data:{
        type,
        size,
        offset
      }
    }).then(data=>{
      if (!data.song_list) {
        this.setData({
          hasMore: false
        })
        return;
      }

      // 设置数据到data
      let datalist = this.data.datalist;
      datalist = datalist.concat(data.song_list);
      this.setData({
        datalist
      })
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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
    if(!this.data.hasMore) return;

    let {pageNo,size} = this.data;
    pageNo++;
    // 计算offset
    let offset = (pageNo - 1) * size;

    this.getData({offset});

    // 修改pageNo
    this.setData({
      pageNo
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})