import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Oat Docs',
    tagline: 'Docs for the Oat Shell Desktop App',
    favicon: 'img/favicon.svg',

    // Set the production url of your site here
    url: 'https://oat-shell.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'oat-shell', // Usually your GitHub org/user name.
    projectName: 'oat-shell.github.io', // Usually your repo name.
    trailingSlash: false,
    deploymentBranch: 'main',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',

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
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/Oat-Shell/docs/tree/main/',
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/open-graph.png',
        navbar: {
            title: 'Oat Docs',
            logo: {
                alt: 'Oat Logo',
                src: 'img/open-graph.png',
                href: '/',
            },
            items: [
                {
                    href: 'https://github.com/Oat-Shell/docs',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'X',
                            href: 'https://x.com/Oat_Shell',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Oat, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
