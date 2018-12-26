const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

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

    // 编译模式
    mode:'development',

    // 测试服务器：安装
    devServer:{
        contentBase:'./app/',
        port:1809,
    },

    // 加载器配置
    module:{
        rules:[
            // 编译vue单文件组件：vue-loader
            {
                test:/\.vue$/,
                loader:'vue-loader'
                // use:{
                //     loader:'vue-loader'
                // }
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
            },

            // 样式加载器
            {
                test:/\.css$/,
                loader:['style-loader','css-loader']
            }
        ]
    },

    plugins:[
        // 根据指定模板生成html结构
        new HtmlWebpackPlugin({
            template:'./app/template.html'
        }),

        // Vue-loader的使用，在15.*之后的版本都需要伴随 VueLoaderPlugin
		new VueLoaderPlugin(),
    ]
}