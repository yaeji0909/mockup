<template>
  <div class="relative w-full h-screen text-white">
    <section>
      <video autoplay loop muted class="absolute z-[-1] w-full h-full object-cover brightness-50">
        <source :src="COMPANY_VIDEO" type="video/mp4" />
      </video>
    </section>
    <swiper
      :direction="'vertical'"
      autoHeight
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :mousewheel="true"
      :modules="modules"
      :pagination="{
        clickable: true,
      }"
    >
      <swiper-slide>
        <MainCompanyContentsOne />
      </swiper-slide>
      <swiper-slide>
        <MainCompanyContentsTwo />
      </swiper-slide>
      <swiper-slide>
        <MainCompanyContentsThree />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Pagination, Mousewheel];

const COMPANY_VIDEO = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/video/history_video.mp4';
</script>

<style scoped>
:deep(.swiper-pagination-vertical) {
  right: 5%;
  top: 50%;
  transform: translate3d(0px, -50%, 0);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
/* line */
:deep(.swiper-pagination-vertical > div) {
  height: 80px;
  border: solid 1px #d5dde5;
  margin: 20px 0 30px 0;
}
/* nymber */
:deep(.swiper-pagination-vertical > p) {
  font-size: 18px;
  color: #37d1c7;
  font-weight: 600;
}
/* custom pagination */
:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background: #d5dde5;
  opacity: 1;
}
:deep(.swiper-pagination-bullet:hover) {
  background: #37d1c7;
  box-shadow: 0px 0px 5px rgba(55, 209, 199, 0.5);
  filter: blur(2.5px);
}
:deep(.swiper-pagination-bullet-active) {
  height: 20px;
  transition: 0.5s;
  border-radius: 5px;
  background: #97dece;
}
</style>
