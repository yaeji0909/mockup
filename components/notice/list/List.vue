<template>
  <div class="pt-[60px] md:pt-[80px]">
    <hr class="bg-gray-sub h-[2px]" />
    <section class="flex justify-between px-[30px] bg-gray-bg p-[30px] font-medium">
      <p class="text-center w-[90%]">제목</p>
      <p class="text-center w-[10%]">등록일</p>
    </section>
    <section>
      <ul class="w-full text-black">
        <li
          v-for="notice in notices"
          :key="notice.pid"
          class="border-b border-gray-border p-[30px] cursor-pointer"
          @click="moveToNoticeDetail(notice.pid)"
        >
          <div class="flex justify-between items-center pb-[20px] md:pb-0">
            <h3 class="text-xl md:text-2xl xl:text-3xl font-bold text-left w-[90%]">
              {{ notice.title }}
            </h3>
            <h1 class="recruit-title text-xs xl:text-xl text-gray-sub w-[10%]">
              {{ notice.date }}
            </h1>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  notices: Array,
});

/**
 * 상세 이동
 */
const router = useRouter();

const moveToNoticeDetail = id => {
  if (!id) return;
  router.push(`/notice/detail/${id}`);
};
</script>
