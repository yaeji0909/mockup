<template>
  <div
    class="w-[335px] md:w-[710px] xl:w-[1200px] m-auto"
    v-for="info in infoList"
    :key="info.pid"
  >
    <section>
      <div
        class="flex justify-center items-center text-base xl:text-xl font-medium"
      >
        <h3 class="p-[10px]">{{ $t('notice.notice') }}</h3>
        <div class="border-r w-[2px] h-[10px]" />
        <h3 class="p-[10px]">{{ info.date }}</h3>
      </div>
      <div class="text-center">
        <h1 class="text-3xl md:text-4xl xl:text-7xl font-bold">
          {{ info.title }}
        </h1>
      </div>
    </section>
    <hr class="bg-gray-sub h-[2px] my-[40px] md:my-[60px]" />
    <section>
      <div v-html="info.contents" />
    </section>
  </div>
</template>

<script setup>
import { useNoticeStore } from '/stores/notice';
import { storeToRefs } from 'pinia';

/**
 * get notice info with the same id as route.params.id from pinia store
 */
const noticeStore = useNoticeStore();
const { noticeList } = storeToRefs(noticeStore);

const route = useRoute();

const infoList = noticeList.value.filter(
  (n) => n.pid === Number(route.params.id)
);
</script>
