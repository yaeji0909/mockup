<template>
  <div
    class="mt-16"
    :class="
      isNewsPage
        ? 'grid md:grid-rows-3 xl:grid-rows-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-14 gap-x-6 xl:gap-x-10'
        : 'flex flex-col md:flex-row items-center justify-center gap-10'
    "
  >
    <div
      v-for="n in props.news"
      :key="n.title"
      class="flex flex-col text-left"
      :class="isNewsPage ? '' : 'w-[335px] sm:w-[700px] lg:w-[372px] sm:px-8 md:px-0'"
    >
      <img
        :src="n.imgUrl"
        alt="THUMBNAIL_IMG"
        class="rounded-[20px] object-cover hover:scale-105 transition ease-in-out duration-300"
        :class="
          isNewsPage
            ? 'h-[200px] xl:h-[240px]'
            : 'h-[200px] w-[335px] sm:w-[700px] md:h-[300px] lg:h-[240px] lg:w-[372px]'
        "
      />
      <p class="text-primary-aqua text-base font-medium pt-5">{{ n.date }}</p>
      <h4 class="news-title text-black text-2xl font-bold pt-3 overflow-hidden">
        {{ n.title }}
      </h4>
      <div v-if="largerThanSm && !isNewsPage">
        <CommonButtonShortcutBtn
          :text="$t('button.moreDetail')"
          color="gray-caption"
          hoverColor="black"
          class="pt-7"
          @click="moveTo"
        >
          <!-- <template #icon>
            <img class="news-shortcut-btn-icon" :src="ARROW_GRAY" />
          </template> -->
        </CommonButtonShortcutBtn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { ref } from 'vue';

const THUMBNAIL_IMG = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/news_thumbnail.svg';

const props = defineProps({
  news: Object,
  isNewsPage: Boolean,
});

/**
 * 자세히 보기 이동
 */
let redirectUrl = ref('https://train.zzimcar.com/');

const slideChanged = url => {
  redirectUrl = url;
};

const moveTo = () => {
  window.open(redirectUrl.value || redirectUrl);
};

/**
 * 모바일 자세히 보기 버튼 삭제
 */
const breakpoints = useBreakpoints(breakpointsTailwind);
const largerThanSm = breakpoints.greater('sm'); // only larger than sm
</script>

<style scoped>
.news-title {
  /* transform: translate(0px, 0px); */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
