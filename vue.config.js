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
  indexPath: 'index.html',
  outputDir: 'dist/',
  devServer: {
    port: 4014,
    proxy: {
      'api': {
        target: 'https://api.ourchoice.cn/dev/v1/categories',
        changeOrigin: true
      }
    }
  }
}
