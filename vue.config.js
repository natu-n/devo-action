const path = require('path')

module.exports = {
  publicPath: "./",
  assetsDir: "",
  outputDir: "./dist",
  configureWebpack: {
    resolve: {
      alias: {
        vue$: path.resolve('./node_modules/vue/dist/vue.common.js')
      }
    }
  }
}
