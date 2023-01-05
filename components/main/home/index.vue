<template>
  <header class="relative flex items-center h-screen overflow-hidden">
    <main class="relative z-30 p-5 text-2xl mx-1 md:mx-8 xl:mx-80">
      <section class="title opacity-0">
        <h1 class="text-4xl md:text-6xl xl:text-8xl font-bold text-white">
          {{ $t('home.title1') }}
        </h1>
        <h1 class="text-4xl md:text-6xl xl:text-8xl font-bold text-white">
          {{ $t('home.title2') }}
        </h1>
        <h1
          class="text-4xl md:text-6xl xl:text-8xl font-bold bg-gradient-to-r from-secondary-green to-gradient-aqua text-transparent bg-clip-text"
        >
          {{ $t('home.title3') }}
        </h1>
      </section>
      <section class="sub-title opacity-0 mt-5">
        <p class="text-xs md:text-xl xl:text-2xl font-medium text-white">
          {{ $t('home.desc1') }}
        </p>
        <p class="text-xs md:text-xl xl:text-2xl font-medium text-white">
          {{ $t('home.desc2') }}
        </p>
        <p class="text-xs md:text-xl xl:text-2xl font-medium text-white">
          {{ $t('home.desc3') }}
        </p>
      </section>
      <section class="buttons opacity-0 mt-14 gap-4 md:gap-10 text-white flex">
        <CommonButton class="g-btn" text="Google Play" :icon="true" @click="ClickBtn(GOOGLE_PLAY_URL)">
          <template #icon>
            <img :src="GOOGLE_PLAY_ICON" />
          </template>
        </CommonButton>
        <CommonButton class="a-btn" text="App Store" :icon="true" @click="ClickBtn(APP_STORE_URL)">
          <template #icon>
            <img class="a-btn-icon" :src="APP_STORE_ICON" />
          </template>
        </CommonButton>
      </section>
    </main>
    <video autoplay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none brightness-50">
      <source :src="MAIN_VIDEO" type="video/mp4" />
    </video>
  </header>
</template>

<script setup>
import { gsap } from 'gsap';

const MAIN_VIDEO = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/video/main_video.mp4';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=kr.co.zzimcar.userandroid&hl=ko';
const APP_STORE_URL = 'https://play.google.com/store/apps/details?id=kr.co.zzimcar.userandroid&hl=ko';
const GOOGLE_PLAY_ICON = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/playstore.svg';
const APP_STORE_ICON = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/appstore.svg';
const APP_STORE_ICON_BK = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/appstore-black.svg';

/**
 * hover 시 APP_STORE_ICON_BK 적용
 */
onMounted(() => {
  const el = document.querySelector('.a-btn');
  el.addEventListener('mouseover', e => {
    document.querySelector('.a-btn-icon').src = APP_STORE_ICON_BK;
  });
  el.addEventListener('mouseout', e => {
    document.querySelector('.a-btn-icon').src = APP_STORE_ICON;
  });

  /**
   * gsap animation
   */
  let tl = gsap.timeline(); //create the timeline
  tl.to('.title', { opacity: 1, y: -90, ease: 'power0', duration: 0.7 }) //start sequencing
    .to('.sub-title', { opacity: 1, y: -60, ease: 'power0', duration: 0.7 })
    .to('.buttons', { opacity: 1, y: -30, ease: 'power0', duration: 0.7 });
});

/**
 * click button
 */
function ClickBtn(param) {
  window.open(param);
}
</script>
