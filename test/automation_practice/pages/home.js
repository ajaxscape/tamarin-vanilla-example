'use strict'

const { host, baseUrl } = require('../config')
const url = host + baseUrl

module.exports = function () {
  const page = {
    url,
    productList: { css: '.product_list' },
    productContainer: { css: '.ajax_block_product' },
    masthead: require('../pageSections/masthead')
  }
  return page
}
