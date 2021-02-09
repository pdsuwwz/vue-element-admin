
const path = require('path')
function resolve (param) {
  return path.join(__dirname, param)
}

module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Vue Element Admin'
        return args
      })
    config
      .optimization
      .minimizer('terser')
      .tap((args) => {
        args[0].terserOptions.compress.drop_console = true
        return args
      })
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        resolve('src/styles/element-variables.scss'),
        resolve('src/styles/mixin.scss')
      ]
    }
  }
}
