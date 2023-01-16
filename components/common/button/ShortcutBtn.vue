<template>
  <button
    class="shortcut-btn flex justify-center items-center gap-2 text-xs lg:text-base font-bold"
    :class="[`text-${color}`, `hover:text-${hoverColor}`]"
    @click="$emit('click', $event)"
  >
    <p>{{ text }}</p>
    <!-- <slot name="icon" /> -->
    <img class="shortcut-btn-icon" :src="ARROW_GRAY" />
    <!-- <object type="image/svg+xml" :data="ARROW_GRAY" class="hover:filter-mint" /> -->
  </button>
</template>

<script setup>
const ARROW_GRAY = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/shortcut_arrow_gray.svg';
const ARROW_WHITE = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/shortcut_arrow_white.svg';
const ARROW_BLACK = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/shortcut_arrow_black.svg';
const ARROW_MINT = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/shortcut_arrow_mint.svg';

const props = defineProps({
  text: String,
  color: String,
  hoverColor: String,
});

/**
 * hover 시 ARROW_BLACK or ARROW_MINT 적용
 */
onMounted(() => {
  const el = document.querySelector('.shortcut-btn');
  el.addEventListener('mouseover', e => {
    document.querySelector('.shortcut-btn-icon').src = ARROW_BLACK;
  });
  el.addEventListener('mouseout', e => {
    document.querySelector('.shortcut-btn-icon').src = ARROW_GRAY;
  });
});
</script>
