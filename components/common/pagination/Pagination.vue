<template>
  <div class="flex justify-center items-center">
    <!-- <button class=""><img :src="PAGE_GRAY" alt="PAGE_GRAY" /></button>
    <ul>
      <li v-for="(number, idx) in numbers" :key="idx">
        <button>{{ number }}</button>
      </li>
    </ul>
    <button class=""><img :src="PAGE_BK" alt="PAGE_BK" /></button> -->
    <ul class="pagination" v-if="pageCount > 1">
      <li v-if="showFirstPageIndex"><a href="#" @click="currentPage = 1">1</a></li>
      <li v-if="showLessDots"><a href="#" @click="currentPage = startPaginatorIndex - 1">...</a></li>
      <li v-for="n in pageRange" :key="n" :class="{ active: n == currentPage }">
        <a href="#" @click="currentPage = n">{{ n }}</a>
      </li>
      <li v-if="showMoreDots"><a href="#" @click="currentPage = endPaginatorIndex + 1">...</a></li>
      <li v-if="showLastPageIndex" @click="currentPage = pageCount">
        <a href="#">{{ pageCount }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import _ from 'lodash';

const PAGE_BK = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/pagination_arrow_bk.svg';
const PAGE_GRAY = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/pagination_arrow_gray.svg';

const props = defineProps({
  // totalPage: Number,
  // currentPage: Number,
});

const currentPage = ref(1);
const pageCount = ref(10);

const startPaginatorIndex = computed(() => {
  // plus 1 so we get 1, 11, 21...
  let startIndex = Math.floor(currentPage.value / 10) * 10 + 1;
  // startIndex can be greater than the currentPage if the currentPage is divisible by 10
  if (startIndex > currentPage.value) {
    startIndex = Math.floor((currentPage.value - 1) / 10) * 10 + 1;
  }
  return startIndex;
});
const endPaginatorIndex = computed(() => {
  let endIndex = Math.ceil(currentPage.value / 10) * 10;
  // when endIndex is greater than the pageCount we're at the end of our range
  if (endIndex > pageCount.value) {
    endIndex = pageCount.value;
  }
  return endIndex;
});

const showLessDots = computed(() => {
  if (currentPage.value > 10) {
    return true;
  }
  return false;
});
const showMoreDots = computed(() => {
  if (pageCount.value > 11 && endPaginatorIndex !== pageCount.value) {
    return true;
  }
  return false;
});

const showFirstPageIndex = computed(() => {
  if (currentPage.value > 10) {
    return true;
  }
  return false;
});
const showLastPageIndex = computed(() => {
  if (pageCount.value > 10 && endPaginatorIndex !== pageCount.value) {
    return true;
  }
  return false;
});
const pageRange = computed(() => {
  return _.range(startPaginatorIndex, endPaginatorIndex + 1);
});
</script>
