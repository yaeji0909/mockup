<template>
  <div>
    <section
      class="relative flex justify-center w-[80%] h-[600px] md:h-[400px] m-auto"
    >
      <div
        class="absolute top-[3rem] left-[2rem] md:top-[14rem] md:left-[3rem] xl:left-[20rem]"
      >
        <div class="relative z-10 w-[240px] md:w-[280px] xl:w-[320px]">
          <nuxt-img :src="BUBBLE_LEFT" class="relative" />
          <h4
            class="absolute z-10 top-8 left-14 text-xs md:text-xl xl:text-2xl font-medium whitespace-pre-line"
          >
            {{ $t('recruit.idealTalent.feature1') }}
          </h4>
        </div>
      </div>
      <div
        class="absolute top-[10rem] right-[1rem] md:top-[7rem] md:right-[7rem] xl:right-[18rem]"
      >
        <div class="relative z-10 w-[240px] md:w-[280px] xl:w-[320px]">
          <nuxt-img :src="BUBBLE_RIGHT" class="relative" />
          <h4
            class="absolute z-10 top-7 left-8 text-xs md:text-xl xl:text-2xl font-medium"
          >
            {{ $t('recruit.idealTalent.feature2') }}
          </h4>
        </div>
      </div>
      <div
        class="absolute top-[17rem] right-[0rem] md:top-[16rem] md:right-[2rem] xl:right-[25rem]"
      >
        <div class="relative z-10 w-[240px] md:w-[280px] xl:w-[320px]">
          <nuxt-img :src="BUBBLE_RIGHT" class="relative" />
          <h4
            class="absolute z-10 top-7 left-8 text-xs md:text-xl xl:text-2xl font-medium"
          >
            {{ $t('recruit.idealTalent.feature3') }}
          </h4>
        </div>
      </div>
    </section>
    <section class="relative flex justify-center">
      <div class="absolute top-[-200px]">
        <nuxt-img :src="MAN" class="w-[212px] h-[237px]" />
      </div>
      <div class="relative w-full xl:w-90%">
        <nuxt-img
          :src="BG"
          class="relative object-none object-bottom h-[530px]"
        />
        <div>
          <div
            class="eye-left w-[56px] h-[56px] bg-white rounded-full absolute overflow-hidden left-[10%] top-[50%] duration-1000"
          >
            <div
              class="pupil w-[24px] h-[24px] bg-black rounded-full relative transform translate-x-1/2 translate-y-1/2"
            />
          </div>
          <div
            class="eye-right w-[56px] h-[56px] bg-white rounded-full absolute overflow-hidden left-[30%] md:left-[20%] lg:left-[17%] top-[50%] duration-1000"
          >
            <div
              class="pupil w-[24px] h-[24px] bg-black rounded-full relative transform translate-x-1/2 translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const BUBBLE_LEFT =
  'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/speech-bubble-left.svg';
const BUBBLE_RIGHT =
  'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/speech-bubble-right.svg';
const MAN =
  'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/ideal-talent.svg';
const BG =
  'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/ideal-talent-bg.svg';

onMounted(() => {
  const pupil = document.querySelectorAll('.pupil');

  document.addEventListener('mousemove', (e) => {
    let x = (e.clientX * 100) / window.innerWidth - 50;
    let y = (e.clientY * 100) / window.innerHeight - 50;

    pupil.forEach((item) => {
      item.style.left = x + '%';
      item.style.top = y + '%';
    });
  });
});
</script>
