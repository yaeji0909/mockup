<template>
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
    @slideChange="e => onSlideChange(e)"
  >
    <!-- 1 -->
    <swiper-slide
      class="flex flex-col-reverse xl:flex-row text-center xl:text-left justify-center items-center whitespace-pre-line"
    >
      <div class="mt-10 xl:mr-20">
        <h1 class="text-3xl md:text-4xl xl:text-7xl font-bold">
          {{ $t('service.1') }}
        </h1>
        <p class="text-xs md:text-sm xl:text-xl mt-[15px]">
          {{ $t('service.1-desc') }}
        </p>
      </div>
      <img :src="SERVICE_1" alt="SERVICE_1" class="w-[400px] md:w-[500px]" />
    </swiper-slide>
    <!-- 2 -->
    <swiper-slide
      class="flex flex-col xl:flex-row text-center xl:text-left justify-center items-center xl:gap-14 whitespace-pre-line"
    >
      <img :src="SERVICE_2" alt="SERVICE_2" class="w-[400px] md:w-[500px]" />
      <div class="mt-10 xl:mr-20">
        <h1 class="text-3xl md:text-4xl xl:text-7xl font-bold">
          {{ $t('service.2') }}
        </h1>
        <p class="text-xs md:text-sm xl:text-xl mt-[15px]">
          {{ $t('service.2-desc') }}
        </p>
      </div>
    </swiper-slide>
    <!-- 3 -->
    <swiper-slide
      class="flex flex-col-reverse xl:flex-row text-center xl:text-left justify-center items-center xl:gap-14 whitespace-pre-line"
    >
      <div class="mt-10 xl:mr-20">
        <h1 class="text-3xl md:text-4xl xl:text-7xl font-bold">
          {{ $t('service.3') }}
        </h1>
        <p class="text-xs md:text-sm xl:text-xl mt-[15px]">
          {{ $t('service.3-desc') }}
        </p>
      </div>
      <img :src="SERVICE_3" alt="SERVICE_3" class="w-[400px] md:w-[500px]" />
    </swiper-slide>
    <!-- 4 -->
    <swiper-slide
      class="flex flex-col xl:flex-row text-center xl:text-left justify-center items-center xl:gap-14 whitespace-pre-line"
    >
      <img :src="SERVICE_4" alt="SERVICE_4" class="w-[400px] md:w-[500px]" />
      <div class="mt-10 xl:mr-20">
        <h1 class="text-3xl md:text-4xl xl:text-7xl font-bold">
          {{ $t('service.4') }}
        </h1>
        <p class="text-xs md:text-sm xl:text-xl mt-[15px]">
          {{ $t('service.4-desc') }}
        </p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { onMounted, ref } from 'vue';

const SERVICE_1 = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-1.svg';
const SERVICE_2 = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-2.svg';
const SERVICE_3 = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-3.svg';
const SERVICE_4 = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-4.svg';

const modules = [Pagination, Mousewheel];

let number = ref('01');

/**
 * custom pagination
 */
onMounted(() => {
  // add line
  const el = document.querySelector('.swiper-pagination');
  const line = document.createElement('div');
  el.prepend(line);
  // add number
  let p = document.createElement('p');
  let num = document.createTextNode('01');
  p.appendChild(num);
  el.prepend(p);
});

/**
 * change number
 */
const onSlideChange = e => {
  if (e.activeIndex === 0) {
    number.value = '01';
  } else if (e.activeIndex === 1) {
    number.value = '02';
  } else if (e.activeIndex === 2) {
    number.value = '03';
  } else if (e.activeIndex === 3) {
    number.value = '04';
  }

  const el = document.querySelector('.swiper-pagination > p');
  el.innerText = number.value;
};
</script>

<style scoped>
.swiper-slide {
  background: #fff;
  height: 100vh;
}
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
