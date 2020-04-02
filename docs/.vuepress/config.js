module.exports = {
  base: '/design-docs/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Jacksonz Profile',
      description: 'Home for all my projects'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '天豪同学个人主页',
      description: '博客项目汇总'
    }
  },
  themeConfig: {
    logo: 'avatar.png',
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English'
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文'
      }
    }
  }
}