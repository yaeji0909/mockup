<template>
  <div>
    <div class="w-[335px] md:w-[710px] xl:w-[1200px] m-auto">
      <NoticeList :notices="notices" />
      <CommonPagination class="mt-20" :currentPage="currentPage" @change="changePage" :totalPage="1" />
    </div>
  </div>
</template>

<script setup>
import { noticeList } from '/components/notice/list/notice.json';

let notices = ref(noticeList);
let currentPage = ref(1);
const changePage = param => {
  if (param === 1) news.value = noticeList;
  currentPage.value = param;
};
</script>
