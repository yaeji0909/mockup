<template>
  <div class="bg-gray-bg h-screen pt-10 lg:pt-20">
    <div class="text-center">
      <h3 class="text-base md:text-xl lg:text-2xl text-gray-caption font-medium">CUSTOMER REVIEWS</h3>
      <h1 class="text-3xl md:text-4xl lg:text-5xl text-black font-bold">
        {{ $t('service.review') }}
      </h1>
    </div>
    <div class="review-card flex justify-center items-center overflow-hidden gap-10 min-w-max pt-8">
      <div
        v-for="r in review"
        :key="r.writer"
        class="relative bg-review-5 w-[260px] h-[225px] lg:w-[350px] lg:h-[303px] bg-cover bg-center bg-no-repeat flex justify-center items-center filter drop-shadow-review"
      >
        <div class="absolute bottom-[5%] text-xs md:text-base">
          <p class="content w-[230px] h-[60px] lg:w-[300px] lg:h-[60px] overflow-hidden">
            {{ r.content }}
          </p>
          <p class="text-center mt-3 md:mt-5">{{ r.writer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import reviews from '@/components/main/service/review-card/reviews.json';

const REVIEW_5 = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/review_box_5.svg';

const { review } = reviews;
</script>

<style scoped>
.content {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
/* marquee */
.review-card {
  animation: marquee 100s infinite;
}
.review-card:hover {
  animation-play-state: paused;
}
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
