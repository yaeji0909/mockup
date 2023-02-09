<template>
  <div class="text-center">
    <CommonNavigationBar class="fixed z-10 w-screen" color="white" />
    <main>
      <section class="pt-28 md:pt-32">
        <h1 class="text-4xl md:text-6xl xl:text-7xl font-bold">Recruit</h1>
        <h5 class="text-base xl:text-xl mt-[10px] whitespace-pre-line">{{ $t('recruit.desc') }}</h5>
      </section>
      <section>
        <Recruit />
      </section>
    </main>
    <CommonFooter />
  </div>
</template>

<script setup></script>
