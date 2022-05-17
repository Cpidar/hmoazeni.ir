<script setup lang="ts">

const bio_p01 = "... با تلفیق هنر و تکنولوژی در خلق عناصر بصری چاپی و دیجیتال به شما کمک می کنم داستان برند خود را بسازید."
const bio_p02 = "من با کاوش مداوم در ایده های طراحی گرافیک، آرم ها و نشانه ها و تایپوگرافی، آثاری الهام بخش و منحصر به فرد به شما و مخاطبین تان هدیه می دهم تا با برندسازی قدرتمند، فراتر از کلمات با مشتریان خود ارتباط برقرار کنید."

</script>
<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 md:pt-40">
        <!-- Hero content -->
        <div class="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">
          <!-- Content -->
          <div class="md:col-span-5 lg:col-span-7 mb-8 md:mb-0 text-center md:text-right">
            <h1 class="h1 lg:text-6xl mb-4 font-red-hat-display font-extrabold" data-aos="fade-down">من <span
                class="text-teal-500">حسین موذنی</span> هستم</h1>
            <Typewriter></Typewriter>
            <p class="my-4 text-xl text-gray-600 dark:text-gray-400">{{bio_p01}}</p>
            <p class="my-2 hidden md:block text-xl text-gray-600 dark:text-gray-400">{{bio_p02}}</p>
            
            <!-- <div class="my-2">
            <router-link to="/contact" class="btn-sm text-white bg-teal-500 hover:bg-teal-400"><ion-download-outline class="inline ml-2" /> دریافت رزومه</router-link>
            </div> -->

          </div>

          <!-- Portrait Photo -->
          <div class="mx-auto md:col-span-7 lg:col-span-5" >
          <div class="relative flex justify-center items-center overflow-hidden">

            <!-- Big circle behind: light layout -->
            <svg class="dark:hidden" width="432" height="432" viewBox="0 0 432 432" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="48.919%" id="prefix__a">
                  <stop stop-color="#B2F5EA" stop-opacity=".64" offset="0%" />
                  <stop stop-color="#B2F5EA" stop-opacity="0" offset="100%" />
                </radialGradient>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <circle fill="url(#prefix__a)" cx="216" cy="216" r="216" />
                <g transform="translate(22 22)" stroke="#1D1D20">
                  <circle stroke-opacity=".04" cx="194" cy="194" r="193.5" />
                  <circle stroke-opacity=".08" stroke-width="2" cx="194" cy="194" r="153" />
                  <circle stroke-opacity=".16" stroke-width="2.5" cx="194" cy="194" r="112.75" />
                </g>
              </g>
            </svg>

            <!-- Big circle behind: dark layout -->
            <svg class="hidden dark:block" width="432" height="432" viewBox="0 0 432 432" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="50%" id="circleill_a">
                  <stop stop-color="#1D1D21" stop-opacity="0" offset="0%" />
                  <stop stop-color="#2E2E33" stop-opacity=".32" offset="100%" />
                </radialGradient>
              </defs>
              <circle cx="216" cy="216" r="216" fill="url(#circleill_a)" fill-rule="evenodd" />
            </svg>

            <!-- Moving tags -->
            <div class="absolute inset-0">
              <div class="absolute font-medium px-4 py-2 text-white dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:bg-indigo-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation mt-28">فتوشاپ</div>
              <div class="absolute font-medium px-4 py-2 text-white dark:text-teal-500 bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-1 mt-72">طراحی لوگو</div>
              <div class="absolute font-medium px-4 py-2 text-white dark:text-pink-500 bg-gradient-to-tr from-pink-500 to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-2 mt-40">ایده پرداز</div>
              <div class="absolute font-medium px-4 py-2 text-white dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:bg-indigo-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-3 mt-80 top-4">هویت بصری</div>
              <div class="absolute font-medium px-4 py-2 text-white dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:bg-indigo-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-4 mt-56">موشن گرافیک</div>
              <div class="absolute font-medium px-4 py-2 text-white dark:text-pink-500 bg-gradient-to-tr from-pink-500 to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-4">کامپوزیت و تصحیح رنگ</div>
              <div class="absolute font-medium px-4 py-2 text-white dark:text-teal-500 bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-5 mt-14">لوگوموشن</div>
              <div class="absolute font-medium px-4 py-2 text-white dark:text-purple-500 bg-gradient-to-tr from-purple-500 to-purple-400 dark:bg-purple-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-5 mt-80 top-4">UI / UX</div>
              <div class="absolute font-medium px-4 py-2 text-white dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:bg-indigo-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-6 mt-40">کارت ویزیت</div>
              <div class="absolute font-medium px-4 py-2 text-white dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:bg-indigo-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-7">پوستر</div>
              <div class="absolute font-medium px-4 py-2 text-white dark:text-pink-500 bg-gradient-to-tr from-pink-500 to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-7 mt-72">Adobe AfterEffects</div>
              <div class="absolute font-medium px-4 py-2 text-white dark:text-purple-500 bg-gradient-to-tr from-purple-500 to-purple-400 dark:bg-purple-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-8 mt-28">Adobe Illustrator</div>
              <div class="absolute font-medium px-4 py-2 text-white dark:text-teal-500 bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-9 mt-80 top-4">پکیج و بسته بندی</div>
              <div class="absolute font-medium px-4 py-2 text-white dark:text-teal-500 bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center tags-animation tags-10 mt-56">پوستر</div>
            </div>

            <!-- Inner cricle -->
            <img class="absolute w-64 mx-auto md:mr-0 md:max-w-none h-auto pointer-events-none"
                src="/images/me.webp" width="432" height="432" alt="حسین موذنی" aria-hidden="true" />
              
            <!-- Side gradients -->
            <div class="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white dark:from-gray-900" aria-hidden="true"></div>
            <div class="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white dark:from-gray-900" aria-hidden="true"></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
