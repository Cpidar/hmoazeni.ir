<script setup lang="ts">

const featuredTags = [
  { name: "vue", desc: "ترمینولوژی", thumbnail: "/images/related-post-03.jpg", bgColor: "bg-teal-500" },
  { name: "blog", desc: "فیزیک نور", thumbnail: "/images/related-post-04.jpg", bgColor: "bg-purple-500"},
  { name: "anime", desc: "مبانی کامپوزیت", thumbnail: "/images/related-post-05.jpg", bgColor: "bg-indigo-500" },
  { name: "javascript", desc: "تئوری رنگ ها", thumbnail: "/images/related-post-06.jpg", bgColor: "bg-pink-500" }
]
</script>

<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pb-16">

        <div class="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4" data-aos-id-featposts>

          <!-- 1st article -->
          <article v-for="(tag, i) in featuredTags" :key="i" class="relative group px-6 py-4 sm:py-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]"
            data-aos-delay="100">
            <figure>
              <img
                class="absolute rounded-lg inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out"
                :src="tag.thumbnail" width="258" height="154" alt="Related post 03" />
              <div
                :class="tag.bgColor"
                class="absolute rounded-lg inset-0 opacity-75 group-hover:opacity-50 transition duration-700 ease-out"
                aria-hidden="true"></div>
            </figure>
            <div class="relative flex flex-col justify-center h-full text-white">
              <router-link class="hover:underline" :to="`/tags/${tag.name}`">
                <h3 class="text-lg font-bold my-auto text-center">
                  {{ tag.desc }}
                </h3>
              </router-link>
              <!-- <footer>
                <div class="text-sm opacity-80">By Josh Wang · Nov 16, 2020</div>
              </footer> -->
            </div>
          </article>

        </div>

      </div>
    </div>
  </section>
</template>
