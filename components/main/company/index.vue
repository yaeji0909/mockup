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
      @slideChange="e => onSlideChange(e)"
      class="company"
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

/**
 * custom pagination
 */
onMounted(() => {
  // add line
  const el = document.querySelector('.company .swiper-pagination');
  const line = document.createElement('div');
  el.prepend(line);
  // add number
  let p = document.createElement('p');
  let num = document.createTextNode('2022');
  p.appendChild(num);
  el.prepend(p);
});

/**
 * change year
 */
let year = ref('2022');

const onSlideChange = e => {
  if (e.activeIndex === 0) {
    year.value = '01';
  } else if (e.activeIndex === 1) {
    year.value = '02';
  } else if (e.activeIndex === 2) {
    year.value = '03';
  }

  const el = document.querySelector('.swiper-pagination > p');
  el.innerText = year.value;
};
</script>

<style scoped>
/* custom pagination */
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
  position: absolute;
  /* height: 280px; */
  border: solid 1px #d5dde5;
  margin: 20px 0 30px 0;
}
/* year */
:deep(.swiper-pagination-vertical > p) {
  position: absolute;
  right: 3rem;
  font-size: 18px;
  color: #37d1c7;
  /* color: #f2f5fc; */
  font-weight: 600;
}
:deep(.swiper-pagination-vertical > p:hover, p:active) {
  color: #37d1c7;
}
/* bullet */
:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background: #d5dde5;
}
:deep(.swiper-pagination-bullet:hover) {
  background: #37d1c7;
  filter: blur(2.5px);
  box-shadow: 0px 0px 5px rgba(55, 209, 199, 0.5);
}
:deep(.swiper-pagination-bullet-active) {
  height: 8px;
  transition: 0.5s;
  border-radius: 5px;
  background: #37d1c7;
  filter: blur(2.5px);
  box-shadow: 0px 0px 5px rgba(55, 209, 199, 0.5);
}
</style>
