const marked = require('marked')
const fs = require('fs')
const Prism = require('prismjs')
const mustache = require('mustache')

// md => vue
function md2Vue(source, options) {
  let parseMdRes = parseMd(source)
  let createVueRes = createVue(parseMdRes)
  let renderer = new marked.Renderer()

  renderer.code = () => '' // md中code类型不解析，其他的解析为html

  let newSource = mustache.render(fs.readFileSync(options.template).toString(), {
    vue: parseMdRes.html,
    md: marked(source, {renderer}),
    code: Prism.highlight(createVueRes, Prism.languages.markup),
    script: parseMdRes.js,
    style: parseMdRes.styles.join('\n'),
    scopedStyle: parseMdRes.scopedStyles.join('\n')
  })
  return newSource
}

// 解析md文件，通过词法分析
function parseMd(source) {
  let lexer = new marked.Lexer()
  let tokens = lexer.lex(source)
  let styles = []
  let scopedStyles = []
  let html = ''
  let js = ''
  
	tokens.forEach((token) => {
    if (token.type === 'code') {
      switch(token.lang) {
        case 'html': 
          html = token.text
          break
        case 'javascript':
          js = token.text
          break
        case 'css': 
          styles.push(token.text)
          break
        case 'css@scoped':
          scopedStyles.push(token.text)
          break
      }
    }
  })

  return {
    js,
    styles,
    scopedStyles,
    html
  }
}


function createVue({styles, html, js, scopedStyles}) {
  let vue = ''
  vue += html && `<template>${html}</template>`
  vue += js && `<script>${js}</script>`
  vue += styles.length > 0 && `<style>${styles.join('\n')}</style>`
  vue += scopedStyles.length > 0 && `<style scoped>${scopedStyles.join('\n')}</style>` 
	return vue
}

module.exports = {
  md2Vue
}