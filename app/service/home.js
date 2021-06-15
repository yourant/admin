const fs = require('fs-extra')
const path = require('path')
const Service = require('egg').Service
module.exports = class extends Service {
  async index() {
    try {
      const markdownStr = fs.readFileSync(path.resolve(__dirname, './demo.md'), 'utf-8')
      return this.ctx.helper.markdownIt(markdownStr)
    } catch (error) {
      return error
    }
  }
}
