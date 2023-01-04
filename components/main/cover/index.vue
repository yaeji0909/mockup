<template>
  <header class="relative">
    <video class="absolute min-w-[100vh] max-w-[100vw] md:min-w-[100vw] md:max-w-[100vw]" muted autoplay loop>
      <source :src="MAIN_VIDEO" type="video/mp4" />
    </video>
    <main class="relative pt-[20%]">
      <section class="title">
        <h1 class="text-4xl md:text-6xl xl:text-8xl font-bold text-white">누구든지, 어디든지</h1>
        <h1 class="text-4xl md:text-6xl xl:text-8xl font-bold text-white">기대 이상의</h1>
        <h1
          class="text-4xl md:text-6xl xl:text-8xl font-bold bg-gradient-to-r from-secondary-green to-gradient-aqua text-transparent bg-clip-text"
        >
          통합 모빌리티 플랫폼
        </h1>
      </section>
      <section class="sub-title mt-5">
        <p class="text-xs md:text-xl xl:text-2xl font-medium text-white">실시간으로 달라지는 교통상황까지 고려하여</p>
        <p class="text-xs md:text-xl xl:text-2xl font-medium text-white">
          목적지까지 최적의 이동수단으로 예약부터 결제까지
        </p>
        <p class="text-xs md:text-xl xl:text-2xl font-medium text-white">
          하나의 솔루션으로 가능한 통합 모빌리티 플랫폼 회사입니다.
        </p>
      </section>
      <section class="buttons mt-14 gap-4 md:gap-10 text-white flex">
        <CommonButton class="g-btn" text="Google Play" :icon="true" @click="ClickBtn(GOOGLE_PLAY_URL)">
          <img :src="GOOGLE_PLAY_ICON" />
        </CommonButton>
        <CommonButton class="a-btn" text="App Store" :icon="true" @click="ClickBtn(APP_STORE_URL)">
          <img class="a-btn-icon" :src="APP_STORE_ICON" />
        </CommonButton>
      </section>
    </main>
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

// hover 시 APP_STORE_ICON_BK 적용
onMounted(() => {
  const el = document.querySelector('.a-btn');
  el.addEventListener('mouseover', e => {
    document.querySelector('.a-btn-icon').src = APP_STORE_ICON_BK;
  });
  el.addEventListener('mouseout', e => {
    document.querySelector('.a-btn-icon').src = APP_STORE_ICON;
  });
});

function ClickBtn(param) {
  window.open(param);
}

// let tl = gsap.timeline(); //create the timeline
// console.log('tl', tl);
// tl.to('.title', { y: 150 }) //start sequencing
//   .to('.sub-title', { y: 100, ease: 'elastic' })
//   .to('.buttons', { y: 50, ease: 'elastic' });
// let tween = gsap.to('.class', { rotation: 360, duration: 5, ease: 'elastic' });
</script>
