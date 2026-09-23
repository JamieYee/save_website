import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '飞飞记账帮助中心',
  description: '飞飞记账功能说明、数据备份与自动记账指南。',
  base: '/help/',
  outDir: '../public/help',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#5f9d78' }],
  ],
  themeConfig: {
    logo: '/images/save.png',
    siteTitle: '飞飞记账',
    nav: [
      { text: '帮助中心', link: '/' },
      { text: '返回官网', link: 'https://save.xjjnb.com/' },
    ],
    sidebar: [
      { text: '帮助首页', link: '/' },
      { text: '数据备份', link: '/backup' },
      {
        text: '自动记账',
        collapsed: false,
        items: [
          { text: 'Android 自动记账', link: '/auto-android' },
          { text: 'iOS 自动记账', link: '/auto-ios' },
        ],
      },
      { text: '自定义图标', link: '/custom' },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除查询',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新于' },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
  },
})
