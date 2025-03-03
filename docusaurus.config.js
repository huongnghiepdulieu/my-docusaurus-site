// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hướng Nghiệp Dữ Liệu',
  tagline: 'Lập trình giao dịch tự động MT5, Crypto, Stock',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://huongnghiepdulieu.github.io', // Thay bằng GitHub username
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/my-docusaurus-site/', // Tên repo chính xác
  organizationName: 'huongnghiepdulieu', // GitHub username
  projectName: 'my-docusaurus-site', // Tên repository, không phải GitHub Pages

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/huongnghiepdulieu/',
        },
        blog: {
          path: './blog',  // <-- Thêm dòng này để Docusaurus nhận diện thư mục blog
          routeBasePath: 'blog',  // Đảm bảo đường dẫn blog đúng
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/huongnghiepdulieu/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'blog2',
        path: './blog2',
        routeBasePath: 'blog2',
      },
    ],
  ],
  
  

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Hướng Nghiệp Dữ Liệu',
        logo: {
          alt: 'Logo',
          src: 'img/docusaurus.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'MT5',
          },
          { to: '/crypto', label: 'Crypto', position: 'left' }, // Thêm menu Crypto
          { to: '/stocks', label: 'Stocks', position: 'left' }, // Thêm menu Stocks
          { to: '/blog', label: 'Tin tức', position: 'left' },
          { to: '/blog2', label: 'Hướng dẫn sử dụng mã nguồn Code', position: 'left' }, // Thêm Blog2 vào menu

          {
            href: 'https://github.com/huongnghiepdulieu',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Fanpage',
                href: 'https://facebook.com/HuongNghiepDuLieu',
              },
              {
                label: 'Youtube',
                href: 'https://youtube.com/@HuongNghiepDuLieu',
              },
              {
                label: 'Tiktok',
                href: 'https://tiktok.com/@HuongNghiepDuLieu',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Tin tức',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/huongnghiepdulieu',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hướng Nghiệp Dữ Liệu. Được xây dựng bởi đội ngũ học viên của Trung tâm.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
