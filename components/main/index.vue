<template>
  <div>
    <CommonNavigationBar class="fixed z-20 w-screen" @scrollTo="scrollTo" :color="color" />

    <Swiper
      :direction="'vertical'"
      autoHeight
      :slidesPerView="'auto'"
      :mousewheel="true"
      :modules="modules"
      :speed="300"
      class="main-swiper"
      @slideChange="e => onSlideChange(e)"
    >
      <SwiperSlide id="home">
        <MainHome />
      </SwiperSlide>
      <SwiperSlide id="service">
        <MainService />
      </SwiperSlide>
      <SwiperSlide id="serviceAnimationDots">
        <MainServiceAnimationDots @mouseEnable="mouseEnable" />
      </SwiperSlide>
      <SwiperSlide id="serviceHeader">
        <MainServiceHeader />
      </SwiperSlide>
      <SwiperSlide id="company">
        <MainCompany @mouseEnable="mouseEnable" />
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
import { Mousewheel, FreeMode, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const modules = [Mousewheel, FreeMode, Scrollbar];

/**
 * nav bar scroll move
 */
let swiper = ref(null);
const route = useRoute();

// news content 스크롤
let contentEnd = ref(false);
watch(contentEnd, newValue => {
  if (newValue) swiper.mousewheel.enable();
});

onMounted(() => {
  swiper = document.querySelector('.main-swiper').swiper;

  // 메인 페이지 이외에서 스크롤 이동
  if (route.query.isMain === 'false') {
    swiper.slideTo(route.query.slide);
  }

  window.addEventListener('scroll', function () {
    const maxHeight = document.body.scrollHeight - window.innerHeight;
    // console.log((pageYOffset * 100) / maxHeight);
    const wheelLocation = (window.pageYOffset * 100) / maxHeight;
    if (wheelLocation === 0 || wheelLocation === 100) {
      contentEnd.value = true;
    } else {
      contentEnd.value = false;
    }
  });
});

// 메인 페이지에서 스크롤 이동
const scrollTo = slide => {
  swiper.slideTo(slide);
};

/**
 * change navigation bar color
 */
const color = ref('black');

const breakpoints = useBreakpoints(breakpointsTailwind);
const largerThanSm = breakpoints.greater('sm'); // only larger than sm
const largerThanLg = breakpoints.greater('lg'); // only larger than lg

const onSlideChange = e => {
  // console.log('e.activeIndex', e.activeIndex);
  if (e.activeIndex === 0 || e.activeIndex === 3 || e.activeIndex === 4 || e.activeIndex === 6 || e.activeIndex === 7) {
    color.value = 'black';
  } else if (e.activeIndex === 1 || e.activeIndex === 2 || e.activeIndex === 5) {
    color.value = 'white';
  }

  /**
   * scroll 조정
   */
  if (e.activeIndex === 2 || e.activeIndex === 4) {
    // 2:service swiper  4:company swiper (자식 스와이퍼 먼저 스크롤 위해)
    swiper.mousewheel.disable();
  }
  if (!largerThanLg.value) {
    // news, contact : lg 이하는 disable (tablet, mobile 컨텐츠 스크롤 위해)
    if (e.activeIndex === 5 || e.activeIndex === 7) {
      swiper.mousewheel.disable();
    }
  }
  if (!largerThanSm.value) {
    // service : sm 이하는 disable (mobile 컨텐츠 스크롤 위해)
    if (e.activeIndex === 3) {
      swiper.mousewheel.disable();
    }
  }
};

const mouseEnable = () => {
  swiper.mousewheel.enable();
};
</script>
