import { ViteSSG } from 'vite-ssg'
// import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import generatedRoutes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { RouterScrollBehavior } from 'vue-router'

import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

import './css/style.scss'

const routes = setupLayouts(generatedRoutes.map((i) => {
  return {
    ...i,
    alias: i.path.endsWith('/')
      ? `${i.path}index.html`
      : `${i.path}.html`,
  }
}))

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) return savedPosition
  if (to.hash) {
    return {
      el: to.hash,
      behavior: "smooth"
    }
  }
  else return { top: 0, behavior: "smooth" }
}

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager("./modules/*.ts")).map((i) => i.install?.(ctx))
  },
)
