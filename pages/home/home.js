const {
  Theme
} = require("../../model/theme");
const {
  Banner
} = require("../../model/banner");
const {
  Category
} = require("../../model/category");
const {
  Activity
} = require("../../model/activity");
const {
  SpuPaging
} = require("../../model/spu-paging");

// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    themeA: null,
    themeE: null,
    bannerB: null,
    grid: [],
    activityD: null,
    themeESpuList: null,
    themeESpu: [],
    themeF: null,
    bannerG: null,
    themeH: null,
    spuPaging: null,
    loadType: 'loading'
  },


  async onLoad(res) {
    this.initDate();
    this.getBottom();
  },

  async getBottom() {
    const paging = SpuPaging.getLatestPaging();
    this.data.spuPaging = paging;
    const data = await paging.getMoreData();
    if (!data) {
      return
    }
    wx.lin.renderWaterFlow(data.items)
  },
  async initDate() {
    const themes = new Theme();
    await themes.getThemes()
    const themeA = themes.getHomeLocationA();
    const themeE = themes.getHomeLocationE();
    const themeF = themes.getHomeLocationF();
    let themeESpu = [];
    if (themeE.online) {
      const data = await Theme.getHomeLocationESpu();
      if (data) {
        themeESpu = data.spu_list.slice(0, 8)
      }
    }
    const bannerB = await Banner.getHomeLocationB();
    const grid = await Category.getCategoryGrid();
    const activityD = await Activity.getHomeLocationD();
    const bannerG = await Banner.getHomeLocationG();
    const themeH = themes.getHomeLocationH();
    this.setData({
      themeA,
      themeE,
      themeESpu,
      bannerB,
      grid,
      activityD,
      themeF,
      bannerG,
      themeH
    })
  },

  onReachBottom: async function () {
    const data = await this.data.spuPaging.getMoreData()
    if (!data) {
      return
    }
    wx.lin.renderWaterFlow(data.items)
    if (!data.getMoreData) {
      this.setData({
        loadType: 'end'
      })
    }
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


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})