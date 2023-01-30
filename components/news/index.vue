<template>
  <div>
    <main class="w-[335px] md:w-[710px] xl:w-[1200px] m-auto">
      <div class="pt-20">
        <CommonInputSearch :total="total" />
      </div>
      <div class="mt-[40px] xl:mt-[50px] border border-gray-sub" />
      <ClientOnly>
        <MainNewsCard :news="news" :isNewsPage="true" />
        <CommonPagination class="mt-32" :news="news" :currentPage="currentPage" @change="changePage" />
      </ClientOnly>
    </main>
  </div>
</template>

<script setup>
import { total, newsList } from '/components/news/news.json';
import { newsList2 } from '/components/news/news2.json';

let news = ref(newsList);
let currentPage = ref(1);
const changePage = param => {
  if (param === 1) news.value = newsList;
  if (param === 2) news.value = newsList2;
  currentPage.value = param;
};
</script>
