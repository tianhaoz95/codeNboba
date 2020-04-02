module.exports = {
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
  themeConfig: {
    logo: "avatar.png",
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        sidebar: [["/", "Home"]],
        nav: [
          {
            text: "Social Media",
            items: [
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
                text: "YouTube",
                link:
                  "https://www.youtube.com/channel/UCY13XGU7-3mYz2n1NzV4oGw",
                target: "_blank",
              },
            ],
          },
          {
            text: "GitHub",
            link: "https://github.com/tianhaoz95",
            target: "_blank",
          },
        ],
      },
      "/zh/": {
        selectText: "选择语言",
        label: "简体中文",
        sidebar: [["/zh/", "主页"]],
        nav: [
          {
            text: "GitHub",
            link: "https://github.com/tianhaoz95",
            target: "_blank",
          },
        ],
      },
    },
  },
};
