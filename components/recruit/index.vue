<template>
  <div>
    <div class="pt-20">
      <CommonInputSearch :total="total" />
    </div>
    <RecruitList />
    <CommonPagination class="mt-20" :currentPage="currentPage" @change="changePage" />
  </div>
</template>

<script setup>
import { total, recruitList } from '/components/recruit/list/recruit.json';

let recruits = ref(recruitList);
let currentPage = ref(1);
const changePage = param => {
  if (param === 1) recruits.value = recruitList;
  currentPage.value = param;
};
</script>
