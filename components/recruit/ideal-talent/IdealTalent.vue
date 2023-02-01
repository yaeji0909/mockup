<template>
  <div>
    <section class="relative flex justify-center w-[80%] h-[600px] md:h-[400px] m-auto">
      <div class="absolute top-[3rem] left-[2rem] md:top-[14rem] md:left-[3rem] xl:left-[20rem]">
        <div class="relative z-10 w-[240px] md:w-[280px] xl:w-[320px]">
          <nuxt-img :src="BUBBLE_LEFT" class="relative" />
          <h4 class="absolute z-10 top-8 left-14 text-xs md:text-xl xl:text-2xl font-medium whitespace-pre-line">
            {{ $t('recruit.idealTalent.feature1') }}
          </h4>
        </div>
      </div>
      <div class="absolute top-[10rem] right-[1rem] md:top-[7rem] md:right-[7rem] xl:right-[18rem]">
        <div class="relative z-10 w-[240px] md:w-[280px] xl:w-[320px]">
          <nuxt-img :src="BUBBLE_RIGHT" class="relative" />
          <h4 class="absolute z-10 top-7 left-8 text-xs md:text-xl xl:text-2xl font-medium">
            {{ $t('recruit.idealTalent.feature2') }}
          </h4>
        </div>
      </div>
      <div class="absolute top-[17rem] right-[0rem] md:top-[16rem] md:right-[2rem] xl:right-[25rem]">
        <div class="relative z-10 w-[240px] md:w-[280px] xl:w-[320px]">
          <nuxt-img :src="BUBBLE_RIGHT" class="relative" />
          <h4 class="absolute z-10 top-7 left-8 text-xs md:text-xl xl:text-2xl font-medium">
            {{ $t('recruit.idealTalent.feature3') }}
          </h4>
        </div>
      </div>
    </section>
    <section class="relative flex justify-center">
      <div class="absolute top-[-200px]">
        <nuxt-img :src="MAN" class="w-[212px] h-[237px]" />
      </div>
      <div class="min-w-max xl:w-90%">
        <nuxt-img :src="BG" class="relative" />
      </div>
    </section>
  </div>
</template>

<script setup>
const BUBBLE_LEFT = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/speech-bubble-left.svg';
const BUBBLE_RIGHT = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/speech-bubble-right.svg';
const MAN = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/ideal-talent.svg';
const BG = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/ideal-talent-bg.svg';
</script>
