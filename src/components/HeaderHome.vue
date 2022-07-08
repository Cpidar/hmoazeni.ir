<script setup lang="ts">
import { toggleDark, isDark } from '~/utils';
import IconLight from '~icons/ion/bulb-outline'
import IconBlog from '~icons/ion/newspaper-outline'
import IconClient from '~icons/ion/heart-outline'
import IconSun from '~icons/ion/sunny-outline'
import IconMoon from '~icons/ion/moon-outline'
// import IconSearch from '~icons/ion/search'
import IconInstagram from '~icons/ion/logo-instagram'
// import IconPinterest from '~icons/ion/logo-pinterest'
import IconDribbble from '~icons/ion/logo-dribbble'
// import IconWhatsapp from '~icons/ion/logo-whatsapp'
// import IconBehance from '~icons/ion/logo-behance'
// import IconLinkedin from '~icons/ion/logo-linkedin'

</script>

<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-0">
      <div class="flex items-center justify-between h-20">
      <router-link class="w-20 h-10 absolute lg:fixed m-6 select-none outline-none" to="/" focusable="false">
        <img v-show="isDark" src="../images/logo.png" alt="logo">
        <img v-show="!isDark" src="../images/logo.png" alt="logo">
      </router-link>
      <nav class="nav">
        <div class="spacer" />
        <div class="flex flex-grow flex-wrap items-center justify-end font-medium">
          <router-link to="/" class="hidden md:inline mx-2 my-auto !outline-none">
            <span>خانه</span>
            <icon-blog class="md:hidden" />
          </router-link>
          <router-link to="/blog" class="mx-2 my-auto !outline-none">
            <span class="hidden md:inline">وبلاگ</span>
            <icon-blog class="md:hidden" />
          </router-link>
          <!-- <router-link to="/skills" class="hidden md:inline mx-2 my-auto !outline-none">
            <span>درباره من</span>
          </router-link> -->
          <router-link to="/projects" class="mx-2 my-auto !outline-none">
            <span class="hidden md:inline">پروژه ها</span>
            <icon-light class="md:hidden" />
          </router-link>
          <router-link to="/clients" class="mx-2 my-auto !outline-none">
            <span class="hidden md:inline">مشتریان</span>
            <icon-client class="md:hidden" />
          </router-link>
          <router-link to="/blog" class="mx-2 my-auto !outline-none">
            <IconInstagram  />
          </router-link>
          <!-- <router-link to="/blog" class="mx-2 my-auto !outline-none">
            <IconWhatsapp  />
          </router-link> -->
          <!-- <router-link to="/blog" class="mx-2 my-auto !outline-none">
            <IconPinterest />
          </router-link> -->
          <router-link to="/blog" class="mx-2 my-auto !outline-none">
            <IconDribbble  />
          </router-link>
          <!-- <router-link to="/blog" class="mx-2 my-auto !outline-none">
            <icon-behance />
          </router-link>
          <router-link to="/blog" class="mx-2 my-auto !outline-none">
            <icon-linkedin />
          </router-link> -->

          <!-- Desktop lights switch -->
          <button class="mx-2 !outline-none my-auto" title="dark" @click="toggleDark()">
            <!-- <div i="carbon-sun dark:carbon-moon" /> -->
            <IconMoon  v-if="isDark" />
            <IconSun v-else />
          </button>
          <!-- <toggle-theme /> -->
        </div>
      </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header h1 {
  margin-bottom: 0;
}

.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

.nav {
  /* padding: 2rem; */
  width: 100%;
  /* display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box; */
}

.nav>* {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right>* {
  margin: auto;
}
</style>
