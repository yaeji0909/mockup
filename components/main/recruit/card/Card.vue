<template>
  <div class="bg-secondary-beige h-screen px-10 pt-20">
    <!-- status -->
    <!-- <section class="flex justify-center items-center"> -->
    <swiper :grabCursor="true" :spaceBetween="2" :modules="modules">
      <swiper-slide
        v-for="(board, idx) in recruitBoardList"
        :key="board.department"
        class="flex justify-center items-center gap-2 w-[50px]"
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
      </swiper-slide>
    </swiper>
    <!-- </section> -->
    <!-- card -->
    <swiper
      :grabCursor="true"
      :slidesPerView="3"
      :spaceBetween="30"
      :modules="modules"
      :pagination="{
        clickable: true,
      }"
    >
      <!-- <div class="flex justify-center gap-10 pt-12"> -->
      <swiper-slide
        v-for="r in recruit"
        :key="r.title"
        class="bg-white w-[260px] h-[180px] md:w-[304px] md:h-[210px] lg:w-[372px] lg:h-[260px] rounded-[20px] shadow-recruit px-[35px] py-[30px] my-12"
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
          class="text-xl md:text-2xl xl:text-3xl font-bold text-primary-aqua pt-[23px]"
        >
          {{ r.dueDate }}
        </h3>
      </swiper-slide>
      <!-- </div> -->
    </swiper>
  </div>
</template>

<script setup>
import recruits from '@/components/main/recruit/card/recruits.json';
import { useI18n } from 'vue-i18n';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const { t } = useI18n();

const { recruit } = recruits;

const modules = [Pagination, Mousewheel];

const recruitBoardList = [
  { department: t('recruit.total'), num: 5 },
  { department: t('recruit.businessSupport'), num: 1 },
  { department: t('recruit.markerting'), num: 1 },
  { department: t('recruit.engineer'), num: 2 },
  { department: t('recruit.cs'), num: 1 },
];
</script>

<style scoped>
.recruit-title {
  /* transform: translate(0px, 0px); */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
/* custom pagination */
:deep(.swiper-pagination) {
  bottom: 0%;
}
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
