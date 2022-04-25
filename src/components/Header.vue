<script lang="ts" setup>
import { toggleDark, isDark, slug } from '~/utils';
import IconSun from '~icons/ion/sunny-outline'
import IconMoon from '~icons/ion/moon-outline'
import IconSearch from '~icons/ion/search'
import IconInstagram from '~icons/ion/logo-instagram'
// import IconPinterest from '~icons/ion/logo-pinterest'
import IconDribbble from '~icons/ion/logo-dribbble'
import IconWhatsapp from '~icons/ion/logo-whatsapp'
// import IconBehance from '~icons/ion/logo-behance'
// import IconLinkedin from '~icons/ion/logo-linkedin'
import { NavbarMenu } from '~/types';

const route = useRoute()

const HomeMenu: NavbarMenu[] = [
  {name: "وبلاگ", to: "/blog"},
  {name: "مهارت ها", to: "#skills"},
  {name: "نمونه کارها", to: "#projects"},
  {name: "مشتریان", to: "#clients"},
]

const BlogMenu: NavbarMenu[] = [

]

const isHomePage = computed(() => route.path.split("/").pop() === '')
const menu = computed(() => isHomePage.value ? HomeMenu : BlogMenu)

const mobileNavOpen = ref(false)
const mobileNav = ref()
const hamburger = ref()

const clickOutside = (e: Event) => {
  if (!mobileNavOpen || mobileNav.value.contains(e.target) || hamburger.value.contains(e.target)) return
  mobileNavOpen.value = false
}
const keyPress = (e: KeyboardEvent) => {
  if (mobileNavOpen || e.key !== 'Escape') return
  mobileNavOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', clickOutside)
  document.addEventListener('keydown', keyPress)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', clickOutside)
  document.removeEventListener('keydown', keyPress)
})

// https://vueuse.org/shared/useToggle/
const [search, setSearch] = useToggle()
const [open, setOpen] = useToggle()
// https://vueuse.org/core/onKeyStroke/
onKeyStroke("Escape", () => {
  search.value = false
})
onKeyStroke("Escape", () => {
  open.value = false
})
// https://vueuse.org/core/onClickOutside/
const modalSearch = ref(null)
onClickOutside(modalSearch, (e) => {
  search.value = false
})
const navbottom = ref(null)
onClickOutside(navbottom, (e) => {
  open.value = false
})
// Search article
const searchArticle = ref("")
const router = useRouter()
const goSearch = () => {
  if (searchArticle.value) {
    router.push(`/search/${slug(searchArticle.value)}`).then(() => {
      search.value = false
      searchArticle.value = ""
    })
  }
}
// Hide navbottom after page has been changed
router.afterEach(() => {
  open.value = false
})

</script>

<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-20">
        <!-- Site branding -->
        <div class="flex-shrink-0 mr-5">
          <!-- Logo -->
          <router-link to="/" class="w-20 h-10 block m-6 select-none outline-none" aria-label="Cruip">
        <img v-show="isDark" src="../images/logo.png" alt="logo">
        <img v-show="!isDark" src="../images/logo.png" alt="logo">
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:flex-grow">

          <!-- Desktop menu links -->
          <ul class="flex flex-grow flex-wrap items-center font-medium">
            <li v-for="(item, i) in menu" :key="i">
              <router-link :to="item.to"
                class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out">
                {{item.name}}</router-link>
            </li>
          </ul>


          <!-- Desktop Social Button -->
          <router-link to="/blog" class="mx-2 my-auto !outline-none">
            <IconInstagram class="text-xl" />
          </router-link>
          <router-link to="/blog" class="mx-2 my-auto !outline-none">
            <IconWhatsapp class="text-xl" />
          </router-link>
          <!-- <router-link to="/blog" class="mx-2 my-auto !outline-none">
            <IconPinterest class="text-xl" />
          </router-link> -->
          <router-link to="/blog" class="mx-2 my-auto !outline-none">
            <IconDribbble class="text-xl" />
          </router-link>
          <!-- <router-link to="/blog" class="mx-2 my-auto !outline-none">
            <icon-behance class="text-xl" />
          </router-link>
          <router-link to="/blog" class="mx-2 my-auto !outline-none">
            <icon-linkedin class="text-xl" />
          </router-link> -->

          <!-- Desktop lights switch -->
          <button class="mx-2 !outline-none my-auto" title="dark" @click="toggleDark()">
            <!-- <div i="carbon-sun dark:carbon-moon" /> -->
            <IconMoon class="text-xl" v-if="isDark" />
            <IconSun v-else />
          </button>
          <button v-if="!isHomePage" class="mx-2 !outline-none" title="dark" @click="setSearch">
            <IconSearch class="text-xl" />
          </button>

          <!-- Desktop Blog Button -->
          <ul v-if="isHomePage" class="flex justify-end flex-wrap items-center">
            <li>
              <router-link to="/blog" class="btn-sm text-white bg-teal-500 hover:bg-teal-400 ml-6">دریافت رزومه</router-link>
            </li>
          </ul>

        </nav>

        <!-- Mobile menu -->
        <div class="inline-flex md:hidden">
          <!-- Mobile lights switch -->
          <div class="form-switch focus-within:outline-blue flex flex-col justify-center ml-6 -mt-0.5">
            <input type="checkbox" name="light-switch" id="light-switch-mobile" v-model="isDark"
              class="light-switch sr-only" />
            <label class="relative" for="light-switch-mobile">
              <span
                class="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10"
                aria-hidden="true"></span>
              <svg class="absolute inset-0" width="44" height="24" viewBox="0 0 44 24"
                xmlns="http://www.w3.org/2000/svg">
                <g class="fill-current text-white" fill-rule="nonzero" opacity=".88">
                  <path
                    d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z" />
                  <circle cx="32" cy="12" r="3" />
                  <circle fill-opacity="0.4" cx="12" cy="12" r="6" />
                  <circle fill-opacity="0.88" cx="12" cy="12" r="3" />
                </g>
              </svg>
              <span class="sr-only">Switch to light / dark version</span>
            </label>
          </div>

          <!-- Hamburger button -->
          <button class="hamburger" ref="hamburger" :class="{ active: mobileNavOpen }" aria-controls="mobile-nav"
            :aria-expanded="mobileNavOpen" @click="mobileNavOpen = !mobileNavOpen">
            <span class="sr-only">Menu</span>
            <svg
              class="w-6 h-6 fill-current text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition duration-150 ease-in-out"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect y="4" width="24" height="2" rx="1" />
              <rect y="11" width="24" height="2" rx="1" />
              <rect y="18" width="24" height="2" rx="1" />
            </svg>
          </button>

          <!-- Mobile navigation -->
          <transition enter-active-class="transition ease-out duration-200 transform"
            enter-from-class="opacity-0 -translate-x-full" enter-to-class="opacity-100 translate-x-0"
            leave-active-class="transition ease-out duration-200" leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <nav v-show="mobileNavOpen" id="mobile-nav" ref="mobileNav"
              class="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg no-scrollbar">
              <div class="py-6 pr-4 pl-20">
                
                <!-- Logo -->
                <svg class="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="menulogo_a">
                      <stop stop-color="#3ABAB4" offset="0%" />
                      <stop stop-color="#7F9CF5" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="menulogo_b">
                      <stop stop-color="#3ABAB4" offset="0%" />
                      <stop stop-color="#3ABAB4" stop-opacity="0" offset="100%" />
                    </linearGradient>
                  </defs>
                  <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z" fill="url(#menulogo_a)" />
                  <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z" fill="url(#menulogo_b)" />
                </svg>

                <!-- Links -->
                <ul class="mt-5">
                  <li v-for="(item, i) in menu" :key="i">
                    <router-link
                      :to="item.to"
                      class="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2"
                    >{{item.name}}</router-link>
                  </li>
                </ul>
              </div>
            </nav>
          </transition>
        </div>
      </div>
    </div>
  </header>

    <!-- Search -->
  <div
    v-if="search"
    class="fixed overflow-x-hidden overflow-y-hidden inset-8 flex justify-content items-center z-50"
  >
    <div ref="modalSearch" class="relative mx-auto w-auto max-w-2xl">
      <icon-search
        class="absolute left-8 top-4 text-xl text-gray-400 cursor-pointer"
        @click="goSearch"
      />
      <input
        ref="search"
        v-model="searchArticle"
        type="text"
        class="bg-white shadow rounded border-0 w-lg h-14 py-5 px-5 focus:outline-none"
        placeholder="عبارت مدنظر را جستجو کنید ..."
        @keydown.enter="goSearch"
      />
    </div>
  </div>
  <div
    v-if="search || open"
    class="fixed inset-0 z-40 opacity-60 bg-dark-200"
    :class="open ? 'lg:hidden' : ''"
  />
</template>
