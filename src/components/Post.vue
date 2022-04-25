<script setup lang="ts">
import { isClient } from "@vueuse/core"
import { getRelatedArticles } from "~/data"
// import type { DataShare } from "~/types"
// import IconCalendar from '~icons/ion/calendar-outline'
import Tag from "./Tag.vue";

const { frontmatter } = defineProps<{ frontmatter: any }>()

const relatedArticles = computed(() => {
  console.log(frontmatter)
  return getRelatedArticles({
    limit: 2,
    tags: frontmatter.tags,
    name: frontmatter.name,
  })
})

// social media sharing

// const router = useRoute()
// const routes = router.fullPath
// let url: string = ""
// if (typeof window !== "undefined") {
//   url = window.location.origin + routes
// }

// const dataShare: DataShare[] = [
//   {
//     icon: "facebook",
//     network: "facebook",
//     name: "Facebook",
//     url: url,
//     title: frontmatter.name,
//     description: frontmatter.description,
//     hashtags: "test",
//   },
//   {
//     icon: "twitter",
//     network: "twitter",
//     name: "Twitter",
//     url: url,
//     title: frontmatter.name,
//     hashtags: "test",
//   },
//   {
//     icon: "whatsapp",
//     network: "whatsapp",
//     name: "Whatsapp",
//     url: url,
//     description: frontmatter.description,
//     title: frontmatter.name,
//   },
//   {
//     icon: "telegram",
//     network: "telegram",
//     name: "Telegram",
//     url: url,
//     description: frontmatter.description,
//     title: frontmatter.name,
//   },
// ]

useHead({
  title: frontmatter.name,
  meta: [
    { name: 'description', content: frontmatter.description },    
  ],
})

/* 
  Inspired by https://github.com/antfu/antfu.me/blob/HEAD/src/components/Post.vue
*/
if (isClient) {
  const navigate = () => {
    if (location.hash) {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" })
    }
  }
  useEventListener(window, "hashchange", navigate, false)
  onMounted(() => {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault()
        const href = a.getAttribute("href")
        history.replaceState({}, "", href)
        navigate()
      })
    })
    navigate()
    setTimeout(navigate, 500)
  })
}

</script>

<template>
  <section class="relative">

    <!-- Background image -->
    <div class="absolute inset-0 h-128 pt-16 box-content">
      <img class="absolute inset-0 w-full h-full object-cover opacity-25" :src="frontmatter.thumbnail" width="1440"
        height="577" :alt="`thumbnail-${frontmatter.name}`" loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
    </div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="max-w-3xl mx-auto">

          <article>

            <!-- Article header -->
            <header class="mb-8">
              <!-- Title and excerpt -->
              <div class="text-center ltr:md:text-left rtl:md:text-right">
                <h1 class="h1 font-red-hat-display mb-4" data-aos="fade-down">{{ frontmatter.name }}</h1>
                <p class="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">{{
                  frontmatter.description
                }}</p>
              </div>
              <!-- Article meta -->
              <div class="md:flex md:items-center md:justify-between mt-5">
                <!-- Author meta -->
                <div class="flex items-center justify-center" data-aos="fade-down" data-aos-delay="300">
                  <!-- <IconCalendar class="text-xl mb-1" />
                  <span class="text-gray-600 dark:text-gray-400 mx-2"> {{ new Date(frontmatter.date).toDateString() }}</span> -->
                  <Tag :tags="frontmatter.tags" ></Tag>
                </div>
              </div>
            </header>
            <hr class="w-5 h-px pt-px bg-gray-400 dark:bg-gray-500 border-0 mb-8" data-aos="fade-down"
              data-aos-delay="450" />

            <!-- Article content -->
            <div class="text-lg text-gray-600 dark:text-gray-400" data-aos="fade-up" data-aos-delay="450">
              <slot />
            </div>

            <!-- Article footer -->


          </article>

        </div>

      </div>
    </div>
  </section>

  <!--- Related Articles -->
  <aside v-if="relatedArticles && relatedArticles.length">
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pb-20">
        <div class="max-w-3xl mx-auto">

          <h4 class="h4 font-red-hat-display mb-8">مطالب پیشنهادی دیگر </h4>

          <!-- Articles container -->
          <div class="grid gap-4 sm:gap-6 sm:grid-cols-2" data-aos-id-relposts>

            <related-posts v-if="relatedArticles[0]" :data="relatedArticles[0]" bgcolor="bg-teal-500" />
            <related-posts v-if="relatedArticles[1]" :data="relatedArticles[1]" bgcolor="bg-purple-500" />

          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
