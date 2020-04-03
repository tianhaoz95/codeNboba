module.exports = {
  head: [
    ["link", { rel: "icon", href: "/icons/favicon.ico" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: "/icons/apple-touch-icon-152x152.png" },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "Jackson Zhou",
      description: "Home for all my projects",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "天豪同学个人主页",
      description: "博客项目汇总",
    },
  },
  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/nprogress",
    "@vuepress/medium-zoom",
    "@vuepress/pwa",
    "@vuepress/active-header-links",
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-162676517-1",
      },
    ],
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "post",
            dirname: "_posts",
            path: "/posts/",
          },
        ],
      },
    ],
  ],
  themeConfig: {
    logo: "/icons/avatars/avatar.png",
    sidebar: "auto",
    repo: "tianhaoz95/codeNboba",
    editLinks: true,
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        editLinkText: "Help us improve this page!",
        lastUpdated: "Last Updated",
        nav: [
          {
            text: "Projects",
            link: "/projects/",
          },
          {
            text: "Social Media",
            items: [
              {
                text: "Newsletter",
                link: "https://jacksonz.substack.com",
                target: "_blank",
              },
              {
                text: "Facebook",
                link: "https://www.facebook.com/tianhaozhou95/",
                target: "_blank",
              },
              {
                text: "LinkedIn",
                link: "https://www.linkedin.com/in/tianhaoz/",
                target: "_blank",
              },
              {
                text: "Twitter",
                link: "https://twitter.com/TheSWE2",
                target: "_blank",
              },
              {
                text: "YouTube Channel",
                link:
                  "https://www.youtube.com/channel/UCY13XGU7-3mYz2n1NzV4oGw",
                target: "_blank",
              },
              {
                text: "GitHub",
                link: "https://github.com/tianhaoz95",
                target: "_blank",
              },
            ],
          },
        ],
      },
      "/zh/": {
        selectText: "选择语言",
        label: "简体中文",
        editLinkText: "小朋友们来帮忙",
        lastUpdated: "最后更新",
        nav: [
          {
            text: "项目主页",
            link: "/zh/projects/",
          },
          {
            text: "社媒号",
            items: [
              {
                text: "邮件订阅",
                link: "https://jacksonz.substack.com",
                target: "_blank",
              },
              {
                text: "脸书",
                link: "https://www.facebook.com/tianhaozhou95/",
                target: "_blank",
              },
              {
                text: "领英",
                link: "https://www.linkedin.com/in/tianhaoz/",
                target: "_blank",
              },
              {
                text: "推特",
                link: "https://twitter.com/TheSWE2",
                target: "_blank",
              },
              {
                text: "油管频道",
                link:
                  "https://www.youtube.com/channel/UCY13XGU7-3mYz2n1NzV4oGw",
                target: "_blank",
              },
              {
                text: "GitHub",
                link: "https://github.com/tianhaoz95",
                target: "_blank",
              },
            ],
          },
        ],
      },
    },
  },
};
