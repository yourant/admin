const path = require('path')

const moment = require('moment')
exports.relativeTime = time => moment(new Date(time * 1000)).fromNow()
exports.test = (value) => `${value} test---`
exports.markdownIt = require(path.resolve(__dirname, '../tools/markdown-it'))