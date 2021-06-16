module.exports = function (md) {
  const temp = md.renderer.rules.fence.bind(md.renderer.rules)
  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx]
    if (token.info.trim() === 'image') {
      let config = token.content
        .trim()
        .split('\n')
        .filter(Boolean)
        .map(item => item.trim())
        .map(item => {
          return item.replace(/\s+/g, ' ').split(' ').splice(0, 2)
        })

      const containerIndex = config.findIndex(item => item[0] === 'container-style')
      const imageStyleIndex = config.findIndex(item => item[0] === 'image-style')

      const imageStyle = config
        .splice(imageStyleIndex)
        .splice(1)
        .map(css => `${css[0]}:${css[1]}`)
        .join(';')

      const containerStyle = config
        .splice(containerIndex)
        .splice(1)
        .map(css => `${css[0]}:${css[1]}`)
        .join(';')

      const images = config
        .map(image => `<img src="${image[1]}" style="${imageStyle}"/>`)
        .join('')

      try {
        return `<div style="${containerStyle}">${images}</div>`
      } catch (e) {
        return `<pre>${e}</pre>`
      }
    }
    return temp(tokens, idx, options, env, slf)
  }
}