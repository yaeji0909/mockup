<template>
  <div class="mt-20">
    <button
      class="w-full flex items-center border-t border-b"
      @click="moveToPrev"
    >
      <p
        class="px-0 py-[16px] md:py-[20px] md:px-[15px] xl:py-[25px] text-xs xl:text-base font-medium"
      >
        PREV
      </p>
      <div class="border-r w-[2px] h-[15px]" />
      <p class="p-[10px] text-xs md:text-sm xl:text-base text-gray-caption">
        이전 타이틀
      </p>
    </button>
    <button class="w-full flex items-center border-b" @click="moveToNext">
      <p
        class="px-0 py-[16px] md:py-[20px] md:px-[15px] xl:py-[25px] text-xs xl:text-base font-medium"
      >
        NEXT
      </p>
      <div class="border-r w-[2px] h-[15px]" />
      <p class="p-[10px] text-xs md:text-sm xl:text-base text-gray-sub">
        다음 타이틀
      </p>
    </button>
  </div>
</template>

<script setup>
import { useNoticeStore } from '/stores/notice';
import { storeToRefs } from 'pinia';

const noticeStore = useNoticeStore();
const { noticeList } = storeToRefs(noticeStore);

const route = useRoute();
let prevId = ref(Number(route.params.id) - 1);
let nextId = ref(Number(route.params.id) + 1);

const router = useRouter();
const moveToPrev = () => {
  if (prevId.value < 1) return;
  router.push(`/notice/detail/${prevId.value}`);
};
const moveToNext = () => {
  if (noticeList.value.length < nextId.value) return;
  router.push(`/notice/detail/${nextId.value}`);
};
</script>
