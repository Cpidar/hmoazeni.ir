<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <HeaderHome />

    <!-- Page content -->
    <main class="flex-grow">

      <!-- Page illustration -->
      <div class="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>

      <router-view />


    </main>

    <!-- Site footer -->
    <Footer />

  </div>
  <!-- <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <router-view />
    <Footer />
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [Home Layout]
    </div>
  </main> -->
</template>
