<template>
  <div
    class="flex-col justify-center items-center bg-service-header h-screen bg-contain bg-no-repeat"
  >
    <h1 class="text-7xl font-bold text-white">
      <span class="text-primary-aqua">{{ $t("service.zzimcar") }}</span>
      {{ $t("service.zzimcarAbout") }}
    </h1>
    <CommonButton
      bgColor="none"
      :text="t('service.zzimcarDirect')"
      :icon="false"
      @click="ClickBtn(ZZIMCAR_URL)"
    >
    </CommonButton>
  </div>
</template>

<script setup>
const ZZIMCAR_URL = "https://zzimcar.com/";
</script>
