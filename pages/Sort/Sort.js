// pages/Sort/Sort.js
Page({
  /*页面的初始数据*/
  data: {},
  // 通用的跳转函数
  navigateToPage(event) {
    const url = event.currentTarget.dataset.url; // 获取 data-url 里的地址
    wx.navigateTo({
      url: url
    });
  },
  /*生命周期函数--监听页面加 载*/
  onLoad(options) {
  },
  /*生命周期函数--监听页面初次渲染完成*/
  onReady() {
  },
  /*生命周期函数--监听页面显示*/
  onShow() {
  },
  /*生命周期函数--监听页面隐藏*/
  onHide() {
  },
  /*生命周期函数--监听页面卸载*/
  onUnload() {
  },
  /*页面相关事件处理函数--监听用户下拉动作*/
  onPullDownRefresh() {
  },
  /*页面上拉触底事件的处理函数*/
  onReachBottom() {
  },
  /*用户点击右上角分享*/
  onShareAppMessage() {
  }
})