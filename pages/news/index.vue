<template>
  <div>
    <CommonNavigationBar class="fixed z-10 w-screen" :elementTop="elementTop" />
    <div class="pt-40">news</div>
    <NewsShearchInput />
  </div>
</template>

<script setup>
import NewsShearchInput from '/components/news/search/Input';

const elementTop = ref([]);
</script>
