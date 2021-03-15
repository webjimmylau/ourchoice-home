module.exports = {
<<<<<<< HEAD
  devServer: {
    port: 6014
=======
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
>>>>>>> d0197e6e34f5283b5940a828bb5fd604c3b4d0df
  }
}
