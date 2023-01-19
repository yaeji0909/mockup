<template>
  <div class="relative h-screen">
    <video autoplay loop muted class="w-screen h-1/2 object-cover brightness-50">
      <source :src="RECRUIT_VIDEO" type="video/mp4" />
    </video>
    <div class="absolute top-[100px] z-20 flex-col justify-center items-center py-12 md:py-32 pl-8 xl:pl-80">
      <h5 class="text-primary-aqua text-base md:text-xl xl:text-2xl">RECRUIT</h5>
      <h1 class="text-white text-3xl md:text-4xl xl:text-5xl font-bold whitespace-pre-line pt-3">
        {{ $t('recruit.title') }}
      </h1>
      <CommonButtonShortcutBtn
        :text="$t('button.moreDetail')"
        color="white"
        hoverColor="primary-aqua"
        class="recruit-shortcut-btn pt-7"
        @click="router.push('/recruit')"
      >
        <!-- <template #icon>
          <img class="shortcut-btn-icon" :src="ARROW_WHITE" />
        </template> -->
      </CommonButtonShortcutBtn>
    </div>
    <MainRecruitCard />
  </div>
</template>

<script setup>
const RECRUIT_VIDEO = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/video/recruit_video.mp4';
const ARROW_WHITE = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/shortcut_arrow_white.svg';
const ARROW_MINT = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/shortcut_arrow_mint.svg';

const router = useRouter();
/**
 * hover 시 ARROW_BLACK or ARROW_MINT 적용
 */
onMounted(() => {
  const el = document.querySelector('.recruit-shortcut-btn');
  el.addEventListener('mouseover', e => {
    document.querySelector('.shortcut-btn-icon').src = ARROW_MINT;
  });
  el.addEventListener('mouseout', e => {
    document.querySelector('.shortcut-btn-icon').src = ARROW_WHITE;
  });
});
</script>
