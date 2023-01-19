<template>
  <div class="relative w-full h-screen">
    <section>
      <video autoplay loop muted class="absolute z-[-1] w-full h-full object-cover brightness-50">
        <source :src="COMPANY_VIDEO" type="video/mp4" />
      </video>
    </section>
    <div class="flex justify-center">
      <!-- slide 1 (2022) -->
      <section class="text-white pt-[100px] w-[375px] md:w-[704px] xl:w-[1200px]">
        <div>
          <h1 class="text-4xl md:text-6xl xl:text-7xl font-bold">Company</h1>
          <h5 class="text-base xl:text-xl mt-[5px] md:mt-[10px]">{{ $t('company.sub') }}</h5>
        </div>
        <div class="flex flex-col xl:flex-row justify-between mt-10 xl:mt-20 gap-4 md:gap-6">
          <h1
            class="text-4xl md:text-6xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-aqua to-primary-mint"
          >
            2022
          </h1>
          <div>
            <div v-for="year in historyList['2022']" :key="year.month">
              <div
                :class="['flex items-center gap-5 font-medium border-b w-fit', year.month === '05' ? 'py-5' : 'py-3']"
              >
                <h3 class="text-base md:text-xl xl:text-3xl">{{ year.month }}</h3>
                <div v-if="year.month === '05'" class="flex text-base md:text-2xl xl:text-5xl">
                  <!-- 중소벤처기업부 -->
                  <div v-if="year.idx === 1">
                    <!-- <h3>{{ year.content }}</h3> -->
                    <h3>{{ $t('company.2022.05-1') }}</h3>
                  </div>
                  <!-- 아기 유니콘 -->
                  <div v-if="year.idx === 2" class="relative">
                    <img
                      :src="STAR"
                      alt="STAR"
                      class="absolute top-[-25%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
                    />
                    <div class="flex">
                      <img :src="FEATHER" alt="FEATHER" />
                      <!-- <h3 class="text-primary-mint drop-shadow-history">{{ year.content }}</h3> -->
                      <h3 class="text-primary-mint drop-shadow-history">{{ $t('company.2022.05-2') }}</h3>
                      <img :src="FEATHER" alt="FEATHER" class="-scale-x-100" />
                    </div>
                  </div>
                  <!-- 기업 1위 선정 -->
                  <div v-if="year.idx === 3">
                    <!-- <h3>{{ year.content }}</h3> -->
                    <h3>{{ $t('company.2022.05-3') }}</h3>
                  </div>
                </div>
                <h3 v-else class="text-xs md:text-base xl:text-2xl">
                  {{ year.content }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const COMPANY_VIDEO = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/video/history_video.mp4';
const STAR = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/history_star.svg';
const FEATHER = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/history_feather.svg';

const { t } = useI18n();
const historyList = ref({
  2022: [
    { month: '10', content: t('company.2022.10') },
    { month: '07', content: t('company.2022.07') },
    { month: '05', content: t('company.2022.05') },
    // { month: '05', content: t('company.2022.05-1'), idx: 1 },
    // { month: '05', content: t('company.2022.05-2'), idx: 2 },
    // { month: '05', content: t('company.2022.05-3'), idx: 3 },
    { month: '04', content: t('company.2022.04') },
    { month: '02', content: t('company.2022.02') },
    { month: '01', content: t('company.2022.01') },
  ],
  2021: [
    { month: '12', content: t('company.2021.12') },
    { month: '03', content: t('company.2021.03') },
    { month: '02', content: t('company.2021.02') },
  ],
  2020: [
    { month: '06', content: t('company.2020.06') },
    { month: '05', content: t('company.2020.05') },
    { month: '04', content: t('company.2020.04') },
  ],
  2019: [
    { month: '07', content: t('company.2019.07') },
    { month: '06', content: t('company.2019.06') },
    { month: '02', content: t('company.2019.02') },
  ],
  2018: [
    { month: '12', content: t('company.2018.12') },
    { month: '10', content: t('company.2018.10') },
    { month: '09', content: t('company.2018.09') },
    { month: '05', content: t('company.2018.05') },
  ],
});
</script>

<style scoped></style>
