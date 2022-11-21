<script setup lang="ts" >
import { getArticles } from '~/data'
const props = defineProps<{page: number}>()


</script>

<template>
  <HeroBlog />
  <FeaturedPosts />
  <BlogList :articles="getArticles()" title="آخرین مقالات" :page="props.page" />
</template>

<route lang="yaml">
meta:
  layout: blog
</route>
