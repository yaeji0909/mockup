<template>
  <div class="text-center">
    <CommonNavigationBar class="fixed z-10 w-screen" :elementTop="elementTop" color="white" />
    <main class="w-[335px] md:w-[710px] xl:w-[1200px] m-auto pt-40">
      <section>
        <h1 class="text-4xl md:text-6xl xl:text-7xl font-bold whitespace-pre-line">Recruit</h1>
        <h5 class="text-base xl:text-xl mt-[10px]">{{ $t('recruit.desc') }}</h5>
      </section>
      <Recruit />
    </main>
    <div class="mt-[100px]">
      <CommonFooter />
    </div>
  </div>
</template>

<script setup>
const elementTop = ref([]);
</script>
