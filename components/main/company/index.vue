<template>
  <div class="relative w-full h-screen text-white">
    <section>
      <video
        autoplay
        loop
        muted
        class="absolute z-[-1] w-full h-full object-cover brightness-50"
      >
        <source :src="COMPANY_VIDEO" type="video/mp4" />
      </video>
    </section>
    <div class="flex justify-center">
      <MainCompanyContentsOne />
      <!-- <MainCompanyContentsTwo /> -->
      <!-- <MainCompanyContentsThree /> -->
    </div>
  </div>
</template>

<script setup>
const COMPANY_VIDEO =
  'https://naturemobility.s3.ap-northeast-2.amazonaws.com/video/history_video.mp4';
</script>

<style scoped></style>
