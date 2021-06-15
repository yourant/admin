module.exports = (options, app) => {
  return async function robotMiddleware(ctx, next) {
    const source = ctx.get('user-agent') || ''
    console.log('中间件：', options, source)
    await next()
  }
}