<script setup lang="ts">
import AOS from 'aos'
import Whatsapp from './components/Whatsapp.vue';

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'حسین موذنی | طراح و گرافیست',
  meta: [
    { name: 'description', content: 'وبسایت شخصی حسین موذنی' },
    { name: 'description', content: "با تلفیق هنر و تکنولوژی در خلق عناصر بصری چاپی و دیجیتال به شما کمک می کنم داستان برند خود را بسازید."},
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

const whatsapp = [{
  app: 'whatsapp',
  name: 'واتساپ',
  label: '',
  number: '+989375378963',
  avatar: {
    src: '/images/me.webp',
    alt: ''
  }
},
  {
  app: 'telegram',
  name: 'تلگرام',
  label: '',
  number: '+989375378963',
  avatar: {
    src: '/images/me.webp',
    alt: ''
  }
}]

onMounted(() => AOS.init({
  once: true,
  disable: 'phone',
  duration: 600,
  easing: 'ease-out-sine',
}))

</script>

<template>
  <router-view />
  <!-- <Whatsapp :attendants="whatsapp" /> -->
</template>
