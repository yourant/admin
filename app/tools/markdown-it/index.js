const fs = require('fs-extra')
const path = require('path')


const MarkdownIt = require('markdown-it')
const md = new MarkdownIt()

const node_modules_path = path.join(__dirname, '../../../node_modules')

const latexCss = fs.readFileSync(path.resolve(node_modules_path, 'markdown-it-latex/dist/index.css'), 'utf-8')
const highlightCss = fs.readFileSync(path.resolve(node_modules_path, 'highlight.js/styles/atom-one-light.css'), 'utf-8')
const githubMarkdownCss = fs.readFileSync(path.resolve(node_modules_path, 'github-markdown-css/github-markdown.css'), 'utf-8')
const indexCss = fs.readFileSync(path.resolve(__dirname, './index.css'), 'utf-8')

const MarkdownItContainer = require('markdown-it-container')
const markdownItAlert = require('./markdown-it-alert')

md
  .use(require('markdown-it-sub'))
  .use(require('markdown-it-sup'))
  .use(require('markdown-it-ins'))
  .use(require('markdown-it-abbr'))
  .use(require('markdown-it-mark'))
  .use(require('markdown-it-emoji'))
  .use(require('markdown-it-deflist'))
  .use(require('markdown-it-footnote'))
  .use(require('./markdown-it-highlight'))
  .use(require('./markdown-it-image'))
  .use(require('./markdown-it-echarts'))
  .use(require('./markdown-it-flowchart'))
  .use(require('./markdown-it-font-awsome'))
  .use(require('markdown-it-latex').default)
  .use(require('markdown-it-katex'), { throwOnError: false, errorColor: '#cc0000' })
  .use(MarkdownItContainer, 'info', markdownItAlert.info)
  .use(MarkdownItContainer, 'error', markdownItAlert.error)
  .use(MarkdownItContainer, 'warning', markdownItAlert.warning)
  .use(MarkdownItContainer, 'success', markdownItAlert.success)
  .use(require('markdown-it-github-toc').default, {
    tocFirstLevel: 2,
    tocLastLevel: 3,
    tocClassName: 'toc',
    anchorLinkSymbol: '',
    anchorLinkSpace: false,
    anchorClassName: 'anchor',
    anchorLinkSymbolClassName: 'octicon octicon-link'
  })



module.exports = function (markdownStr) {
  const markdownHtml = `
    <!-- 标签 markdown-component 属于 web-component ，前端web页面应该自行实现 markdown-component  -->
    <markdown-component>
      <style slot="style">${highlightCss}</style>
      <style slot="style">${githubMarkdownCss}</style>
      <style slot="style">${latexCss}</style>
      <style slot="style">${indexCss}</style>
      <div slot="content" class="markdown-body">${md.render(markdownStr)}</div>
    </markdown-component>
  `
  return markdownHtml
}