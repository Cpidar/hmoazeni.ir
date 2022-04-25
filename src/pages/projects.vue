<script setup lang="ts" >

import { getArticlesTags } from "~/data"

const tags = getArticlesTags(["showcase"]).slice(0, 4)

</script>

<template>
  <ClientOnly>
    <Plum />
  </ClientOnly>
    <ProjectsList id="projects" :articles="tags" />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
