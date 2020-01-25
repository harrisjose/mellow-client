const path = require('path')
let isDev = process.env.NODE_ENV === 'development'

module.exports = {
  transpileDependencies: ['vuetify'],
  configureWebpack: config => {
    if (isDev) {
      config.devtool = 'eval-source-map'

      config.output.devtoolModuleFilenameTemplate = info =>
        info.resourcePath.match(/^\.\/\S*?\.vue$/)
          ? `webpack-generated:///${info.resourcePath}?${info.hash}`
          : `webpack-vue:///${info.resourcePath}`

      config.output.devtoolFallbackModuleFilenameTemplate =
        'webpack:///[resource-path]?[hash]'
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      ...{
        assets: path.resolve(__dirname, 'src/assets'),
        utils: path.resolve(__dirname, 'src/utils'),
      },
    }
  },
}
