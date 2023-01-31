<template>
  <div
    class="benefit-card flex flex-col gap-4 pt-[80px] xl:pt-[100px] gap-[24px] md:gap-[20px] lg:gap-[32px] xl:gap-[40px]"
  >
    <div
      v-for="(b, idx) in benefitList"
      :key="idx"
      class="flex gap-6"
      :class="idx === 1 ? '-translate-x-[14%]' : ''"
    >
      <div v-for="benefit in b.benefits" :key="benefit.title">
        <div
          class="flex-col justify-center items-center w-[210px] h-[210px] md:w-[245px] md:h-[245px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] bg-gray-bg rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[20px]"
        >
          <nuxt-img
            :src="benefit.src"
            class="m-auto w-[120px] md:w-[140px] lg:w-[160px] xl:w-[200px]"
          />
          <div>
            <h4 class="text-2xs md:text-2xl font-medium">
              {{ benefit.title }}
            </h4>
            <h5
              class="text-[10px] md:text-base pt-[3px] md:pt-[4px] xl:pt-[5px] whitespace-pre-line leading-4"
            >
              {{ benefit.desc }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const benefitList = ref([
  {
    benefits: [
      {
        title: t('recruit.benefit.outfit'),
        desc: t('recruit.benefit.outfitDesc'),
        src: 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_01.svg',
      },
      {
        title: t('recruit.benefit.exciting'),
        desc: t('recruit.benefit.excitingDesc'),
        src: 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_02.svg',
      },
      {
        title: t('recruit.benefit.horizontal'),
        desc: t('recruit.benefit.horizontalDesc'),
        src: 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_03.svg',
      },
      {
        title: t('recruit.benefit.vacation'),
        desc: t('recruit.benefit.vacationDesc'),
        src: 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_04.svg',
      },
      {
        title: t('recruit.benefit.commute'),
        desc: t('recruit.benefit.commuteDesc'),
        src: 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_05.svg',
      },
      {
        title: t('recruit.benefit.early'),
        desc: t('recruit.benefit.earlyDesc'),
        src: 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_06.svg',
      },
      {
        title: t('recruit.benefit.snack'),
        desc: t('recruit.benefit.snackDesc'),
        src: 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_07.svg',
      },
    ],
  },
  {
    benefits: [
      {
        title: t('recruit.benefit.lunch'),
        desc: t('recruit.benefit.lunchDesc'),
        src: 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_08.svg',
      },
      {
        title: t('recruit.benefit.card'),
        desc: t('recruit.benefit.cardDesc'),
        src: 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_09.svg',
      },
      {
        title: t('recruit.benefit.selfDevelopement'),
        desc: t('recruit.benefit.selfDevelopementDesc'),
        src: 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_10.svg',
      },
      {
        title: t('recruit.benefit.expenditure'),
        desc: t('recruit.benefit.expenditureDesc'),
        src: 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_11.svg',
      },
      {
        title: t('recruit.benefit.holiday'),
        desc: t('recruit.benefit.holidayDesc'),
        src: 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_12.svg',
      },
      {
        title: t('recruit.benefit.discount'),
        desc: t('recruit.benefit.discountDesc'),
        src: 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_13.svg',
      },
      {
        title: t('recruit.benefit.more'),
        desc: t('recruit.benefit.moreDesc'),
        src: 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/benefit_14.svg',
      },
    ],
  },
]);
</script>

<style scoped>
/* marquee */
.benefit-card {
  animation: marquee 50s linear infinite;
}
.benefit-card:hover {
  animation-play-state: paused;
}
@keyframes marquee {
  /* from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  } */
  0% {
    left: 0;
  }
  100% {
    left: -100%;
  }
}
</style>
