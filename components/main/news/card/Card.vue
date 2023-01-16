<template>
  <div class="mt-16 flex flex-col md:flex-row items-center justify-center gap-10">
    <div v-for="n in news" :key="n.title" class="flex flex-col text-left w-[372px] mb-10">
      <img
        :src="n.imgUrl"
        alt="THUMBNAIL_IMG"
        class="h-[200px] w-full md:h-[300px] md:w-[704px] lg:h-[240px] lg:w-[372px] rounded-[20px] hover:scale-110 transition ease-in-out duration-300"
      />
      <p class="text-primary-aqua text-base font-medium pt-5">{{ n.date }}</p>
      <h4 class="news-title text-black text-2xl font-bold pt-3 overflow-hidden">
        {{ n.title }}
      </h4>
      <div>
        <CommonButtonShortcutBtn
          :text="$t('button.moreDetail')"
          color="gray-caption"
          hoverColor="black"
          class="shortcut-btn pt-7"
          @click="moveTo"
        >
          <!-- <template #icon>
            <img class="shortcut-btn-icon" :src="ARROW_GRAY" />
          </template> -->
        </CommonButtonShortcutBtn>
      </div>
    </div>
  </div>
</template>

<script setup>
import news from '/components/main/news/card/news.json';
import { ref } from 'vue';

const THUMBNAIL_IMG = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/news_thumbnail.svg';
const ARROW_GRAY = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/shortcut_arrow_gray.svg';
const ARROW_BLACK = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/shortcut_arrow_black.svg';

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
</script>

<style scoped>
.news-title {
  /* transform: translate(0px, 0px); */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
