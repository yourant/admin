const Service = require('egg').Service;

module.exports = class extends Service {
  async index() {
    return this.ctx.helper.test('hello egg')
  }
}
