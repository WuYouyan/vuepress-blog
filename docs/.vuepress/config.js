module.exports = {
    title: 'WY Blog',
    description: 'Just for fun',
    markdown: {
        lineNumbers: true
    },
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
          title: 'WY Blog',
          description: 'Just for fun'
        },
        '/zh/': {
          lang: 'zh-CN',
        //   title: 'WY Blog', // will use the default of root 
          description: '探索的乐趣'
        }
    },
    themeConfig: {
        locales: { 
            '/': {
                selectText: 'Languages',
                label: 'English',
                // ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                // serviceWorker: {
                //   updatePopup: {
                //     message: "New content is available.",
                //     buttonText: "Refresh"
                //   }
                // },
                algolia: {},
                nav: [
                  { text: 'Home', link: '/', ariaLabel: 'Home' },
                  { 
                    text: 'More', 
                    // link: '/more/', 
                    ariaLabel: 'Others', 
                    items: [
                        { text: 'home', link: '/' },
                        { text: 'chinese home', link: '/zh/' }
                    ]
                  }
                ],
                sidebar: [
                    {title: 'chinese home',  path: '/zh/', children: []}
                ]
              },
              '/zh/': {
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
                // Service Worker 的配置
                // serviceWorker: {
                //   updatePopup: {
                //     message: "发现新内容可用.",
                //     buttonText: "刷新"
                //   }
                // },
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                nav: [
                  { text: '主页', link: '/zh/' },
                  { 
                    text: '更多', 
                    // link: '/more/', 
                    ariaLabel: 'Others', 
                    items: [
                        { text: '英文首页', link: '/' },
                    ]
                  }
                ],
               
            }
        }
    }
}
