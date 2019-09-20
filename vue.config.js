const path = require('path')

module.exports = {
  publicPath: '/',
  assetsSubDirectory: '',
  assetsPublicPath: '',
  configureWebpack: {
    resolve: {
      alias: {
        vue$: path.resolve('./node_modules/vue/dist/vue.common.js')
      }
    }
  }
}
