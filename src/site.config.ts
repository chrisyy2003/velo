export interface SocialLinks {
  github?: string
  mastodon?: string
  email?: string
  linkedin?: string
  bluesky?: string
  twitter?: string
  rss?: boolean
}

export interface SiteConfig {
  site: string
  title: string
  description: string
  author: string
  tags: string[]
  socialCardAvatarImage?: string
  font?: string
  pageSize: number
  trailingSlashes: boolean
  navLinks: Array<{
    name: string
    url: string
    external?: boolean
  }>
  socialLinks?: SocialLinks
  giscus?: {
    repo: string
    repoId: string
    category: string
    categoryId: string
    reactionsEnabled: boolean
  }
}

const config: SiteConfig = {
  // 网站的绝对URL
  site: 'https://myblog.example.com',
  // 网站名称
  title: '我的博客',
  // 网站描述
  description: '分享我的想法、学习笔记和技术心得',
  // 作者名称
  author: 'Chris',
  // SEO关键词
  tags: ['博客', '技术', '学习', '分享'],
  // 社交卡片头像图片路径
  socialCardAvatarImage: './src/content/avatar.jpg',
  // 字体
  font: 'Inter Variable',
  // 分页大小
  pageSize: 6,
  // 是否使用尾部斜杠
  trailingSlashes: false,
  // 导航链接
  navLinks: [
    {
      name: '首页',
      url: '/',
    },
    {
      name: '归档',
      url: '/archive',
    },
    {
      name: '标签',
      url: '/tags',
    },
    {
      name: '地图',
      url: '/map',
    },
  ],
  // 社交链接
  socialLinks: {
    github: 'https://github.com/yourusername',
    email: 'your.email@example.com',
    rss: true,
  },
  // Giscus评论配置（可选）
  giscus: undefined,
}

export default config
