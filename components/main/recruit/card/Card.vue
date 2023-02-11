<template>
  <div class="bg-secondary-beige h-screen">
    <!-- status -->
    <Swiper
      :grabCursor="true"
      :slidesPerView="'auto'"
      :centeredSlides="largerThanSm ? false : true"
      :modules="modules"
      :breakpoints="{
        320: { slidesPerView: 'auto' },
        768: { slidesPerView: 'auto' },
        1024: { slidesPerView: 'auto' },
      }"
      class="board"
    >
      <SwiperSlide
        v-for="(board, idx) in recruitBoardList"
        :key="board.department"
        class="board flex justify-center items-center gap-2"
      >
        <p class="text-base font-medium">{{ board.department }}</p>
        <p
          class="text-xs font-bold rounded-full w-[29px] h-[24px] flex justify-center items-center"
          :class="
            idx === 0
              ? ['bg-black', 'text-white']
              : ['bg-gray-border', 'text-black']
          "
        >
          {{ board.num }}
        </p>
      </SwiperSlide>
    </Swiper>
    <!-- card -->
    <Swiper
      :grabCursor="true"
      :centeredSlides="largerThanSm ? false : true"
      :spaceBetween="30"
      :modules="modules"
      :pagination="{ clickable: true }"
      :breakpoints="{
        320: { slidesPerView: 'auto' },
        768: { slidesPerView: 'auto' },
        1024: { slidesPerView: 'auto' },
        1920: { slidesPerView: 'auto' },
      }"
      class="card"
    >
      <SwiperSlide
        v-for="r in recruitList"
        :key="r.title"
        class="card bg-white rounded-[20px] shadow-recruit mt-10 mb-10 md:my-12"
      >
        <div class="flex justify-between items-center">
          <p class="text-xs md:text-base lg:text-xl font-medium text-gray-sub">
            {{ r.department }}
          </p>
          <p
            class="text-xs md:text-sm lg:text-base w-[60px] h-[30px] border rounded-full flex justify-center items-center"
          >
            {{ r.career }}
          </p>
        </div>
        <h3
          class="recruit-title text-xl md:text-2xl xl:text-3xl font-bold text-black pt-[13px] overflow-hidden"
        >
          {{ r.title }}
        </h3>
        <p class="text-xs md:text-sm xl:text-base text-gray-caption pt-[10px]">
          {{ r.location }}
        </p>
        <h3
          class="text-xl md:text-2xl xl:text-3xl font-bold text-primary-aqua pt-[12px] xl:pt-[23px]"
        >
          D-{{ r.dDay }}
        </h3>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { recruitList } from '@/components/recruit/list/recruit.json';
import { useI18n } from 'vue-i18n';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Mousewheel, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { diffDay } from '/composables/due.js';

const { t } = useI18n();

const modules = [Pagination, Mousewheel, FreeMode];

const recruitBoardList = [
  { department: t('recruit.total'), num: 5 },
  { department: t('recruit.businessSupport'), num: 1 },
  { department: t('recruit.markerting'), num: 1 },
  { department: t('recruit.engineer'), num: 2 },
  { department: t('recruit.cs'), num: 1 },
];

const breakpoints = useBreakpoints(breakpointsTailwind);
const largerThanSm = breakpoints.greater('sm'); // only larger than sm

/**
 * d-day setting
 */
recruitList.map((d) => {
  d.dDay = diffDay(d.endAt);
});

diffDay();
setInterval(diffDay, 1000 * 60 * 60 * 24);
</script>

<style scoped>
.recruit-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
:deep(.swiper) {
  padding: 0px 30px;
}
:deep(.board > .swiper-wrapper) {
  display: flex;
  justify-content: center;
}
:deep(.swiper-pagination) {
  bottom: 0%;
  width: 100%;
}
/* fix board && card width */
@media (min-width: 1025px) {
  :deep(.swiper.card) {
    width: 1210px;
  }
  :deep(.swiper-slide.board) {
    width: 120px !important;
    height: 50px;
    margin-top: 2rem;
    display: flex !important;
  }
  :deep(.swiper-slide.card) {
    width: 372px !important;
    height: 260px !important;
    padding: 30px 35px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  :deep(.swiper-slide.board) {
    width: 120px !important;
    height: 50px;
    display: flex !important;
  }
  :deep(.swiper-slide.card) {
    width: 304px !important;
    height: 210px !important;
    padding: 20px 25px;
  }
}
@media (max-width: 767px) {
  :deep(.swiper-slide.board) {
    width: 120px !important;
    height: 50px;
    display: flex;
  }
  :deep(.swiper-slide.card) {
    width: 260px !important;
    height: 180px !important;
    padding: 15px 20px;
  }
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
  width: 20px;
  transition: 0.5s;
  border-radius: 5px;
  background: #97dece;
}
</style>
