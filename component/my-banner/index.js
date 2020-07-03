Component({
    /**
     * 组件的属性列表
     */
    properties: {
        couponCount: Number
    },

    /**
     * 组件的初始数据
     */
    data: {
        showLoginBtn: true,
    },

    methods: {
        async onAuthUserInfo(event) {
            console.log(event.detail)
            if (event.detail.errMsg != "getUserInfo:fail auth deny") {
                this.setData({
                    showLoginBtn: false
                })
            }
        },



    }
})