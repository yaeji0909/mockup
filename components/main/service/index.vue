<template>
  <div class="flex flex-col items-center justify-center bg-service h-screen">
    <h1 class="title opacity-0 md:text-4xl xl:text-7xl md:leading-none font-bold">{{ $t('service.title') }}</h1>
    <p class="desc opacity-0 md:text-base xl:text-xl font-medium">{{ $t('service.desc') }}</p>
    <MainServicePhone class="phone opacity-0 mt-[40px] xl:mt-[70px]" />
  </div>
</template>

<script setup>
import { gsap } from 'gsap';

onMounted(() => {
  /**
   * gsap animation
   */
  let tl = gsap.timeline(); //create the timeline
  tl.to('.title', { opacity: 1, y: -90, ease: 'power0', duration: 0 }) //start sequencing
    .to('.desc', { opacity: 1, y: -60, ease: 'power0', duration: 0 })
    .to('.phone', { opacity: 1, y: -30, ease: 'power0', duration: 0 });
});
</script>
