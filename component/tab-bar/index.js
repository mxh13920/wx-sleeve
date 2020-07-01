// component/tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    onGoToHome() {
      this.triggerEvent("goToHome", {})
    },
    onGoToCart() {
      this.triggerEvent("goToCart", {})

    },
    onAddToCart() {
      this.triggerEvent("addCart", {})

    },
    onBuy() {
      this.triggerEvent("goToBuy", {})

    },
  }
})