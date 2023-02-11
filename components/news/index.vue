<template>
  <div>
    <main class="w-[335px] md:w-[710px] xl:w-[1200px] m-auto">
      <div class="pt-20">
        <CommonInputSearch :total="total" @input="searchInput" />
      </div>
      <div class="mt-[40px] xl:mt-[50px] border border-gray-sub" />
      <ClientOnly>
        <MainNewsCard :news="news" :isNewsPage="true" ref="newsCardList" />
        <CommonPagination
          class="mt-32"
          :news="news"
          :itemPerPage="itemPerPage"
          @changePage="changePage"
        />
        <!-- <CommonPaging /> -->
      </ClientOnly>
    </main>
  </div>
</template>

<script setup>
import { newsList1 } from '/components/news/news1.json';
import { newsList2 } from '/components/news/news2.json';
import { newsList3 } from '/components/news/news3.json';
import { newsList4 } from '/components/news/news4.json';
import { newsList5 } from '/components/news/news5.json';
import { newsList6 } from '/components/news/news6.json';
import { newsList7 } from '/components/news/news7.json';
import { newsList8 } from '/components/news/news8.json';
import { newsList9 } from '/components/news/news9.json';
import { newsList10 } from '/components/news/news10.json';
import { newsList11 } from '/components/news/news11.json';
import { changeTextColor } from '/composables/input.js';
import { total, newsList } from '/components/news/news.json';

let news = ref(newsList1);
let currentPage = ref(1);
const changePage = (param) => {
  if (param === 1) news.value = newsList1;
  if (param === 2) news.value = newsList2;
  if (param === 3) news.value = newsList3;
  if (param === 4) news.value = newsList4;
  if (param === 5) news.value = newsList5;
  if (param === 6) news.value = newsList6;
  if (param === 7) news.value = newsList7;
  if (param === 8) news.value = newsList8;
  if (param === 9) news.value = newsList9;
  if (param === 10) news.value = newsList10;
  if (param === 11) news.value = newsList11;
  currentPage.value = param;
};

let totalNewsList = ref([...newsList]);

/**
 * 검색
 */
const searchInput = (e) => {
  const filteredList = changeTextColor(e, totalNewsList.value);
  news.value = filteredList;
};
</script>
