<template>
  <div class="h-screen">
    <div
      class="flex-col justify-center items-center bg-service-header md:bg-cover bg-right bg-no-repeat py-72 md:py-60"
    >
      <h1 class="text-3xl xl:text-7xl font-bold text-white">
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
  </div>
</template>

<script setup>
const ZZIMCAR_URL = 'https://zzimcar.com/';
</script>
