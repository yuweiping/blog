// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '爆破爱好者',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://auto100.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yuweiping', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  markdown: {
    format: 'detect',
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     '⭐️ 如果这个网站能帮助到你，欢迎给一个star支持作者  <a target="_blank" rel="noopener noreferrer" href="https://github.com/yuweiping/blog">GitHub</a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      metadata: [
        {
          name: '这是一个共享的知识库(Wiki Database)，内容涉及软件分享，学习笔记(JavaScript,Vue,Python)等内容',
          content:
            'Wiki Database,JavaScript,Vue,Python,React,破解,技巧,知识库,Github,黑客',
        },
      ],
      algolia: {
        apiKey: '904f5cdb4da4d6cc721cd684dea2dfbb',
        appId: 'OKB0VS6BYS',
        indexName: 'auto100',
      },
      navbar: {
        logo: {
          width: 150,
          // height: 100,
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: '笔记',
          },
          // { to: '/blog', label: '博客', position: 'left' },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://gemini.auto100.org/',
            label: 'Gemini',
            position: 'right',
          },
          {
            href: 'https://jetbra.auto100.org/',
            label: 'Jetbra',
            position: 'right',
          },
          {
            href: 'https://github.com/yuweiping',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Auto100, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
}

export default config
