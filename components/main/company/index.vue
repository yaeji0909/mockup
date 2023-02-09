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
      @transitionEnd="e => onTransitionEnd(e)"
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
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const modules = [Pagination, Mousewheel];

const COMPANY_VIDEO = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/video/history_video.mp4';

/**
 * change active year color
 */
let year = ref('2022');

let mousewheelUp = ref(false);

const onSlideChange = e => {
  changeYearColor(year.value, e.activeIndex);
};

const changeYearColor = (years, idx) => {
  const elList = document.querySelectorAll('.year');
  const bulletList = document.querySelectorAll('.company .swiper-pagination-bullet');

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
    bulletList[2].classList.add('swiper-pagination-bullet-active');
    // non-active color
    elList[0].setAttribute('style', 'margin:0.5rem; color: #F2F5FC');
    elList[3].setAttribute('style', 'margin:0.5rem; color: #F2F5FC');
    elList[4].setAttribute('style', 'margin:0.5rem; color: #F2F5FC');
    // remove non-active bullet
    bulletList[3].classList.remove('swiper-pagination-bullet-active');
    bulletList[4].classList.remove('swiper-pagination-bullet-active');
  } else if (idx === 2) {
    elList[3].setAttribute('style', 'margin:0.5rem; color: #37D1C7');
    elList[4].setAttribute('style', 'margin:0.5rem; color: #37D1C7');
    bulletList[3].classList.add('swiper-pagination-bullet-active');
    bulletList[4].classList.add('swiper-pagination-bullet-active');
    // non-active color
    elList[0].setAttribute('style', 'margin:0.5rem; color: #F2F5FC');
    elList[1].setAttribute('style', 'margin:0.5rem; color: #F2F5FC');
    elList[2].setAttribute('style', 'margin:0.5rem; color: #F2F5FC');
    // remove non-active bullet
    bulletList[2].classList.remove('swiper-pagination-bullet-active');
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
  line.className = 'line';

  parentEl.prepend(line);

  // add year
  const boxEl = document.createElement('div');
  boxEl.setAttribute(
    'style',
    'display:flex; flex-direction:column; position:absolute; right:1rem; border: none; color: #F2F5FC; font-weight: 700; gap:0.7rem',
  );
  parentEl.prepend(boxEl);
  const years = ['2022', '2021', '2020', '2019', '2018'];
  years.map(year => {
    const childEl = document.createElement('p');
    childEl.className = `year-${year} year`;
    childEl.setAttribute('style', 'margin:0.5rem; font-size:18px');
    childEl.textContent = year;

    boxEl.append(childEl);
  });

  // first setting
  changeYearColor(2022, 0);

  //add bullets
  const bulletOne = document.createElement('span');
  const bulletTwo = document.createElement('span');

  bulletOne.className = `swiper-pagination-bullet one`;
  bulletTwo.className = `swiper-pagination-bullet two`;

  parentEl.insertBefore(bulletOne, null);
  parentEl.insertBefore(bulletTwo, null);

  // change pagination position
  const breakpoints = useBreakpoints(breakpointsTailwind);
  const largerThanSm = breakpoints.greater('sm'); // only larger than sm
  if (!largerThanSm.value) {
    const pagination = document.querySelector('.company .swiper-pagination-vertical');
    pagination.classList.add('sm');
    const line = document.querySelector('.company .swiper-pagination-vertical .line');
    line.classList.add('sm');
    const bullets = [...document.querySelectorAll('.company .swiper-pagination-bullet')];
    bullets.map(bullet => {
      bullet.classList.add('sm');
    });
    const years = [...document.querySelectorAll('.company .swiper-pagination-vertical > div > p')];
    years.map(year => {
      year.classList.add('sm');
    });
  }

  // scroll move
  addEventListener('wheel', event => {
    if (event.deltaY < 0) {
      mousewheelUp.value = true;
    } else {
      mousewheelUp.value = false;
    }
  });
});

/**
 * scroll move : 마지막 index 이후에 다음 컴포넌트 스크롤
 */
const emit = defineEmits(['mouseEnable']);
const onTransitionEnd = e => {
  if (e.isEnd) {
    emit('mouseEnable');
  } else if (e.activeIndex === 0 && mousewheelUp.value) {
    emit('mouseEnable');
  }
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
:deep(.swiper-pagination-vertical.sm) {
  top: 86%;
}
/* line */
:deep(.swiper-pagination-vertical > div) {
  position: absolute;
  height: 280px;
  border: solid 1px #d5dde5;
  top: 3%;
}
:deep(.swiper-pagination-vertical .line.sm) {
  margin: 1rem 0 !important;
}
/* year */
:deep(.swiper-pagination-vertical > div > p.sm) {
  font-size: 14px;
  margin: 0 !important;
}
/* bullet */
:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background: #d5dde5;
  margin: 1.5rem 0 !important;
  opacity: 1;
}
:deep(.swiper-pagination-bullet.sm) {
  margin: 1rem 0 !important;
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
