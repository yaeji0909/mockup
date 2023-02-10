<template>
  <div class="bg-white wrapper">
    <section
      class="relative flex flex-col justify-center items-center bg-contact-header bg-cover bg-right bg-no-repeat text-center pt-32 pb-20"
    >
      <img
        id="ICON_1"
        :src="ICON_1"
        alt="ICON_1"
        class="absolute test left-[7.76%] right-[88.86%] top-[14.71%] bottom-[79.29%]"
      />
      <img
        id="ICON_2"
        :src="ICON_2"
        alt="ICON_2"
        class="absolute test left-[13.7%] right-[81.1%] top-[24.98%] bottom-[65.77%]"
      />
      <img
        id="ICON_3"
        :src="ICON_3"
        alt="ICON_3"
        class="absolute test left-[29.95%] right-[67.82%] top-[25.12%] bottom-[69.49%]"
      />
      <img
        id="ICON_4"
        :src="ICON_4"
        alt="ICON_4"
        class="absolute test left-[78.47%] right-[26.5%] top-[18.21%] bottom-[84.39%]"
      />
      <img
        id="ICON_5"
        :src="ICON_5"
        alt="ICON_5"
        class="absolute test left-[69.06%] right-[27.6%] top-[31.63%] bottom-[62.44%]"
      />
      <img
        id="ICON_6"
        :src="ICON_6"
        alt="ICON_6"
        class="absolute test left-[82.5%] right-[13.04%] top-[22.55%] bottom-[69.51%]"
      />
      <img
        id="ICON_7"
        :src="ICON_7"
        alt="ICON_6"
        class="absolute test left-[23.25%] right-[76.82%] top-[12.23%] bottom-[86.47%]"
      />
      <img
        id="ICON_8"
        :src="ICON_8"
        alt="ICON_6"
        class="absolute test left-[65.47%] right-[33.7%] top-[22.31%] bottom-[76.2%]"
      />
      <h1
        class="z-10 text-3xl md:text-4xl xl:text-7xl font-bold text-white whitespace-pre-line"
      >
        <span class="text-primary-aqua">{{ $t("contact.natureMobility") }}</span
        >{{ $t("contact.title") }}
      </h1>
      <CommonButton
        textColor="white"
        :text="$t('contact.contact')"
        :icon="false"
        @click="open = true"
        class="mt-8"
      />
    </section>
    <section class="py-[30px] md:py-[50px] xl:py-[85px]">
      <MainContactMapCard />
    </section>
    <section class="w-screen">
      <CommonFooter />
    </section>
    <div
      v-if="open"
      class="w-full h-[163vh] bg-black absolute top-0 bg-opacity-50 fixed overflow-hidden z-20"
    ></div>
    <section
      v-if="open"
      class="absolute z-30 top-[43%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <CommonDialogContact @close="open = false" />
    </section>
  </div>
</template>

<script setup>
const ICON_1 =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/contact_icon_01.svg";
const ICON_2 =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/contact_icon_02.svg";
const ICON_3 =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/contact_icon_03.svg";
const ICON_4 =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/contact_icon_04.svg";
const ICON_5 =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/contact_icon_05.svg";
const ICON_6 =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/contact_icon_06.svg";
const ICON_7 =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/contact_dot1.svg";
const ICON_8 =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/contact_dot2.svg";

let open = ref(false);
</script>

<style scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  perspective: 1px;
  perspective-origin: center center;
  overflow-x: hidden;
}
section {
  transform-style: preserve-3d;
  height: 120vh;
}
.test {
  background-position: bottom center;
  background-size: cover;
  background-repeat: repeat-x;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
