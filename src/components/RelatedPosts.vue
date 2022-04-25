<script setup lang="ts">
import { slug } from '~/utils';

const props = defineProps<{ data: any, bgcolor: string }>()

</script>

<template>
  <article class="relative group p-6 text-white" data-aos="fade-down" data-aos-anchor="[data-aos-id-relposts]">
    <figure>
      <img
        class="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out"
        :src="props.data.meta.frontmatter.thumbnail" width="372" height="182" :alt="`blog-banner-${slug(props.data.meta.frontmatter.name)}`" />
      <div :class="props.bgcolor" class="absolute inset-0 opacity-75 group-hover:opacity-50 transition duration-700 ease-out"
        aria-hidden="true"></div>
    </figure>
    <div class="relative flex flex-col h-full">
      <header class="flex-grow">
        <router-link class="hover:underline" :to="props.data.path">
          <h3 class="text-lg font-red-hat-display font-bold tracking-tight mb-2">
            {{props.data.meta.frontmatter.name}}
          </h3>
        </router-link>
        <div class="text-sm opacity-80">{{`${new Date(props.data.meta.frontmatter.date).toDateString()}`}}</div>
      </header>
      <footer>
        <!-- Tag meta -->
        <div class="flex items-center text-sm mt-5">
          <Tag :tags="props.data.meta.frontmatter.tags" class="mb-5 flex flex-wrap flex-row justify-start" />
        </div>
      </footer>
    </div>
  </article>
</template>
