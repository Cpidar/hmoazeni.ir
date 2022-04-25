<script setup lang="ts">
import { slug, limitString } from '~/utils';

import { RouteRecordNormalized } from 'vue-router';

const { articles } = defineProps<{ articles: RouteRecordNormalized[] }>()

</script>

<template>
  <section class="relative border-t border-transparent dark:border-gray-800">
    <!-- Background gradient -->
    <div
      class="absolute inset-0 opacity-25 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none"
      aria-hidden="true"></div>
    <!-- End background gradient -->
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-12 md:pt-20 pb-40">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center mt-20 pb-12 md:pb-20">
          <h2 class="h2 font-red-hat-display mb-4">تعدادی از نمونه کارها</h2>
          <!-- <p class="text-xl text-gray-600 dark:text-gray-400">تعدادی از پروژه هایی</p> -->
        </div>

        <!-- Section content -->

        <!-- Job categories -->
        <div class="mx-auto">
          <div class="w-full flex mb-5 justify-end">
            <router-link to="/tags/showcase" class="">
              <span class="mx-2">مشاهده همه</span>
              <ion-arrow-back-outline class="inline ltr:hidden" />
              <ion-arrow-forward-outline class="inline rtl:hidden" />
            </router-link>
          </div>

          <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <!-- 1st job item -->
            <a v-for="(data, i) in articles" :key="i" class="block group" :href="data.path">
              <div class="relative h-0 pb-9/16 sm:pb-1/1">
                <img class="absolute inset-0 w-full h-full object-cover" :src="data.meta.frontmatter.thumbnail"
                  width="240" height="240" :alt="`project-${slug(data.meta.frontmatter.name)}`" />
                <div class="absolute inset-0 opacity-75 bg-gradient-to-t from-gray-900" aria-hidden="true"></div>
                <div class="absolute bottom-0 left-0 right-0 m-4 text-center text-white">
                  <h4 class="text-lg font-red-hat-display font-bold tracking-tight break-words">
                    {{ data.meta.frontmatter.name }}</h4>
                  <div class="italic text-sm opacity-70">{{limitString(data.meta.frontmatter.description, 20)}}</div>
                </div>
              </div>
            </a>
          </div>
        </div>


      </div>
    </div>
  </section>
</template>
