Page({

  /**
   * 页面的初始数据
   */
  data: {
    newstip:[ { name: '国内'}, {name: '国际'}, {name: '财经'}, {name: '娱乐'}, {name: '军事'}, {name: '体育'}, {name:'其他'}],
    hotnews: { title: 'title', source: 'source', time: 'time', firstImage:'http://img1.gtimg.com/news/pics/hv1/38/85/1076/69988613.jpg'},
    newdata: [{
      "id": 1519631218506,
      "title": "外媒称香港回归15年打破“经济将死”预言",
      "date": "2012-07-01",
      "source": "中国新闻网",
      "firstImage": "http://img1.gtimg.com/news/pics/hv1/38/85/1076/69988613.jpg"
    },
      {
        "id": 1519631218591,
        "title": "实德指媒体窃公司机密 已向某媒体递律师函",
        "date": "2012-04-21",
        "source": "腾讯财经",
        "firstImage": "http://img1.gtimg.com/finance/pics/hv1/33/207/1023/66573393.jpg"
      },
      {
        "id": 1519631218595,
        "title": "公务员医疗费用成迷 学者呼吁管理应公开透明",
        "date": "2012-02-26",
        "source": "财新网",
        "firstImage": "http://img1.gtimg.com/finance/pics/hv1/241/102/983/63945826.jpg"
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})