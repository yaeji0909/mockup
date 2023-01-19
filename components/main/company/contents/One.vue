<template>
  <section class="pt-[100px] w-[375px] md:w-[704px] xl:w-[1200px]">
    <div>
      <h1 class="text-4xl md:text-6xl xl:text-7xl font-bold">Company</h1>
      <h5 class="text-base xl:text-xl mt-[5px] md:mt-[10px]">
        {{ $t('company.sub') }}
      </h5>
    </div>
    <div
      class="flex flex-col xl:flex-row justify-between mt-10 xl:mt-20 gap-4 md:gap-6"
    >
      <h1
        class="text-4xl md:text-6xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-aqua to-primary-mint"
      >
        2022
      </h1>
      <div>
        <div v-for="year in historyList" :key="year.month">
          <div
            :class="[
              'flex items-center gap-5 font-medium border-b w-fit',
              year.month === '05' ? 'py-5' : 'py-3',
            ]"
          >
            <h3 class="text-base md:text-xl xl:text-3xl">
              {{ year.month }}
            </h3>
            <div
              v-if="year.month === '05'"
              class="flex items-center text-base md:text-2xl xl:text-5xl"
            >
              <h3 class="mr-2">{{ $t('company.2022.05-1') }}</h3>
              <div class="relative">
                <img
                  :src="STAR"
                  alt="STAR"
                  class="absolute top-[-10%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
                />
                <div class="flex items-center">
                  <img :src="FEATHER" alt="FEATHER" />
                  <h3 class="text-primary-mint drop-shadow-history">
                    {{ $t('company.2022.05-2') }}
                  </h3>
                  <img :src="FEATHER" alt="FEATHER" class="-scale-x-100" />
                </div>
              </div>
              <h3 class="ml-2">{{ $t('company.2022.05-3') }}</h3>
            </div>
            <h3 v-else class="text-xs md:text-base xl:text-2xl">
              {{ year.content }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const STAR =
  'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/history_star.svg';
const FEATHER =
  'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/history_feather.svg';

const { t } = useI18n();
const historyList = ref([
  { month: '10', content: t('company.2022.10') },
  { month: '07', content: t('company.2022.07') },
  {
    month: '05',
    // content: [
    //   t('company.2022.05-1'),
    //   t('company.2022.05-2'),
    //   t('company.2022.05-3'),
    // ],
  },
  { month: '04', content: t('company.2022.04') },
  { month: '02', content: t('company.2022.02') },
  { month: '01', content: t('company.2022.01') },
]);
</script>
