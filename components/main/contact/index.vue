<template>
  <div class="h-screen bg-white">
    <section
      class="h-1/3 relative flex flex-col justify-center items-center bg-contact-header bg-cover bg-right bg-no-repeat text-center"
    >
      <h1 class="text-3xl md:text-4xl xl:text-7xl font-bold text-white whitespace-pre-line">
        <span class="text-primary-aqua">{{ $t('contact.natureMobility') }}</span
        >{{ $t('contact.title') }}
      </h1>
      <CommonButton bgColor="none" :text="$t('contact.contact')" :icon="false" @click="open = !open" class="mt-8" />
    </section>
    <section class="py-[30px] md:py-[50px] xl:py-[85px]">
      <MainContactMapCard />
    </section>
    <section class="fixed bottom-0 w-screen">
      <CommonFooter />
    </section>
    <section v-if="open" class="absolute z-30 top-1/2">
      <!-- <CommonDialogAlert /> -->
      <!-- <CommonDialogSuccess /> -->
      <CommonDialogContact />
    </section>
  </div>
</template>

<script setup>
let open = ref(false);
</script>
