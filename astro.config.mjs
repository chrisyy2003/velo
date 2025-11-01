// @ts-check
import { defineConfig } from 'astro/config'
import expressiveCode from 'astro-expressive-code'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs'

// https://astro.build/config
export default defineConfig({
  site: 'https://chrisyy2003.github.io', // 替换 USERNAME 为你的 GitHub 用户名
  base: '/velo', // 替换 REPOSITORY_NAME 为你的仓库名
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkMath, remarkReadingTime],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    react(),
    expressiveCode({
      plugins: [pluginLineNumbers()],
    }),
  ],
})
