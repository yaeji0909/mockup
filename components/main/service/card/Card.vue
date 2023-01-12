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
    @slideChange="(e) => onSlideChange(e)"
    ref="mySwiper"
  >
    <swiper-slide
      v-for="service in services"
      :key="service.id"
      class="w-[300px] lg:w-[450px] mt-[40px] mr-[0px] mb-[30px] ml-[0px] md:mt-[70px] md:mr-[50px] md:ml-[50px]"
    >
      <div
        class="bg-white w-[175px] h-[175px] md:w-[260px] md:h-[260px] rounded-[14px] xl:rounded-[20px] flex flex-col items-center justify-center shadow-service"
      >
        <p class="text-base md:text-2xl font-medium text-center">
          {{ service.title }}
        </p>
        <img
          :key="service.id"
          :src="service.image"
          alt="service"
          class="mt-5 md:mt-10 w-[250px]"
        />
      </div>
      <p
        class="w-[300px] px-[10px] text-gray-sub text-center mt-[20px] text-2xs md:text-base whitespace-pre-line"
      >
        {{ service.desc }}
      </p>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { defineEmits, ref } from "vue";

/**
 * image setting
 */
const RENTCAR =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-car.svg";
const TAXI =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-taxi.svg";
const BUS =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-bus.svg";
const TRAIN =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-train.svg";
const PLANE =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-plane.svg";

const { t } = useI18n();
const services = [
  { image: TRAIN, title: t("service.train"), desc: t("service.trainDesc") },
  { image: PLANE, title: t("service.plane"), desc: t("service.planeDesc") },
  {
    image: RENTCAR,
    title: t("service.rentCar"),
    desc: t("service.rentCarDesc"),
  },
  { image: TAXI, title: t("service.taxi"), desc: t("service.taxiDesc") },
  { image: BUS, title: t("service.bus"), desc: t("service.busDesc") },
];
/**
 * swiper
 */
const modules = [EffectCoverflow, Navigation];
/**
 * 슬라이드 전환 시 자세히보기 버튼에 url 넘기기
 */
const emit = defineEmits(["slideChanged"]);
const onSlideChange = (e) => {
  // console.log(e.activeIndex);
  let url = "";
  if (e.activeIndex === 0) {
    url = "https://train.zzimcar.com/";
  } else if (e.activeIndex === 1) {
    url = "https://air.zzimcar.com/";
  } else if (e.activeIndex === 2) {
    url = "https://rent-car.zzimcar.com/";
  } else if (e.activeIndex === 3) {
    url = "https://tour-taxi.zzimcar.com/";
  } else if (e.activeIndex === 4) {
    url = "https://hotpltrip.com/m/index.php?chn=zzimcar";
  }
  emit("slideChanged", url);
};
/**
 * swiper navigation disappear
 */
const breakpoints = useBreakpoints(breakpointsTailwind);
const largerThanMd = breakpoints.greater("md"); // only larger than md
</script>

<style scoped>
.swiper {
  /* width: 100%; */
  padding: 50px 0 0 0;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 250px;
  transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(1) !important;
  display: flex;
  flex-direction: column;
  align-items: center;
}
:deep(.swiper-slide-prev),
:deep(.swiper-slide-next) {
  transform: translate3d(0px, -25px, -214.286px) rotateX(0deg) rotateY(0deg)
    scale(1) !important;
}
:deep(.swiper-slide-visible) {
  transform: translate3d(0px, -25px, -214.286px) rotateX(0deg) rotateY(0deg)
    scale(1) !important;
}
:deep(.swiper-slide-active) {
  transform: translate3d(-3px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(1) !important;
}
:deep(.swiper-button-next) {
  width: 60px;
  height: 60px;
  background: url("https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/arrow_default.svg");
  top: 45%;
}
:deep(.swiper-button-prev) {
  width: 60px;
  height: 60px;
  rotate: 180deg;
  background: url("https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/arrow_default.svg");
  top: 45%;
}
:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: url("https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/arrow_hover.svg");
}
:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  display: none;
}
</style>
