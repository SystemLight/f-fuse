const {wcf} = require('@systemlight/webpack-config')

module.exports = wcf({
  enableHash: false,
  isNodeEnv: true,
  libraryName: 'Fuse',
  chainWebpack(config) {
    config.delete('cache')
    config.module.rule('ts/tsx').use('ts-loader').tap((args) => {
      args['transpileOnly'] = false
      args['compilerOptions']['noEmit'] = false
      return args
    })
  }
})
