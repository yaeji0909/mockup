<template>
  <div class="bg-gray-bg md:h-screen">
    <div
      class="flex justify-left xl:justify-center items-center bg-service-header bg-cover bg-right bg-no-repeat py-40 px-6"
    >
      <div class="xl:w-[1200px]">
        <h1 class="text-4xl xl:text-7xl font-bold text-white">
          <span class="text-primary-aqua">{{ $t('service.zzimcar') }}</span
          >{{ $t('service.zzimcarAbout') }}
        </h1>
        <CommonButton
          bgColor="none"
          textColor="white"
          :text="$t('service.zzimcarDirect')"
          :icon="false"
          @click="ClickBtn(ZZIMCAR_URL)"
          class="mt-8"
        />
      </div>
    </div>
    <MainServiceReviewCard />
  </div>
</template>

<script setup>
const ZZIMCAR_URL = 'https://zzimcar.com/';
/**
 * click button
 */
function ClickBtn(param) {
  window.open(param);
}
</script>
