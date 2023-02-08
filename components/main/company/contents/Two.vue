<template>
  <section class="w-[355px] md:w-[704px] xl:w-[1200px] m-auto pt-20 md:pt-40 xl:pt-60">
    <article class="flex flex-col xl:flex-row justify-between gap-4 md:gap-6">
      <h1
        class="text-4xl md:text-6xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-aqua to-primary-mint"
      >
        2021
      </h1>
      <div class="xl:w-[700px]">
        <div v-for="year in historyList['2021']" :key="year.month">
          <div class="flex items-baseline gap-5 font-medium border-b w-fit">
            <h3 class="text-base md:text-xl xl:text-3xl">
              {{ year.month }}
            </h3>
            <h3 class="text-xs md:text-base xl:text-2xl whitespace-pre-line py-2 xl:py-3">
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
        2020
      </h1>
      <div class="xl:w-[700px]">
        <div v-for="year in historyList['2020']" :key="year.month">
          <div class="flex items-center gap-5 font-medium border-b w-fit">
            <h3 class="text-base md:text-xl xl:text-3xl">
              {{ year.month }}
            </h3>
            <h3 class="text-xs md:text-base xl:text-2xl py-3">
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
});
</script>
