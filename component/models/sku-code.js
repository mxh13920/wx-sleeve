const {
    combination
} = require("../../utils/util")

class SkuCode {

    code
    spuId
    totalSegments = []

    constructor(code) {
        this.code = code
        this._splitToSegments()
    }

    _splitToSegments() {
        // 2$1-44#3-9#4-14
        const spuAndSpec = this.code.split('$')
        this.spuId = spuAndSpec[0]
        const specAndArray = spuAndSpec[1].split('#')
        for (let i = 1; i <= specAndArray.length; i++) {
            const segment = combination(specAndArray, i)
            const newSegment = segment.map(segs => {
                return segs.join('#')
            })
            this.totalSegments = this.totalSegments.concat(newSegment)
            // console.log(newSegment);

        }

    }

}

export {
    SkuCode
}