<template>
  <div class="h-screen bg-white">
    <section
      class="flex-col justify-center items-center bg-contact-header bg-cover bg-right bg-no-repeat text-center py-40 xl:py-32"
    >
      <h1
        class="text-3xl md:text-4xl xl:text-7xl font-bold text-white whitespace-pre-line"
      >
        <span class="text-primary-aqua">{{ $t('contact.natureMobility') }}</span
        >{{ $t('contact.title') }}
      </h1>
      <CommonButton
        bgColor="none"
        :text="$t('contact.contact')"
        :icon="false"
        @click="openContactDialog"
        class="mt-8"
      />
    </section>
    <section class="mt-[30px] md:mt-[50px] xl:mt-[85px]">
      <MainContactMapCard />
    </section>
  </div>
</template>

<script setup>
const openContactDialog = () => {
  console.log('문의하기 다이얼로그 열기');
};
</script>
