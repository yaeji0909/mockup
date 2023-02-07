<template>
  <div>
    <CommonNavigationBar class="fixed z-20 w-screen" @scrollTo="scrollTo" />

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
      ref="mainSwiper"
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
      <SwiperSlide id="">
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

onMounted(() => {
  swiper = document.querySelector('.main-swiper').swiper;
});

const scrollTo = el => {
  if (el === 'Service') {
    swiper.slideTo(1);
  } else if (el === 'Company') {
    swiper.slideTo(4);
  } else if (el === 'News') {
    swiper.slideTo(5);
  } else if (el === 'Recruit') {
    swiper.slideTo(6);
  } else if (el === 'Contact') {
    swiper.slideTo(7);
  }
};

/**
 * 메인 페이지 이외의 스크롤 이동
 */
const router = useRouter();

const pageScoll = param => {
  console.log('다른 페이지에서 이동', param);
  // 여기서 메인 페이지로 이동 후 스크롤 이동
  if (value === '회사소개') {
    router.push('/');
  }
};
</script>
