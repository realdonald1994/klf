module.exports = {
  publicPath: '/',
  outputDir: 'dist',

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= 'Klf-group Assessment'
        return args
      })
  },

  productionSourceMap: false,
  lintOnSave: false,

  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8085',
        changeOrigin: true,
        ws: true
      }
    }
  }
}
