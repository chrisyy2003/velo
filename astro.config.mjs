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
  base: '/',
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
