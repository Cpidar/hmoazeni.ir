<script setup lang="ts">
import { paginateData } from "~/data"
import { slug, limitString } from "~/utils"

const props = defineProps<{ articles: any, title: string }>()

// Get articles data
const currentPage = ref<number>(1)
const articles = computed(() => {
  const articles = props.articles
  const paginate = paginateData({
    articles: articles,
    currentPage: currentPage.value,
    pageSize: 6,
  })
  return paginate
})

// Pagination
const clickStartPage = () => {
  currentPage.value = articles.value.startPage
}
const clickPaginate = (paginate: number) => {
  console.log(paginate)
  currentPage.value = paginate
}
const clickEndPage = () => {
  currentPage.value = articles.value.endPage
}
</script>

<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pb-20">
        <div class="lg:flex lg:justify-between">

          <!-- Main content -->
          <div class="lg:flex-grow" data-aos="fade-down" data-aos-delay="200">

            <!-- Section title -->
            <h4 class="h3 font-red-hat-display mb-8">{{props.title}}</h4>

            <!-- Articles container -->
            <div class="grid gap-12 sm:grid-cols-2 sm:gap-x-6 md:gap-y-8 items-start">

              <!-- 1st article -->
              <article v-for="(data, i) in articles.listArticles" :key="i" class="flex flex-col h-full">
                <header>
                  <router-link class="block mb-4" :to="data.path">
                    <figure class="relative h-0 pb-9/16">
                      <img class="absolute inset-0 w-full h-full object-cover" :src="data.meta.frontmatter.thumbnail"
                        width="352" height="198" :alt="`blog-banner-${slug(data.meta.frontmatter.name)}`" />
                    </figure>
                  </router-link>
                  <router-link class="hover:underline" :to="data.path">
                    <h3 class="h4 font-red-hat-display mb-2">
                      {{ data.meta.frontmatter.name }}
                    </h3>
                  </router-link>
                </header>
                <p class="text-gray-600 dark:text-gray-400 flex-grow">{{
                  limitString(data.meta.frontmatter.description,
                    200)
                }}</p>
                <footer class="flex items-center mt-4">
                  <Tag :tags="data.meta.frontmatter.tags" class="mb-5 flex flex-wrap flex-row justify-start" />
                </footer>
              </article>



            </div>

            <!-- Load more button -->
            <div class="flex flex-wrap justify-center items-center mb-5">
              <Paginate :start-page="articles.startPage" :end-page="articles.endPage" :mid="articles.mid"
                :current-page="currentPage" :click-start-page="clickStartPage" :click-paginate="clickPaginate"
                :click-end-page="clickEndPage" />
            </div>

          </div>


        </div>
      </div>
    </div>
  </section>
</template>
