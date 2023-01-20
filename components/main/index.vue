<template>
  <div>
    <CommonNavigationBar class="fixed z-10 w-screen" :elementTop="elementTop" />
    <swiper
      :direction="'vertical'"
      autoHeight
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :mousewheel="true"
      :modules="modules"
      :watchOverflow="true"
      :speed="300"
      @progress="e => getIndex(e)"
    >
      <swiper-slide id="home">
        <MainHome />
      </swiper-slide>
      <swiper-slide id="service">
        <MainService />
      </swiper-slide>
      <swiper-slide id="serviceAnimationDots">
        <MainServiceAnimationDots />
      </swiper-slide>
      <swiper-slide id="serviceHeader">
        <MainServiceHeader />
      </swiper-slide>
      <swiper-slide id="">
        <MainCompany />
      </swiper-slide>
      <swiper-slide id="news">
        <MainNews />
      </swiper-slide>
      <swiper-slide id="recruit">
        <MainRecruitHeader />
      </swiper-slide>
      <swiper-slide id="contact">
        <MainContact />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel } from 'swiper';
import 'swiper/css';

const modules = [Mousewheel];

/**
 * get elementTop
 */
const elementTop = ref([]);

onMounted(() => {
  getElementTop();
});
const getElementTop = () => {
  // const home = document.getElementById('home').offsetTop;
  // const service = document.getElementById('service').offsetTop;
  // const serviceAnimationDots = document.getElementById('serviceAnimationDots').offsetTop;
  // const serviceHeader = document.getElementById('serviceHeader').offsetTop;
  // const news = document.getElementById('news').offsetTop;
  // const recruit = document.getElementById('recruit').offsetTop;
  // const contact = document.getElementById('contact').offsetTop;
  // elementTop.value.push(home, service, serviceAnimationDots, serviceHeader, news, recruit, contact);
};

const getIndex = e => {
  // console.log('e', e);
};
// console.log('elementTop.value', elementTop.value);
</script>
