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
  >
    <swiper-slide
      v-for="service in services"
      :key="service.id"
      class="w-[300px] lg:w-[450px] mt-[90px] mr-[0px] mb-[70px] ml-[0px] md:mt-[120px] md:mr-[50px] md:mb-[50px] md:ml-[50px]"
    >
      <div
        class="bg-white w-[175px] h-[175px] md:w-[260px] md:h-[260px] rounded-[14px] xl:rounded-[20px] flex flex-col items-center justify-center shadow-service"
      >
        <p class="text-base md:text-2xl font-medium text-center">{{ service.title }}</p>
        <img :key="service.id" :src="service.image" alt="service" class="mt-5 md:mt-10 w-[250px]" />
      </div>
      <p class="w-[300px] px-[10px] text-gray-sub text-center mt-[20px] text-2xs md:text-base whitespace-pre-line">
        {{ service.desc }}
      </p>
      <!-- <div class="p-2">
        <CommonButtonShortcutBtn
          :text="$t('button.moreDetail')"
          color="gray-caption"
          hoverColor="black"
          class="text-center m-auto pt-10"
        />
      </div> -->
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
  width: 100%;
  padding: 50px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 250px;
  /* height: 450px; */
  /* margin: 50px; */
  /* margin: 50px 50px 150px 50px; */
  transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(1) !important;
  display: flex;
  flex-direction: column;
  align-items: center;
}
:deep(.swiper-slide-prev),
:deep(.swiper-slide-next) {
  transform: translate3d(0px, -25px, -214.286px) rotateX(0deg) rotateY(0deg) scale(1) !important;
}
:deep(.swiper-slide-visible) {
  transform: translate3d(0px, -25px, -214.286px) rotateX(0deg) rotateY(0deg) scale(1) !important;
}
:deep(.swiper-slide-active) {
  transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(1) !important;
}
:deep(.swiper-button-next) {
  width: 60px;
  height: 60px;
  background: url('https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/arrow_default.svg');
  top: 45%;
}
:deep(.swiper-button-prev) {
  width: 60px;
  height: 60px;
  rotate: 180deg;
  background: url('https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/arrow_default.svg');
  top: 45%;
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
