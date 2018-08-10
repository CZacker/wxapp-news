// pages/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    detaildata: {},
    loadingModalHide: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
      loadingModalHide: false
    })
    setTimeout(()=>{
    this.getArticle();},500)
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
        callback && callback() //加入回调函数
      }
    })
  },
  setArticle(result){
    console.log(result)
    result.date = result.date.split('T')[0]//切割时间
    this.setData({
      loadingModalHide: true,
      detaildata: result
    })
  }

})