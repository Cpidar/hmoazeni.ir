<script setup lang="ts">
import { getArticlesTags, getParams } from "~/data"
// import { slug, limitString } from "~/utils"

const paramsTag: any = getParams("tag")

const tags = getArticlesTags([paramsTag])


</script>

<template>
    <section class="relative">
        <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div class="pt-32 pb-12 md:pt-40 md:pb-16">
                <BlogList :articles="tags" :title="paramsTag" ></BlogList>
            </div>
        </div>
    </section>
</template>
