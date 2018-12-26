const path = require('path');

module.exports = {
    // 入口文件
    entry:{
        main:'./app/app.js',
    },

    // 出口：打包文件放置的目录
    output:{
        path:path.resolve(__dirname,'./dist/'), //打包文件存放路径
        filename:'[name].js'
    },

    // 加载器配置
    module:{
        rules:[
            // 编译vue单文件组件：vue-loader
            {
                test:/\.vue$/,
                use:{
                    loader:'vue-loader'
                }
            },

            // 编译es6->es5：babel(babel-loader,babel-core,babel-preset-env)
            {
                test:/\.js$/,
                exclude:path.resolve(__dirname,'./node_modules'),
                use:{
                    loader:'babel-loader',
                    // 配置loader选项
                    options:{
                        presets:['env'] //编译ES6->ES5
                    }
                }
            }
        ]
    }
}