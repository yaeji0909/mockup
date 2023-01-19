<template>
  <swiper
    :direction="'vertical'"
    autoHeight
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :mousewheel="true"
    :modules="modules"
  >
    <swiper-slide>
      <MainHome />
    </swiper-slide>
    <swiper-slide>
      <MainService />
    </swiper-slide>
    <swiper-slide>
      <MainServiceAnimationDots />
    </swiper-slide>
    <swiper-slide>
      <MainServiceHeader />
    </swiper-slide>
    <swiper-slide>
      <MainNews />
    </swiper-slide>
    <swiper-slide>
      <MainRecruitHeader />
    </swiper-slide>
    <swiper-slide>
      <MainContact />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel } from 'swiper';
import 'swiper/css';

const modules = [Mousewheel];
</script>
