// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Моржи столицы',
  tagline: 'Клуб закаливания и спортивного зимнего плавания',
  url: 'https://serhiipylypchuk1991.github.io',
  baseUrl: '/morjiminska/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/morjiminska.jpg',
  organizationName: 'morjiminska', 
  projectName: 'morjiminska',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          //editUrl:'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll:true,
        title: 'Моржи столицы',
        logo: {
          alt: 'Morji Minska logo',
          src: 'img/morjiminska.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'about_us',
            position: 'right',
            label: 'О нас',
          },
          {
            type: 'doc',
            docId: 'news',
            position: 'right',
            label: 'Новости',
          },
          {
            type: 'doc',
            docId: 'events',
            position: 'right',
            label: 'Мероприятия',
          },
          {
            type: 'doc',
            docId: 'gallery',
            position: 'right',
            label: 'Галерея',
          },
          {
            type: 'doc',
            docId: 'our_team',
            position: 'right',
            label: 'Наша команда',
          },
          {
            type: 'doc',
            docId: 'join_us',
            position: 'right',
            label: 'Стать членом клуба',
          },
          //{to: '/blog', label: 'Наш блог', position: 'left'},
          /*{
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },*/
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Мы в соцсетях',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/morjiminskadvs-104638185102463/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/morjiminska.dvs/',
              },
              {
                label: 'VK',
                href: 'https://vk.com/id456236387',
              }
            ],
          },
          {
            title: 'Наши партнеры',
            items: [
              {
                label: 'PROSWIM',
                href: 'https://proswim.by/',
              },
              {
                label: 'Mad Wave',
                href: 'https://sportstar.by/',
              },
              {
                label: 'ОСВОД',
                href: 'http://osvod.www.by',
              },
              {
                label: 'БФЛА',
                href: 'https://www.bfla.eu/',
              },
              {
                label: '42195.BY',
                href: 'https://42195.by/',
              }
            ],
          },
          {
            title: 'Наши спонсоры',
            items: [
              {
                label: 'Спонсор 1',
                href: 'https://vk.com/',
              },
              {
                label: 'Спонсор 2',
                href: 'https://vk.com/',
              }
            ],
          },
          {
            title: 'Полезные ресурсы',
            items: [
              {
                label: 'Ресурс 1',
                href: 'https://vk.com/',
              },
              {
                label: 'Ресурс 2',
                href: 'https://vk.com/',
              },
              {
                label: 'Ресурс 3',
                href: 'https://vk.com/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Serhii Pylypchuk.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
