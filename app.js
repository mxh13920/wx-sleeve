const {
  Cart
} = require("./model/cart")
// const {
//   Token
// } = require("./model/token")

App({
  onLaunch() {
    const cart = new Cart()
    if (!cart.isEmpty()) {
      wx.showTabBarRedDot({
        index: 2
      })
    }

    //   const token = new Token()
    //   token.verify()
  }
})