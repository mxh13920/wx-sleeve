const {
    Http
} = require("../utils/http");

class Spu {

    static async getDetail(id) {
        return await Http.request({
            url: `spu/id/${id}/detail`
        })
    }

}

export {
    Spu
}