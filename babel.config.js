module.exports = {
  comments: true,
  presets: [
    [
      '@babel/env',
      {
        debug: false,
        modules: false,
        useBuiltIns: 'usage',
        ignoreBrowserslistConfig: false,
        corejs: {
          version: 3,
          proposals: true
        }
      }
    ]
  ]
}
