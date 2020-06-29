const {
  FenceGroup
} = require("../models/fence-group")

// component/realm/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    spu: Object
  },


  data: {},

  observers: {
    "spu": function (spu) {
      if (!spu) {
        return
      }
      const spuList = spu.spuList
      const fenceGroup = new FenceGroup(spu)
      fenceGroup.initFences()
      this.initData(fenceGroup)

    }
  },

  methods: {
    initData(fenceGroup) {
      console.log(fenceGroup.fences);

      this.setData({
        fences: fenceGroup.fences
      })

    }
  }
})