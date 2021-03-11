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
  chainWebpack: config => {
    // 解决升级vue2.6之后 页面中的空格占位符被清除的问题
    // 如：&nbsp;、&emsp;
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.whitespace = 'preserve'
        return options
      })
      .end()
  },
  lintOnSave: false,
  devServer: {
    port: 6014
  },
  outputDir: 'dist/',
  indexPath: 'index.html'
}
