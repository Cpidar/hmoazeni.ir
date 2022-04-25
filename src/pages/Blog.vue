<script setup lang="ts" >
import { getArticles } from '~/data'

</script>

<template>
  <HeroBlog />
  <FeaturedPosts />
  <BlogList :articles="getArticles()" title="آخرین مقالات" />
</template>

<route lang="yaml">
meta:
  layout: blog
</route>
