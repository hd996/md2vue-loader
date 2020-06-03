const path = require('path')
const loaderUtils = require('loader-utils')

const { md2Vue } =require('./utils')

module.exports = function (source) {
  let options = Object.assign({
    template: path.resolve(__dirname, 'template/default.tpl')
  }, loaderUtils.getOptions(this))

  return md2Vue(source, options)
}