<template>
  <div class="h-screen">
    <div
      class="flex-col justify-center items-center bg-service-header bg-cover bg-right bg-no-repeat py-40 xl:py-32 pl-8 xl:pl-80"
    >
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
  </div>
</template>

<script setup>
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
