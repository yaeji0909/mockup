<template>
  <div>
    <swiper
      :direction="'vertical'"
      autoHeight
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :modules="modules"
      :pagination="{
        clickable: true,
      }"
      class="mySwiper"
    >
      <swiper-slide
        class="flex flex-col-reverse xl:flex-row text-center xl:text-left justify-center items-center whitespace-pre-line"
      >
        <div class="mt-10 xl:mr-20">
          <h1 class="text-3xl md:text-4xl xl:text-7xl font-bold">
            {{ $t('service.1') }}
          </h1>
          <p class="text-xs md:text-sm xl:text-xl mt-[15px]">
            {{ $t('service.1-desc') }}
          </p>
        </div>
        <img :src="SERVICE_1" alt="SERVICE_1" class="w-[400px] md:w-[500px]" />
      </swiper-slide>

      <swiper-slide
        class="flex flex-col xl:flex-row text-center xl:text-left justify-center items-center whitespace-pre-line"
      >
        <img :src="SERVICE_2" alt="SERVICE_2" class="w-[400px] md:w-[500px]" />
        <div class="mt-10 xl:mr-20">
          <h1 class="text-3xl md:text-4xl xl:text-7xl font-bold">
            {{ $t('service.2') }}
          </h1>
          <p class="text-xs md:text-sm xl:text-xl mt-[15px]">
            {{ $t('service.2-desc') }}
          </p>
        </div>
      </swiper-slide>

      <swiper-slide
        class="flex flex-col-reverse xl:flex-row text-center xl:text-left justify-center items-center whitespace-pre-line"
      >
        <div class="mt-10 xl:mr-20">
          <h1 class="text-3xl md:text-4xl xl:text-7xl font-bold">
            {{ $t('service.3') }}
          </h1>
          <p class="text-xs md:text-sm xl:text-xl mt-[15px]">
            {{ $t('service.3-desc') }}
          </p>
        </div>
        <img :src="SERVICE_3" alt="SERVICE_3" class="w-[400px] md:w-[500px]" />
      </swiper-slide>

      <swiper-slide
        class="flex flex-col xl:flex-row text-center xl:text-left justify-center items-center whitespace-pre-line"
      >
        <img :src="SERVICE_4" alt="SERVICE_4" class="w-[400px] md:w-[500px]" />
        <div class="mt-10 xl:mr-20">
          <h1 class="text-3xl md:text-4xl xl:text-7xl font-bold">
            {{ $t('service.4') }}
          </h1>
          <p class="text-xs md:text-sm xl:text-xl mt-[15px]">
            {{ $t('service.4-desc') }}
          </p>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const SERVICE_1 = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-1.svg';
const SERVICE_2 = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-2.svg';
const SERVICE_3 = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-3.svg';
const SERVICE_4 = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-4.svg';

const modules = [Pagination];
</script>

<style scoped>
.swiper-slide {
  background: #fff;
  height: 100vh;
}
.swiper-pagination {
}
:deep(.swiper-pagination-vertical) {
  right: 5%;
  top: 50%;
  transform: translate3d(0px, -50%, 0);
}
:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background: #d5dde5;
  opacity: 1;
}
:deep(.swiper-pagination-bullet-active) {
  height: 20px;
  transition: height 0.5s;
  border-radius: 5px;
  background: #97dece;
}
</style>
