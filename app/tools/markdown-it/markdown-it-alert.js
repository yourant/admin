module.exports = {
  success: {
    validate: function (params) {
      return params.trim() === 'success'
    },
    render: (tokens, idx) => {
      if (tokens[idx].nesting === 1) {
        const icon = `<i class="markdown-it-alert-icon-success fab fa-angellist"></i>`
        return `<div class="markdown-it-alert-success">${icon}`
      } else {
        return '</div>'
      }
    }
  },
  info: {
    validate: function (params) {
      return params.trim() === 'info'
    },
    render: (tokens, idx) => {
      if (tokens[idx].nesting === 1) {
        const icon = `<i class="markdown-it-alert-icon-info fas fa-info-circle"></i>`
        return `<div class="markdown-it-alert-info">${icon}`
      } else {
        return '</div>'
      }
    }
  },
  warning: {
    validate: function (params) {
      return params.trim() === 'warning'
    },
    render: (tokens, idx) => {
      if (tokens[idx].nesting === 1) {
        const icon = `<i class="markdown-it-alert-icon-warning fas fa-radiation"></i>`
        return `<div class="markdown-it-alert-warning">${icon}`
      } else {
        return '</div>'
      }
    }
  },
  error: {
    validate: function (params) {
      return params.trim() === 'error'
    },
    render: (tokens, idx) => {
      if (tokens[idx].nesting === 1) {
        const icon = `<i class="markdown-it-alert-icon-error fas fa-bomb"></i>`
        return `<div class="markdown-it-alert-error">${icon}`
      } else {
        return '</div>'
      }
    }
  },
}