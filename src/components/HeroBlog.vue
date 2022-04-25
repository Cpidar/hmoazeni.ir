<script setup lang="ts">
import { latestArticle, getArticles } from "~/data"
import { limitString, slug } from "~/utils"

// Get latest article
const latest = computed(() => {
  return latestArticle()
})

// Get articles data
const articles = computed(() => {
  return getArticles(1)
})
</script>

<template>
  <section class="relative">
    <!-- Background image -->
    <div class="absolute inset-0 h-128 pt-16 box-content -z-1">
      <img class="absolute inset-0 w-full h-full object-cover opacity-25" :src="latest.thumbnail" width="1440" height="577" :alt="`blog-banner-${slug(latest.name)}`" />
      <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
    </div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-16">

        <!-- Featured article -->
        <div class="max-w-3xl" data-aos="fade-down">
          <article>
            <header>
              <!-- Title and excerpt -->
              <div class="text-center md:text-right">
                <router-link :to="articles[0].path">
                  <h1 class="h1 font-red-hat-display mb-4">{{latest.name}}</h1>
                </router-link>
                <p class="text-xl text-gray-600 dark:text-gray-400">{{limitString(latest.description, 200)}}</p>
              </div>
              <!-- Article meta -->
              <div class="md:flex md:items-center md:justify-between mt-5">
                <!-- Author meta -->
                <div class="flex items-center justify-center">
                  <Tag :tags="latest.tags" class="mb-5 flex flex-wrap flex-row justify-start" />
                </div>
              </div>
            </header>
          </article>
        </div>

      </div>
    </div>

  </section>
</template>
