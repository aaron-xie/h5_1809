const formatData = (options={}) => {
    let defaults = {
        data: [],
        code: 200
    }

    let res = { ...defaults, ...options }

    if (options.data && options.data.length === 0 && options.code === undefined) {
        // 数据为空时，返回201
        res.code = 201;
    }
    return res;
}

module.exports = formatData;