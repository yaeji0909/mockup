<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 0,
      stretch: 0,
      depth: 50,
      modifier: 5,
      slideShadows: false,
    }"
    :navigation="largerThanMd ? true : false"
    :modules="modules"
    class="w-screen mx-[50px]"
  >
    <swiper-slide v-for="service in services" :key="service.id">
      <div class="bg-white w-[250px] h-[250px] rounded-[20px] flex flex-col items-center justify-center shadow-service">
        <p class="text-base xl:text-2xl font-medium text-center">{{ service.title }}</p>
        <img :key="service.id" :src="service.image" alt="service" class="mt-10" />
      </div>
      <p class="w-[250px] px-[10px] text-center mt-[20px] text-2xs xl:text-base">{{ service.desc }}</p>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

/**
 * image setting
 */
const RENTCAR = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-car.svg';
const TAXI = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-taxi.svg';
const BUS = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-bus.svg';
const TRAIN = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-train.svg';
const PLANE = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-plane.svg';

const { t } = useI18n();
const services = [
  { image: TRAIN, title: t('service.train'), desc: t('service.trainDesc') },
  { image: PLANE, title: t('service.plane'), desc: t('service.planeDesc') },
  { image: RENTCAR, title: t('service.rentCar'), desc: t('service.rentCarDesc') },
  { image: TAXI, title: t('service.taxi'), desc: t('service.taxiDesc') },
  { image: BUS, title: t('service.bus'), desc: t('service.busDesc') },
];
/**
 * swiper
 */
const modules = [EffectCoverflow, Navigation];
/**
 * swiper navigation
 */
const breakpoints = useBreakpoints(breakpointsTailwind);
const largerThanMd = breakpoints.greater('md'); // only larger than md
</script>

<style scoped>
.swiper {
  /* width: 100%;
  padding: 50px; */
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 250px;
  height: 300px;
  margin: 50px;
}
:deep(.swiper-button-next) {
  width: 60px;
  height: 60px;
  background: url('https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/arrow_default.svg');
}
:deep(.swiper-button-prev) {
  width: 60px;
  height: 60px;
  rotate: 180deg;
  background: url('https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/arrow_default.svg');
}
:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: url('https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/arrow_hover.svg');
}
:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  display: none;
}
</style>
