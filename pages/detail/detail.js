// pages/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    detaildata: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    this.getArticle()
  },
  onPullDownRefresh(){
    this.getArticle(()=>{
      wx.stopPullDownRefresh()
    })
  },
  getArticle(options,callback){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail',
      data: {
        id: this.data.id
      },
      success: res => {
        let result = res.data.result
        this.setArticle(result)
      },
      complete: () => {
        callback && callback()
      }
    })
  },
  setArticle(result){
    console.log(result)
    result.date = result.date.split('T')[0]
    this.setData({
      detaildata: result
    })
  }

})