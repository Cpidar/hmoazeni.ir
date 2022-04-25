<script setup lang="ts">
import { getArticlesSearch, getParams, } from "~/data"
import { unslug } from "~/utils"
const searchParams: any = getParams("search")
const search = getArticlesSearch([unslug(searchParams)])


</script>

<template>
    <section class="relative">
        <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div class="pt-32 pb-12 md:pt-40 md:pb-16">
                <BlogList :articles="search" :title="searchParams" ></BlogList>
            </div>
        </div>
    </section>
</template>
