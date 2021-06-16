const hljs = require('highlight.js/lib/core')
hljs.registerLanguage('c', require('highlight.js/lib/languages/c'))
hljs.registerLanguage('c', require('highlight.js/lib/languages/c'))
hljs.registerLanguage('r', require('highlight.js/lib/languages/r'))
hljs.registerLanguage('d', require('highlight.js/lib/languages/d'))
hljs.registerLanguage('go', require('highlight.js/lib/languages/go'))
hljs.registerLanguage('sas', require('highlight.js/lib/languages/sas'))
hljs.registerLanguage('lua', require('highlight.js/lib/languages/lua'))
hljs.registerLanguage('ada', require('highlight.js/lib/languages/ada'))
hljs.registerLanguage('php', require('highlight.js/lib/languages/php'))
hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'))
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hljs.registerLanguage('cpp', require('highlight.js/lib/languages/cpp'))
hljs.registerLanguage('ini', require('highlight.js/lib/languages/ini'))
hljs.registerLanguage('lisp', require('highlight.js/lib/languages/lisp'))
hljs.registerLanguage('ruby', require('highlight.js/lib/languages/ruby'))
hljs.registerLanguage('perl', require('highlight.js/lib/languages/perl'))
hljs.registerLanguage('rust', require('highlight.js/lib/languages/rust'))
hljs.registerLanguage('dart', require('highlight.js/lib/languages/dart'))
hljs.registerLanguage('java', require('highlight.js/lib/languages/java'))
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'))
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'))
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'))
hljs.registerLanguage('julia', require('highlight.js/lib/languages/julia'))
hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'))
hljs.registerLanguage('swift', require('highlight.js/lib/languages/swift'))
hljs.registerLanguage('scala', require('highlight.js/lib/languages/scala'))
hljs.registerLanguage('scheme', require('highlight.js/lib/languages/scheme'))
hljs.registerLanguage('groovy', require('highlight.js/lib/languages/groovy'))
hljs.registerLanguage('python', require('highlight.js/lib/languages/python'))
hljs.registerLanguage('csharp', require('highlight.js/lib/languages/csharp'))
hljs.registerLanguage('matlab', require('highlight.js/lib/languages/matlab'))
hljs.registerLanguage('delphi', require('highlight.js/lib/languages/delphi'))
hljs.registerLanguage('kotlin', require('highlight.js/lib/languages/kotlin'))
hljs.registerLanguage('fsharp', require('highlight.js/lib/languages/fsharp'))
hljs.registerLanguage('prolog', require('highlight.js/lib/languages/prolog'))
hljs.registerLanguage('erlang', require('highlight.js/lib/languages/erlang'))
hljs.registerLanguage('haskell', require('highlight.js/lib/languages/haskell'))
hljs.registerLanguage('fortran', require('highlight.js/lib/languages/fortran'))
hljs.registerLanguage('vbscript', require('highlight.js/lib/languages/vbscript'))
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
hljs.registerLanguage('handlebars', require('highlight.js/lib/languages/handlebars'))
hljs.registerLanguage('objectivec', require('highlight.js/lib/languages/objectivec'))
hljs.registerLanguage('powershell', require('highlight.js/lib/languages/powershell'))
hljs.registerLanguage('julia-repl', require('highlight.js/lib/languages/julia-repl'))
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'))
hljs.registerLanguage('erlang-repl', require('highlight.js/lib/languages/erlang-repl'))
hljs.registerLanguage('actionscript', require('highlight.js/lib/languages/actionscript'))
hljs.registerLanguage('vbscript-html', require('highlight.js/lib/languages/vbscript-html'))

const highlightPlugin = md => {
  md.renderer.rules.fence = (tokens, idx) => {
    const token = tokens[idx]
    const code = token.content.trim()
    const lang = token.info
    const langObj = hljs.getLanguage(lang)
    let cnt
    if (langObj) {
      cnt = hljs.highlight(lang, code).value
    } else {
      cnt = hljs.highlightAuto(code).value
    }
    return `<pre class="hljs"><code>${cnt}</code></pre>`
  }
}

module.exports = highlightPlugin
