<template>
  <div>
    <CommonNavigationBar class="fixed z-50 w-screen" color="white" />
    <main class="w-[335px] md:w-[710px] xl:w-[1200px] m-auto">
      <section class="text-center bg-white pt-28 md:pt-32">
        <h1 class="text-4xl md:text-6xl xl:text-7xl font-bold">News</h1>
        <p class="text-base md:text-xl mt-[10px]">{{ $t('news.sub') }}</p>
      </section>
      <News />
    </main>
    <div class="mt-[100px]">
      <CommonFooter />
    </div>
  </div>
</template>

<script setup></script>
