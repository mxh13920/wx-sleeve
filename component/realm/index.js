const {
  FenceGroup
} = require("../models/fence-group")
const {
  Judger
} = require("../models/judger")
const {
  Spu
} = require("../../model/spu")
const {
  Cell
} = require("../models/cell")

// component/realm/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    spu: Object
  },


  data: {
    judger: Object,
    previewImg: String
  },

  observers: {
    "spu": function (spu) {
      if (!spu) {
        return
      }


      if (Spu.isNoSpec(spu)) {
        this.processNoSpec(spu)
      } else {
        this.processHasSpec(spu)

      }



    }
  },

  methods: {

    processNoSpec(spu) {
      this.setData({
        noSpec: true
      })
      this.bindSkuData(spu.sku_list[0])
    },
    processHasSpec(spu) {
      const spuList = spu.spuList
      const fenceGroup = new FenceGroup(spu)
      fenceGroup.initFences()
      const judger = new Judger(fenceGroup)
      this.data.judger = judger

      const defaultSku = fenceGroup.getDefaultSku()
      if (defaultSku) {
        this.bindSkuData(defaultSku)
      } else {
        this.bindSpuData()
      }
      this.bindTipData()
      this.bindFenceGroupData(fenceGroup)
    },

    bindSpuData() {
      const spu = this.properties.spu
      this.setData({
        previewImg: spu.img,
        title: spu.title,
        price: spu.price,
        discountPrice: spu.discount_price,

      })
    },

    bindSkuData(sku) {
      // console.log(sku)
      this.setData({
        previewImg: sku.img,
        title: sku.title,
        price: sku.price,
        discountPrice: sku.discount_price,
        stock: sku.stock,
      })
    },


    bindTipData() {

      this.setData({
        skuIntact: this.data.judger.isSkuIntact(),
        currentValues: this.data.judger.getCurrentValues(),
        missingKeys: this.data.judger.getMissingKeys()
      })
    },
    bindFenceGroupData(fenceGroup) {
      // console.log(fenceGroup.fences);
      this.setData({
        fences: fenceGroup.fences,
      })

    },

    onCellTap(e) {
      const data = e.detail.cell

      const x = e.detail.x
      const y = e.detail.y

      const cell = new Cell(data.spec)
      cell.status = data.status

      const judger = this.data.judger
      judger.judge(cell, x, y)
      const skuIntact = judger.isSkuIntact()

      if (skuIntact) {
        const currentSku = judger.getDeterminateSku()
        this.bindSkuData(currentSku)
      }
      this.bindTipData()

      this.bindFenceGroupData(judger.fenceGroup)
    }

  }
})