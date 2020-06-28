const promisc = function (func) {
    return function (params = {}) {
        return new Promise((resolve, reject) => {
            const args = Object.assign(params, {
                success: data => {
                    resolve(data);
                },
                fail: err => {
                    reject(err);
                }
            });
            func(args);
        });
    };
};

export {
    promisc
}