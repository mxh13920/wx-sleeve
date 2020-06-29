// component/spu-preview/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: Object
  },

  data: {
    tags: Object
  },

  observers: {
    data: function (data) {
      if (!data) {
        return
      }

      if (!data.tags) {
        return
      }
      const tags = data.tags.split("$")
      this.setData({
        tags
      })
    }

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onItem(e) {
      const pid = e.currentTarget.dataset.pid
      wx.navigateTo({
        url: `/pages/detail/detail?pid=${pid}`
      })
    }
  }
})