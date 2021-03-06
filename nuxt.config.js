import path from 'path'
import fs from 'fs'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '有意思-奇怪的知识增加了',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { "http-equiv": "Content-Type", content: "text/html;charset=utf-8" }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/img/knowledge.png' },
    ],
    script: [
      { src: "https://hm.baidu.com/hm.js?9373c65fc05cd18fe9de523759a6c66d" },
    ],
  },

  env: {
    NUXTJS_HOST: process.env.NUXTJS_HOST,
    NUXTJS_PORT: process.env.NUXTJS_PORT,
    API_DOMAIN: process.env.API_DOMAIN || 'www.lzsdq.cn',
  },

  target: 'server',

  server: {
    // https: {
    //   key: fs.readFileSync('/root/lzsdq/ssl/5890747_www.lzsdq.cn.key'),
    //   cert: fs.readFileSync('/root/lzsdq/ssl/5890747_www.lzsdq.cn.pem'),
    // },
    port: process.env.NUXTJS_PORT, // default: 3000
    host: process.env.NUXTJS_HOST, // default: localhost,
    timing: false
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config,ctx){
      　　config.node = {
      　　　　fs:"empty"
      　　}
      }
  }
}
