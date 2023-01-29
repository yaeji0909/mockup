<template>
  <div>
    <CommonNavigationBar
      class="fixed z-10 w-screen"
      :elementTop="elementTop"
      color="white"
    />
    <main class="w-[335px] md:w-[710px] xl:w-[1200px] m-auto">
      <News />
    </main>
    <div class="mt-[100px]">
      <CommonFooter />
    </div>
  </div>
</template>

<script setup>
const elementTop = ref([]);
</script>
