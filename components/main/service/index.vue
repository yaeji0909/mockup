<template>
  <div class="h-screen flex flex-col items-center justify-center bg-service bg-cover pt-60">
    <!-- title -->
    <h1
      class="service-title opacity-0 text-3xl md:text-4xl xl:text-7xl md:leading-none font-bold text-center whitespace-pre-line md:whitespace-nowrap"
    >
      {{ $t('service.title') }}
    </h1>
    <p
      class="service-desc opacity-0 text-xs md:text-base xl:text-xl font-medium text-center whitespace-pre-line md:whitespace-nowrap"
    >
      {{ $t('service.desc') }}
    </p>
    <!-- phone -->
    <MainServicePhone class="phone opacity-0 mt-[40px] xl:mt-[70px]" />
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

/**
 * gsap animation
 */
onMounted(() => {
  let tl = gsap.timeline(); //create the timeline
  tl.to('.service-title', { opacity: 1, y: -90, ease: 'power0', duration: 0.7 }) //start sequencing
    .to('.service-desc', { opacity: 1, y: -60, ease: 'power0', duration: 0.7 })
    .to('.phone', { opacity: 1, y: -30, ease: 'power0', duration: 0.7 });
});
</script>
