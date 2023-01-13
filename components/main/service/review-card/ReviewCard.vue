<template>
  <div class="bg-gray-bg flex justify-center items-center">
    <div
      class="relative bg-review-5 max-w-screen-sm h-[200px] xl:w-full xl:h-[400px] bg-center bg-no-repeat flex justify-center items-center filter drop-shadow-review overflow-hidden"
    >
      <!-- <img
      :src="REVIEW_5"
      alt="REVIEW_5"
      class="w-[260px] h-[225px] xl:w-[350px] xl:h-[303px] filter drop-shadow-review"
    /> -->
      <div class="absolute bottom-[20%] text-base">
        <p class="w-[270px] h-[60px] overflow-hidden">{{ reviews.r1.content }}</p>
        <p class="text-center mt-7">{{ reviews.r1.writer }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import reviews from '@/components/main/service/review-card/reviews.json';
const REVIEW_5 = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/review_box_5.svg';
</script>
