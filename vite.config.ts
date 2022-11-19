import path from 'path'
import { defineConfig } from 'vite'
import { promises as fs } from 'fs'
import Vue from '@vitejs/plugin-vue'
import generateSitemap from 'vite-ssg-sitemap'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Markdown from 'vite-plugin-md'
import Prism from 'markdown-it-prism'
import LinkAttributes from 'markdown-it-link-attributes'
import anchor from "markdown-it-anchor"
import toc from "markdown-it-table-of-contents"
import { VitePWA } from 'vite-plugin-pwa'
import Icons from 'unplugin-icons/vite'
import IconsResolver from "unplugin-icons/resolver"
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from "path"
import { readFileSync } from "fs"
import matter from "gray-matter"
import ViteRadar from 'vite-plugin-radar'


const markdownWrapperClasses = 'prose prose-sm article-body mb-5 ltr:text-left rtl:text-right'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    {
      name: 'fix-swipper-css',
      enforce: 'pre',
      resolveId(id) {
        if (id === 'swiper.css') return 'fix-swiper.css'
      },
      async load(id) {
        if (id === 'fix-swiper.css') {
          return await fs.readFile(
            './node_modules/swiper/swiper.min.css',
            'utf-8',
          )
        }
      },
    },
    
    Vue({
      include: [/\.vue$/, /\.md$/],
      // reactivityTransform: true
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      pagesDir: [
        {
          dir: "src/pages",
          baseRoute: "",
        },
        {
          dir: "posts",
          baseRoute: "posts",
        },
      ],
      extensions: ['vue', 'md'],
      extendRoute(route) {
        // Get inspired from anthony fu"s personal website
        // https://github.com/antfu/antfu.me
        const path = resolve(__dirname, route.component.slice(1))
        const md = readFileSync(path, "utf-8")
        const { data } = matter(md)
        console.log(path)
        if (path.split(".").pop() === "md") {
          route.meta = Object.assign(route.meta || {}, { frontmatter: data })
        }
      },
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
      resolvers: [
        IconsResolver({
          prefix: "",
          enabledCollections: ['ion']
        }),
      ],
    }),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS({
      safelist: markdownWrapperClasses,
    }),
    // Unocss(),

    Icons({ compiler: 'vue3' }),

    // https://github.com/antfu/vite-plugin-md
    // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
    Markdown({
      wrapperComponent: "Post",
      wrapperClasses: markdownWrapperClasses,
      headEnabled: true,
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism),
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        }),
        md.use(anchor, {
          permalink: true,
          permalinkBefore: true,
          permalinkSymbol: "#",
          permalinkAttrs: () => ({ "aria-hidden": true }),
        }),
        md.use(toc)
      },
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Hosein Moazeni | Graphic Designer',
        short_name: 'Hosein Moazeni',
        description: "Hosein Moazeni`s Portfolio Website",
        theme_color: '#ffffff',
        icons: [
          {
            "src": "images/icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "images/icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "images/icons/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "images/icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "images/icons/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "images/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "images/icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "images/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable any"
          }
        ],
      },
    }),

    ViteRadar({
      // Google Analytics tag injection
      analytics: [
        {
        id: 'G-BGH1QBMH1H',
      }
    ],
    gtm: [
      {
      id: 'GTM-KJ5G5RV'
    }
  ],

  

    })

  ],

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    onFinished() {  
      generateSitemap({
        hostname: 'https://hmoazeni.ir/'
      })
     }
  },

  // optimizeDeps: {
  //   include: [
  //     'vue',
  //     'vue-router',
  //     '@vueuse/core',
  //     '@vueuse/head',
  //   ]
  // },

})
