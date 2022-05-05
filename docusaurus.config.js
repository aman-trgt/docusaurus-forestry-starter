// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Tools Documentation | TRGT",
  tagline: "User and Developer guide for TRGT tools and products.",
  url: "https://trgt-digital-tech.github.io", // Your website URL
  baseUrl: "/",
  projectName: "developer-docs",
  organizationName: "trgt-digital-tech",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",
  customFields: {
    mainApiBaseURL:
      process.env.REACT_APP_MAIN_API_BASE_URL ||
      "https://api.trgt-digital.com:9443/trgt/api",
    bidderApiBaseURL:
      process.env.REACT_APP_BIDDER_API_BASE_URL ||
      "https://api.trgt-digital.com:10443/api/v1",
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/TRGT-Digital-Tech/developer-docs/blob/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/TRGT-Digital-Tech/developer-docs/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "TRGT",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "developer/holidaybot",
            position: "left",
            label: "Developer Docs",
          },
          // { to: "/docs/intro", label: "All Products", position: "left" },
        ],
      },
      // footer: {
      //   style: "dark",
      //   links: [
      //     {
      //       title: "Docs",
      //       items: [
      //         {
      //           label: "Tutorial 0",
      //           to: "/docs/intro",
      //         },
      //         {
      //           label: "Wow 1",
      //           to: "/docs/intro",
      //         },
      //         {
      //           label: "Cool 2",
      //           to: "/docs/intro",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Blogs",
      //       items: [
      //         {
      //           label: "Blog 0",
      //           to: "/blog/1",
      //         },
      //         {
      //           label: "Dont Look",
      //           to: "/blog/1",
      //         },
      //         {
      //           label: "Told you not to",
      //           to: "/blog/1",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Docs",
      //       items: [
      //         {
      //           label: "Tutorial 0",
      //           to: "/docs/intro",
      //         },
      //         {
      //           label: "Wow 1",
      //           to: "/docs/intro",
      //         },
      //         {
      //           label: "Cool 2",
      //           to: "/docs/intro",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Blogs",
      //       items: [
      //         {
      //           label: "Blog 0",
      //           to: "/blog/1",
      //         },
      //         {
      //           label: "Dont Look",
      //           to: "/blog/1",
      //         },
      //         {
      //           label: "Told you not to",
      //           to: "/blog/1",
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} TRGT.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
