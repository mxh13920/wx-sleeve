// component/spu-desciprion/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    spu: Object,
    tags: Array
  },

  observers: {
    "spu": function (spu) {
      if (!spu) {
        return
      }
      if (!spu.tags) {
        return
      }
      const tags = spu.tags.split("$")
      this.setData({
        tags
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})