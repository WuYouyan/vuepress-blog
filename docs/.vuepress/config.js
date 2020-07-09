module.exports = {
    title: 'WY Blog',
    description: 'Just for fun',
    base: '/vuepress-blog/',
    // url:'/',
    head: [
        ['link',  { rel: "icon", type: 'image/jpg',sizes: "32x32", href: "/assets/favicons/favicon.jpg"}]
    ],
    theme: '@vuepress/theme-blog',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/WuYouyan/vuepress-blog.git',
        // 自定义仓库链接文字。
        repoLabel: 'GitHub',
        // lastUpdated: 'Last Updated', // string | boolean
        smoothScroll: true,
        nav: [
          {
            text: 'Blog',
            link: '/',
          },
          {
            text: 'Tags',
            link: '/tag/',
          },
          {
            text: 'About',
            link: '/tag/',
          },
        ],
        directories: [
          {
            id: 'post',
            dirname: '_posts',
            path: '/',
            pagination: {
              lengthPerPage: 10,
            },
          },
        ],
        footer: {
          contact: [
            {
              type: 'github',
              link: 'https://github.com/wuyouyan',
            },
            {
              type: 'linkedin',
              link: 'https://www.linkedin.com/in/youyanwu460221162/',
            },
          ],
        },
    }
}
