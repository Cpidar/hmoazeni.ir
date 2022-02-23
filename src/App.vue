<script setup lang="ts">
import AOS from 'aos'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'حسین موذنی | طراح و گرافیست',
  meta: [
    { name: 'description', content: 'وبسایت شخصی حسین موذنی' },
    { name: 'keywords', content: 'طراح گرافیک' },
    { name: 'keywords', content: 'موشن گرافیک' },
    { name: 'keywords', content: 'UI / UX Designer' },
    { name: 'keywords', content: 'طراحی رابط کاربری' },
    { name: 'keywords', content: 'هویت بصری' },
    { name: 'keywords', content: 'طراحی لوگو' },
    { name: 'keywords', content: 'فتوشاپ' },
    { name: 'keywords', content: 'Adobe Photoshop' },
    { name: 'author', content: 'حسین موذنی' },    
  ],
})

onMounted(() => AOS.init({
  once: true,
  disable: 'phone',
  duration: 600,
  easing: 'ease-out-sine',
}))

</script>

<template>
  <router-view />
</template>
