<template>
  <div>
    <div class="relative">
      <img :src="EMOJI_BG" alt="EMOJI_BG" />
      <img
        class="absolute top-0 transform translate-x-[193%] translate-y-[21%]"
        :src="EMOJI_5"
        alt="EMOJI_5"
      />
    </div>
  </div>
</template>

<script setup>
const EMOJI_BG =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/emoji-bg.svg";
const EMOJI_5 =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/emoji5.svg";
</script>
