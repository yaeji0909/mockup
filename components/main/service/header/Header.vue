<template>
  <div class="h-screen">
    <div
      class="flex-col justify-center items-center bg-service-header bg-cover bg-right bg-no-repeat py-40 xl:py-32 pl-8 xl:pl-80"
    >
      <h1 class="text-4xl xl:text-7xl font-bold text-white">
        <span class="text-primary-aqua">{{ $t('service.zzimcar') }}</span
        >{{ $t('service.zzimcarAbout') }}
      </h1>
      <CommonButton
        bgColor="none"
        :text="$t('service.zzimcarDirect')"
        :icon="false"
        @click="ClickBtn(ZZIMCAR_URL)"
        class="mt-8"
      >
      </CommonButton>
    </div>
    <MainServiceReviewCard />
    <!-- <MainCompanyReviewCard /> -->
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
