<template>
  <div class="bg-secondary-beige h-screen">
    <section class="flex justify-center gap-10 pt-20">
      <div
        v-for="(board, idx) in recruitBoardList"
        :key="board.department"
        class="flex justify-center items-center gap-2"
      >
        <p class="font-medium">{{ board.department }}</p>
        <p
          class="text-xs font-bold rounded-full w-[29px] h-[24px] flex justify-center items-center"
          :class="idx === 0 ? ['bg-black', 'text-white'] : ['bg-gray-border', 'text-black']"
        >
          {{ board.num }}
        </p>
      </div>
    </section>
    <section class="flex justify-center gap-10 pt-12">
      <div
        v-for="r in recruit"
        :key="r.title"
        class="bg-white w-[260px] h-[180px] md:w-[304px] md:h-[210px] lg:w-[372px] lg:h-[260px] rounded-[20px] shadow-recruit px-[35px] py-[30px]"
      >
        <div class="flex justify-between items-center">
          <p class="text-xl font-medium text-gray-sub">{{ r.department }}</p>
          <p class="w-[60px] h-[30px] border rounded-full text-base flex justify-center items-center">{{ r.career }}</p>
        </div>
        <h3 class="text-3xl font-bold text-black pt-[13px]">{{ r.title }}</h3>
        <p class="text-base text-gray-caption pt-[10px]">{{ r.location }}</p>
        <h3 class="text-3xl font-bold text-primary-aqua pt-[23px]">{{ r.dueDate }}</h3>
      </div>
    </section>
  </div>
</template>

<script setup>
import recruits from '@/components/main/recruit/card/recruits.json';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const { recruit } = recruits;

const recruitBoardList = [
  { image: '', department: t('recruit.total'), num: 5 },
  { image: '', department: t('recruit.businessSupport'), num: 1 },
  { image: '', department: t('recruit.markerting'), num: 1 },
  { image: '', department: t('recruit.engineer'), num: 2 },
  { image: '', department: t('recruit.cs'), num: 1 },
];
</script>
