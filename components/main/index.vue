<template>
  <div>
    <CommonNavigationBar class="fixed z-20 w-screen" @scrollTo="scrollTo" :color="color" />

    <Swiper
      :direction="'vertical'"
      autoHeight
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :mousewheel="true"
      :modules="modules"
      :watchOverflow="true"
      :speed="300"
      class="main-swiper"
      @slideChange="e => onSlideChange(e)"
      @reachBeginning="e => onReachBeginning(e)"
      :prevent-interaction-on-transition="true"
    >
      <SwiperSlide id="home">
        <MainHome />
      </SwiperSlide>
      <SwiperSlide id="service">
        <MainService />
      </SwiperSlide>
      <SwiperSlide id="serviceAnimationDots">
        <MainServiceAnimationDots />
      </SwiperSlide>
      <SwiperSlide id="serviceHeader">
        <MainServiceHeader />
      </SwiperSlide>
      <SwiperSlide id="company">
        <MainCompany />
      </SwiperSlide>
      <SwiperSlide id="news">
        <MainNews />
      </SwiperSlide>
      <SwiperSlide id="recruit">
        <MainRecruitHeader />
      </SwiperSlide>
      <SwiperSlide id="contact">
        <MainContact />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel } from 'swiper';
import 'swiper/css';

const modules = [Mousewheel];

/**
 * nav bar scroll move
 */
let swiper = ref(null);
const route = useRoute();

onMounted(() => {
  swiper = document.querySelector('.main-swiper').swiper;

  // 메인 페이지 이외에서 스크롤 이동
  if (route.query.isMain === 'false') {
    swiper.slideTo(route.query.slide);
  }
});

// 메인 페이지에서 스크롤 이동
const scrollTo = slide => {
  swiper.slideTo(slide);
};

/**
 * change navigation bar color
 */
const color = ref('black');
const onSlideChange = e => {
  if (e.activeIndex === 0 || e.activeIndex === 3 || e.activeIndex === 4 || e.activeIndex === 6 || e.activeIndex === 7) {
    color.value = 'black';
  } else if (e.activeIndex === 1 || e.activeIndex === 2 || e.activeIndex === 5) {
    color.value = 'white';
  }
};

const onReachBeginning = e => {};
</script>
