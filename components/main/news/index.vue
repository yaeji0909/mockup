<template>
  <div class="h-auto lg:h-screen text-center bg-white pt-28 lg:pt-60">
    <h1 class="news-title opacity-0 text-4xl md:text-6xl xl:text-7xl font-bold">News</h1>
    <p class="news-desc opacity-0 text-base md:text-xl">{{ $t('news.sub') }}</p>
    <ClientOnly>
      <MainNewsCard :news="newsList" />
      <div class="my-28">
        <CommonButton
          bdColor="primary-aqua"
          textColor="primary-aqua"
          :text="$t('news.more')"
          :icon="false"
          @click="router.push('/news')"
        />
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import news from '/components/main/news/card/news.json';

const { newsList } = news;

const router = useRouter();

/**
 * gsap animation
 */
onMounted(() => {
  let tl = gsap.timeline(); //create the timeline
  tl.to('.news-title', { opacity: 1, y: -20, ease: 'power0', duration: 0.5 }) //start sequencing
    .to('.news-desc', { opacity: 1, y: -10, ease: 'power0', duration: 0.5 });
});
</script>
