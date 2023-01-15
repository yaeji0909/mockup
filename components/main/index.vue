<template>
  <swiper
    :direction="'vertical'"
    autoHeight
    :grabCursor="true"
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
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel } from 'swiper';
import 'swiper/css';

const modules = [Mousewheel];
</script>
