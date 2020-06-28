import {
    promisc
} from "./util"
import {
    config
} from "../config/config"

class Http {
    static async request({
        url,
        data,
        method = "GET"
    }) {
        const res = await promisc(wx.request)({
            url: `${config.apiBase}${url}`,
            data,
            method
        })
        return res.data
    }
}

export {
    Http
}