const fs = require('fs-extra')
const path = require('path')
const MarkdownIt = require('markdown-it')
const md = new MarkdownIt()

const highlightCss = fs.readFileSync(path.resolve(__dirname, '../../node_modules/highlight.js/styles/atom-one-light.css'), 'utf-8')

const hljs = require('highlight.js/lib/core')
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'))
hljs.registerLanguage('c', require('highlight.js/lib/languages/c'))
// hljs.registerLanguage('htmlbars', require('highlight.js/lib/languages/htmlbars'))
hljs.registerLanguage('handlebars', require('highlight.js/lib/languages/handlebars'))
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'))
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'))
hljs.registerLanguage('c', require('highlight.js/lib/languages/c'))
// hljs.registerLanguage('c-like', require('highlight.js/lib/languages/c-like'))
hljs.registerLanguage('java', require('highlight.js/lib/languages/java'))
hljs.registerLanguage('python', require('highlight.js/lib/languages/python'))
hljs.registerLanguage('cpp', require('highlight.js/lib/languages/cpp'))
hljs.registerLanguage('csharp', require('highlight.js/lib/languages/csharp'))
hljs.registerLanguage('php', require('highlight.js/lib/languages/php'))
hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'))
hljs.registerLanguage('r', require('highlight.js/lib/languages/r'))
hljs.registerLanguage('swift', require('highlight.js/lib/languages/swift'))
hljs.registerLanguage('go', require('highlight.js/lib/languages/go'))
hljs.registerLanguage('matlab', require('highlight.js/lib/languages/matlab'))
hljs.registerLanguage('ruby', require('highlight.js/lib/languages/ruby'))
hljs.registerLanguage('perl', require('highlight.js/lib/languages/perl'))
hljs.registerLanguage('objectivec', require('highlight.js/lib/languages/objectivec'))
hljs.registerLanguage('rust', require('highlight.js/lib/languages/rust'))
hljs.registerLanguage('dart', require('highlight.js/lib/languages/dart'))
hljs.registerLanguage('delphi', require('highlight.js/lib/languages/delphi'))
hljs.registerLanguage('d', require('highlight.js/lib/languages/d'))
hljs.registerLanguage('kotlin', require('highlight.js/lib/languages/kotlin'))
hljs.registerLanguage('scala', require('highlight.js/lib/languages/scala'))
hljs.registerLanguage('sas', require('highlight.js/lib/languages/sas'))
hljs.registerLanguage('lisp', require('highlight.js/lib/languages/lisp'))
hljs.registerLanguage('lua', require('highlight.js/lib/languages/lua'))
hljs.registerLanguage('ada', require('highlight.js/lib/languages/ada'))
hljs.registerLanguage('fortran', require('highlight.js/lib/languages/fortran'))
hljs.registerLanguage('powershell', require('highlight.js/lib/languages/powershell'))
hljs.registerLanguage('vbscript', require('highlight.js/lib/languages/vbscript'))
hljs.registerLanguage('vbscript-html', require('highlight.js/lib/languages/vbscript-html'))
hljs.registerLanguage('groovy', require('highlight.js/lib/languages/groovy'))
hljs.registerLanguage('julia', require('highlight.js/lib/languages/julia'))
hljs.registerLanguage('julia-repl', require('highlight.js/lib/languages/julia-repl'))
hljs.registerLanguage('haskell', require('highlight.js/lib/languages/haskell'))
hljs.registerLanguage('actionscript', require('highlight.js/lib/languages/actionscript'))
hljs.registerLanguage('scheme', require('highlight.js/lib/languages/scheme'))
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'))
hljs.registerLanguage('fsharp', require('highlight.js/lib/languages/fsharp'))
hljs.registerLanguage('prolog', require('highlight.js/lib/languages/prolog'))
hljs.registerLanguage('erlang', require('highlight.js/lib/languages/erlang'))
hljs.registerLanguage('erlang-repl', require('highlight.js/lib/languages/erlang-repl'))
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'))
hljs.registerLanguage('ini', require('highlight.js/lib/languages/ini'))

const MarkdownItContainer = require('markdown-it-container')

md
  .use(require('markdown-it-sub'))
  .use(require('markdown-it-sup'))
  .use(require('markdown-it-footnote'))
  .use(require('markdown-it-deflist'))
  .use(require('markdown-it-abbr'))
  .use(require('markdown-it-emoji'))
  .use(require('markdown-it-ins'))
  .use(require('markdown-it-mark'))
  .use(require('markdown-it-katex'))
  .use(require('markdown-it-github-toc').default, {
    tocFirstLevel: 2,
    tocLastLevel: 3,
    tocClassName: 'toc',
    anchorLinkSymbol: '',
    anchorLinkSpace: false,
    anchorClassName: 'anchor',
    anchorLinkSymbolClassName: 'octicon octicon-link'
  })
  .use(require('markdown-it-highlightjs'), { hljs })
  .use(MarkdownItContainer, 'warning', {
    validate: function (params) {
      return params.trim() === 'warning'
    },
    render: (tokens, idx) => {
      if (tokens[idx].nesting === 1) {
        const icon = `<i class="markdown-it-vue-alert-icon markdown-it-vue-alert-icon-warning"><svg viewBox="64 64 896 896" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path></svg></i>`
        return `<div class="markdown-it-vue-alter markdown-it-vue-alter-warning">${icon}`
      } else {
        return '</div>'
      }
    }
  })
  .use(MarkdownItContainer, 'info', {
    validate: function (params) {
      return params.trim() === 'info'
    },
    render: (tokens, idx) => {
      if (tokens[idx].nesting === 1) {
        const icon = `<i class="markdown-it-vue-alert-icon markdown-it-vue-alert-icon-info"><svg viewBox="64 64 896 896" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path></svg></i>`
        return `<div class="markdown-it-vue-alter markdown-it-vue-alter-info">${icon}`
      } else {
        return '</div>'
      }
    }
  })
  .use(MarkdownItContainer, 'success', {
    validate: function (params) {
      return params.trim() === 'success'
    },
    render: (tokens, idx) => {
      if (tokens[idx].nesting === 1) {
        const icon = `<i class="markdown-it-vue-alert-icon markdown-it-vue-alert-icon-success"><svg viewBox="64 64 896 896" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg></i>`
        return `<div class="markdown-it-vue-alter markdown-it-vue-alter-success">${icon}`
      } else {
        return '</div>'
      }
    }
  })
  .use(MarkdownItContainer, 'error', {
    validate: function (params) {
      return params.trim() === 'error'
    },
    render: (tokens, idx) => {
      if (tokens[idx].nesting === 1) {
        const icon = `<i class="markdown-it-vue-alert-icon markdown-it-vue-alert-icon-error"><svg viewBox="64 64 896 896" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg></i>`
        return `<div class="markdown-it-vue-alter markdown-it-vue-alter-error">${icon}`
      } else {
        return '</div>'
      }
    }
  })
module.exports = function (markdownStr) {
  return {
    css: [highlightCss],
    html: md.render(markdownStr)
  }
}