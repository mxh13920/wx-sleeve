import {
  Cart
} from "../../model/cart";
import {
  orderItem,
  OrderItem
} from "../../model/order-item";
import {
  Sku
} from "../../model/sku";
const cart = new Cart()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderItems: null,
    totalPrice: 9999,
    orderFail: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const order = wx.getStorageSync('cart')
    const sku = order.items.filter(s => {
      return s.checked == true
    })

    const price = sku.map(s => {
      return s.count * s.sku.discount_price ? s.sku.discount_price : s.sku.price
    });
    let totalPrice = 0
    for (let i = 0; i < price.length; i++) {
      totalPrice += price[i]
    }
    this.setData({
      orderItems: sku,
      totalPrice
    })


  },

  onSubmit() {
    this.setData({
      orderFail: true
    })
  }

})