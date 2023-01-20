<template>
  <section class="pt-[100px] w-[375px] md:w-[704px] xl:w-[1200px]">
    <article class="flex flex-col xl:flex-row justify-between mt-10 xl:mt-20 gap-4 md:gap-6">
      <h1
        class="text-4xl md:text-6xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-aqua to-primary-mint"
      >
        2019
      </h1>
      <div class="xl:w-[700px]">
        <div v-for="year in historyList['2019']" :key="year.month">
          <div class="flex items-baseline gap-5 font-medium border-b w-fit">
            <h3 class="text-base md:text-xl xl:text-3xl">
              {{ year.month }}
            </h3>
            <h3 class="text-xs md:text-base xl:text-2xl whitespace-pre-line py-3">
              {{ year.content }}
            </h3>
          </div>
        </div>
      </div>
    </article>
    <article class="flex flex-col xl:flex-row justify-between mt-10 xl:mt-10 gap-4 md:gap-6">
      <h1
        class="text-4xl md:text-6xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-aqua to-primary-mint"
      >
        2018
      </h1>
      <div class="xl:w-[700px]">
        <div v-for="year in historyList['2018']" :key="year.month">
          <div :class="['flex items-baseline gap-5 font-medium border-b w-fit', year.month === '05' ? 'py-5' : 'py-3']">
            <h3 class="text-base md:text-xl xl:text-3xl">
              {{ year.month }}
            </h3>
            <div v-if="year.month === '05'" class="flex items-center text-base md:text-2xl xl:text-5xl">
              <h3 class="mr-2 text-primary-mint drop-shadow-history">
                {{ $t('company.2018.05-1') }}
              </h3>
              <h3 class="ml-2">{{ $t('company.2018.05-2') }}</h3>
            </div>
            <h3 v-else class="text-xs md:text-base xl:text-2xl whitespace-pre-line">
              {{ year.content }}
            </h3>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const historyList = ref({
  2019: [
    { month: '07', content: t('company.2019.07') },
    { month: '06', content: t('company.2019.06') },
    { month: '02', content: t('company.2019.02') },
  ],
  2018: [
    { month: '12', content: t('company.2018.12') },
    { month: '10', content: t('company.2018.10') },
    { month: '09', content: t('company.2018.09') },
    { month: '05' },
  ],
});
</script>
