import { defineConfig } from 'vitepress';

import { docsAuto } from './auto';

let { sideBar, navBar } = docsAuto();

export default defineConfig({
  title: '锈色笔头',
  description: '好记性不如烂笔头',
  lastUpdated: true,
  outDir: './dist',
  srcDir: '../markdown',
  themeConfig: {
    nav: navBar,
    sidebar: sideBar,
    siteTitle: '锈色笔头',
    logo: 'hero.png',
    outlineTitle: '标题目录',
    lastUpdatedText: '上次更新',
    search: { provider: 'local' },
    footer: {
      message: '<a href="https://beian.miit.gov.cn" target="_blank">冀ICP备2023028914号-1</a>',
      copyright: 'Copyright © 2023-present diheba'
    },
    docFooter: { prev: '上一页', next: '下一页' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/diheba' }
    ],
  }
});