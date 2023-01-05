<template>
  <div>
    <button
      class="flex justify-center items-center w-[372px] h-[52px] text-base font-bold rounded-[15px] border border-gray-caption hover:border-black"
      @click="$emit('click', $event)"
    >
      <img :src="JOBKOREA" alt="JOBKOREA" />
      <p class="font-base font-bold">지원하기</p>
    </button>
    <button
      class="flex justify-center items-center w-[372px] h-[52px] text-base font-bold rounded-[15px] border border-gray-caption hover:border-black mt-2 md:mt-4"
      @click="$emit('click', $event)"
    >
      <img :src="SARAMIN" alt="SARAMIN" />
      <p class="font-base font-bold">지원하기</p>
    </button>
    <button
      class="flex justify-center items-center w-[372px] h-[52px] text-base font-bold rounded-[15px] border border-gray-caption hover:border-black mt-2 md:mt-4"
      @click="$emit('click', $event)"
    >
      <img :src="INCRUIT" alt="INCRUIT" />
      <p class="font-base font-bold">지원하기</p>
    </button>
  </div>
</template>

<script setup>
const JOBKOREA = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/site%3Djobkorea.svg';
const SARAMIN = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/site%3Dsaramin.svg';
const INCRUIT = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/site%3Dincruit.svg';
</script>
