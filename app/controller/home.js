const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx
    const demo = await ctx.service.home.index()
    ctx.body = demo
  }
}

module.exports = HomeController