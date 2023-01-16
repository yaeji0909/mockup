<template>
  <div class="h-screen text-center bg-white pt-28 md:pt-60">
    <h1 class="title opacity-0 text-4xl md:text-6xl xl:text-7xl font-bold">News</h1>
    <p class="desc opacity-0 text-base md:text-xl">{{ $t('news.sub') }}</p>
    <MainNewsCard />
    <div class="mt-28">
      <CommonButton :text="$t('news.more')" bdColor="primary-aqua" textColor="primary-aqua" @click="ClickBtn()" />
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';

/**
 * click button
 */
const router = useRouter();
function ClickBtn() {
  router.push('/news');
}

/**
 * gsap animation
 */
onMounted(() => {
  let tl = gsap.timeline(); //create the timeline
  tl.to('.title', { opacity: 1, y: -20, ease: 'power0', duration: 0.5 }) //start sequencing
    .to('.desc', { opacity: 1, y: -10, ease: 'power0', duration: 0.5 });
});
</script>
