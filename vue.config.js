const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    // publicPath: './',
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': { //请求路径关键字
                target: 'https://artplayer.org', //对应自己的接口
                changeOrigin: true,//是否允许跨域,在本地会创建一个虚拟服务端，然后发送请求的数据，
                // 并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                ws: true,
            }
        }
    },
})
