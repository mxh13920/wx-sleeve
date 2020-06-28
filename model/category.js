const {
    Http
} = require("../utils/http");

class Category {

    static async getCategoryGrid() {
        return await Http.request({
            url: `category/grid/all`
        })
    }

}

export {
    Category
}