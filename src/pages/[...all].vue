<script setup lang="ts">
const router = useRouter()

console.log("not found")
</script>

<template>
  <main p="x4 y10" text="center teal-700 dark:gray-200">
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <div
      class="flex flex-wrap flex-col items-center text-elucidator-700 dark:text-dark-repulser-400 font-bold text-center mt-16">
      <carbon-warning-alt-filled class="text-5xl mb-5" />
      <h1 class="text-3xl">404 Page not found</h1>
    </div>
    <div>
      <button btn text-sm m="3 t8" @click="router.back()">
        back
      </button>
    </div>
  </main>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>

