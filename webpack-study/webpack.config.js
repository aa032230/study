const HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path') //解决绝对路径问题
module.exports = {
    mode: 'development', // development || production
    // 单个配置
    // entry: path.resolve(__dirname, './src/js/index.js'),
    entry: {
        // 多个入口配置方案
        index: path.resolve(__dirname, './src/js/index.js'),
        // list : path.resolve(__dirname,'./src/js/list.js')
    },
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'js/[name].js',
    },

    // 配置规则
    module: {
        rules: [
            {
                test: /\.js$/, //匹配以什么文件后缀名结尾的所有文件
                loader: 'babel-loader', // 使用什么loader
                exclude: path.resolve(__dirname, 'node_modules'), //排除编译打包的目录
            },
            {
                test: /\.css$/,
                // 多个loader使用use,webpack处理机制 由后往前处理 css-loader -> style-loader
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                // sass-loader -> css-loader -> style-loader
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.tpl$/,
                loader: 'ejs-loader',
            },
        ],
    },

    // 配置插件 -> 所有plugin结尾的插件 -> new chajian({}) -> 进行配置
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', //打包后生成的html的文件名
            template: path.resolve(__dirname, './src/index.html'), // 指定生成html的模板
            chunks: ['index'], //打包后需要引用的js文件
            excludeChunks: ['node_modules'], // 排除node_modules
        }),
    ],

    // 配置webpack-dev-server
    devServer: {
        open: true, // 自动打开浏览器
        host: 'localhost',
        port: 3300,
    },
}
