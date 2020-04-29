const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, '../../server/public'),
  devServer: {
    proxy: {
      '/v1':{
        target: 'http://localhost:3000'
      }
    }
  }
}