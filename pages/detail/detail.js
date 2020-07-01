const {
  Spu
} = require("../../model/spu")
const {
  ShoppingWay
} = require("../../core/enum")
const {
  getWindowHeightRpx
} = require("../../utils/system")

// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    spu: Object,
    showRe: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const spu = await Spu.getDetail(options.pid)
    const windH = await getWindowHeightRpx()
    const h = windH - 100
    this.setData({
      spu,
      h
    })
  },

  addCart() {
    this.setData({
      showRe: true,
      orderWay: ShoppingWay.CART
    })
  },
  goToBuy() {
    this.setData({
      showRe: true,
      orderWay: ShoppingWay.BUY
    })
  },
  goToHome() {
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
  goToCart() {
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },

  onSpecChange(event) {
    this.setData({
      specs: event.detail
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})