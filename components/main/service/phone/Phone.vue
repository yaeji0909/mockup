<template>
  <div
    class="relative m-auto bottom-[5%] bg-phone h-[400px] md:h-[700px] lg:h-[500px] xl:h-[700px] container bg-contain bg-center bg-no-repeat flex-col justify-center items-center"
  >
    <MainServiceCard @slideChanged="slideChanged" />
    <div class="px-1">
      <CommonButtonShortcutBtn
        :text="$t('button.moreDetail')"
        color="gray-caption"
        hoverColor="black"
        class="text-center m-auto"
        @click="moveTo"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

/**
 * 자세히 보기 이동
 */
let redirectUrl = ref('https://train.zzimcar.com/');

const slideChanged = (url) => {
  redirectUrl = url;
};

const moveTo = () => {
  window.open(redirectUrl.value || redirectUrl);
};
</script>
