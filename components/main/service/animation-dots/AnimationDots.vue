<template>
  <div>
    <!-- 1 -->
    <div
      class="flex flex-col-reverse xl:flex-row text-center xl:text-left justify-center items-center m-20 whitespace-pre-line"
    >
      <div class="mt-10 xl:mr-20">
        <h1 class="text-3xl md:text-4xl xl:text-7xl font-bold">
          {{ $t("service.1") }}
        </h1>
        <p class="text-xs md:text-sm xl:text-xl mt-[15px]">
          {{ $t("service.1-desc") }}
        </p>
      </div>
      <img :src="SERVICE_1" alt="SERVICE_1" class="w-[400px] md:w-[500px]" />
    </div>
    <!-- 2 -->
    <div
      class="flex flex-col xl:flex-row text-center xl:text-left justify-center items-center m-20 whitespace-pre-line"
    >
      <img :src="SERVICE_2" alt="SERVICE_2" class="w-[400px] md:w-[500px]" />
      <div class="mt-10 xl:mr-20">
        <h1 class="text-3xl md:text-4xl xl:text-7xl font-bold">
          {{ $t("service.2") }}
        </h1>
        <p class="text-xs md:text-sm xl:text-xl mt-[15px]">
          {{ $t("service.2-desc") }}
        </p>
      </div>
    </div>
    <!-- 3 -->
    <div
      class="flex flex-col-reverse xl:flex-row text-center xl:text-left justify-center items-center m-20 whitespace-pre-line"
    >
      <div class="mt-10 xl:mr-20">
        <h1 class="text-3xl md:text-4xl xl:text-7xl font-bold">
          {{ $t("service.3") }}
        </h1>
        <p class="text-xs md:text-sm xl:text-xl mt-[15px]">
          {{ $t("service.3-desc") }}
        </p>
      </div>
      <img :src="SERVICE_3" alt="SERVICE_3" class="w-[400px] md:w-[500px]" />
    </div>
    <!-- 4 -->
    <div
      class="flex flex-col xl:flex-row text-center xl:text-left justify-center items-center m-20 whitespace-pre-line"
    >
      <img :src="SERVICE_4" alt="SERVICE_4" class="w-[400px] md:w-[500px]" />
      <div class="mt-10 xl:mr-20">
        <h1 class="text-3xl md:text-4xl xl:text-7xl font-bold">
          {{ $t("service.4") }}
        </h1>
        <p class="text-xs md:text-sm xl:text-xl mt-[15px]">
          {{ $t("service.4-desc") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const SERVICE_1 =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-1.svg";
const SERVICE_2 =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-2.svg";
const SERVICE_3 =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-3.svg";
const SERVICE_4 =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-4.svg";
</script>
