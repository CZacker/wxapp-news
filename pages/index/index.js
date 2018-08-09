Page({

  /**
   * 页面的初始数据
   */
  data: {
    newstip: [{ name: '国内', id: 'gn' }, { name: '国际', id: 'gj' }, { name: '财经', id: 'cj' }, { name: '娱乐', id: 'yl' }, { name: '军事', id: 'js' }, { name: '体育', id: 'ty' }, { name: '其他', id: 'other'}],
    hotnews: [],
    newdata: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNews()
  },
  onPullDownRefresh() {
    this.getNews(() => {
      wx.stopPullDownRefresh()
    })
  },
  getNews(callback) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type: 'gn'
      },
      success: res => {
        let result = res.data.result
        this.setNews(result)
      },
      complete: () => {
        callback && callback()
      }
    })
  },
  setNews(result) {
    console.log(result)
    result.map( u => { u.date = u.date.split('T')[0] })
    let hotnewdata = result[0];
    let newsdata = result.shift();
    this.setData({
      hotnews: hotnewdata,
      newdata: result
    })
  },
})
