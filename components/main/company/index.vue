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
      <swiper-slide class="flex min-h-screen">
        <MainCompanyContentsOne />
      </swiper-slide>
      <swiper-slide class="flex min-h-screen">
        <MainCompanyContentsTwo />
      </swiper-slide>
      <swiper-slide class="flex min-h-screen">
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
 * change active year color
 */
let year = ref('2022');

const onSlideChange = e => {
  changeYearColor(year.value, e.activeIndex);
};

const changeYearColor = (years, idx) => {
  const elList = document.querySelectorAll('.year');

  if (idx === 0) {
    elList[0].setAttribute('style', 'margin:0.5rem; color: #37D1C7');
    // non-active color
    elList[1].setAttribute('style', 'margin:0.5rem; color: #F2F5FC');
    elList[2].setAttribute('style', 'margin:0.5rem; color: #F2F5FC');
    elList[3].setAttribute('style', 'margin:0.5rem; color: #F2F5FC');
    elList[4].setAttribute('style', 'margin:0.5rem; color: #F2F5FC');
  } else if (idx === 1) {
    elList[1].setAttribute('style', 'margin:0.5rem; color: #37D1C7');
    elList[2].setAttribute('style', 'margin:0.5rem; color: #37D1C7');
    // non-active color
    elList[0].setAttribute('style', 'margin:0.5rem; color: #F2F5FC');
    elList[3].setAttribute('style', 'margin:0.5rem; color: #F2F5FC');
    elList[4].setAttribute('style', 'margin:0.5rem; color: #F2F5FC');
  } else if (idx === 2) {
    elList[3].setAttribute('style', 'margin:0.5rem; color: #37D1C7');
    elList[4].setAttribute('style', 'margin:0.5rem; color: #37D1C7');
    // non-active color
    elList[0].setAttribute('style', 'margin:0.5rem; color: #F2F5FC');
    elList[1].setAttribute('style', 'margin:0.5rem; color: #F2F5FC');
    elList[2].setAttribute('style', 'margin:0.5rem; color: #F2F5FC');
  }
};

/**
 * custom pagination
 */
onMounted(() => {
  const parentEl = document.querySelector('.company .swiper-pagination');

  // add line
  const line = document.createElement('div');
  line.setAttribute('style', 'margin:1.5rem');
  parentEl.prepend(line);

  // add year
  const boxEl = document.createElement('div');
  boxEl.setAttribute(
    'style',
    'display:flex; flex-direction:column; position:absolute; right:1rem; border: none; color: #F2F5FC; font-weight: 700',
  );
  parentEl.prepend(boxEl);
  const years = ['2022', '2021', '2020', '2019', '2018'];
  years.map(year => {
    const childEl = document.createElement('p');
    childEl.className = `year-${year} year`;
    childEl.setAttribute('style', 'margin:0.5rem');
    childEl.textContent = year;

    boxEl.append(childEl);
  });

  changeYearColor(2022, 0);
});
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
  height: 280px;
  border: solid 1px #d5dde5;
  top: 3%;
}
/* bullet */
:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background: #d5dde5;
  margin: 1.5rem 0 !important;
  opacity: 1;
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
