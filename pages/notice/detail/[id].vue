<template>
  <div class="w-[335px] md:w-[710px] xl:w-[1200px] m-auto">
    <section>
      <div class="flex justify-center items-center text-base xl:text-xl font-medium">
        <h3 class="p-[10px]">공지 사항</h3>
        <div class="border-r w-[2px] h-[10px]" />
        <h3 class="p-[10px]">2022.09.01</h3>
      </div>
      <div class="text-center">
        <h1 class="text-3xl md:text-4xl xl:text-7xl font-bold">신주발행 공고</h1>
      </div>
    </section>
    <hr class="bg-gray-sub h-[2px] my-[40px] md:my-[60px]" />
    <section>
      <div>contents...</div>
    </section>
  </div>
</template>

<script setup>
import { useNoticeStore } from '/stores/notice';
import { storeToRefs } from 'pinia';

const route = useRoute();
console.log('route.param', route.param);
const noticeStore = useNoticeStore();
const { noticeList } = storeToRefs(noticeStore);

noticeList.value.map(n => {
  console.log('n.pid', n.pid);
});
</script>
