
const path = require('path')
function resolve (param) {
  return path.join(__dirname, param)
}

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        resolve('src/styles/element-variables.scss')
      ]
    }
  }
}
