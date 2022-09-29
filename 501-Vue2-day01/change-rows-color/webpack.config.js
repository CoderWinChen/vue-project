const path = require('path')
// 配置自动删除dist插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 配置htmlPlugin
const HTMLPlugin = require('html-webpack-plugin')
const htmlPlugin = new HTMLPlugin({
    template: './src/index.html', //复制的地址
    filename: './index.html'
})

module.exports = {
    mode: 'development',  //可以设置为开发模式和生产模式 【development和production】
    // devtool: 'eval-source-map',
    devtool: 'nosources-source-map',
    entry: path.join(__dirname, './src/index.js'), //修改加载文件的路径
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },

    plugins: [htmlPlugin, new CleanWebpackPlugin()], //配置插件,
    // 配置webpack-dev-server打开的浏览器
    devServer: {
        open: true, //设置自动打开浏览器
        host: 'localhost', //配置网址
        port: 80
    },

    // 配置处理模块的信息
    module: {
        rules: [
            {
                // 处理.css的模块
                test: /\.css$/,
                // 使用的loader
                use: ['style-loader', 'css-loader']
            },
            // 处理.less模块
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.jpg|\.gif|\.png$/,
                // limit设置图片大小，如果图片的字节数小于22229KB，则自动转换为base64格式的图片
                // 如果超出了22229字节，则请求服务器上的图片
                use: ['url-loader?limit=470&outputPath=images']
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },

    // 设置@代表项目根目录
    resolve: {
        alias: {
            '@': path.join(__dirname, './src/')
        }
    }
}