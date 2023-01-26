<template>
  <div>
    <main class="w-[335px] md:w-[710px] xl:w-[1200px] m-auto">
      <div class="pt-40">
        <NewsShearchInput />
      </div>
      <div class="mt-[40px] xl:mt-[50px] border border-gray-sub" />
      <ClientOnly>
        <MainNewsCard :news="newsList" />
      </ClientOnly>
    </main>
  </div>
</template>

<script setup>
import NewsShearchInput from '/components/news/search-input/SearchInput';
import { newsList } from '/components/news/news.json';
</script>
