module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          vue: {
            name: 'vue',
            test: /[\\\/]node_modules[\\\/]vue/,
            // minChunks: 3,
            priority: 10,
            chunks: 'initial'
          }
        }
      }
    }
  },
  lintOnSave: false,
  devServer: {
    port: 6014
  },
  outputDir: 'dist/',
  indexPath: 'index.html'
}
