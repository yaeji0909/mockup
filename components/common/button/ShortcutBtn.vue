<template>
  <button
    class="shortcut-btn flex justify-center items-center gap-2 text-xs lg:text-base font-bold"
    :class="[`text-${color}`, `hover:text-${hoverColor}`]"
    @click="$emit('click', $event)"
  >
    <p>{{ text }}</p>
    <!-- <slot name="icon" /> -->
    <button :class="hoverColor === 'black' ? 'shortcut-btn-icon' : 'shortcut-btn-icon-color'" />
  </button>
</template>

<script setup>
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

<style scoped>
/* hoverColor black */
.shortcut-btn-icon {
  width: 20px;
  height: 20px;
  background: url('https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/shortcut_arrow_gray.svg') no-repeat
    center;
}
.shortcut-btn:hover .shortcut-btn-icon {
  width: 20px;
  height: 20px;
  background: url('https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/shortcut_arrow_black.svg') no-repeat
    center;
}
/* hoverColor aqua-mint */
.shortcut-btn-icon-color {
  width: 20px;
  height: 20px;
  background: url('https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/shortcut_arrow_white.svg') no-repeat
    center;
}
.shortcut-btn:hover .shortcut-btn-icon-color {
  width: 20px;
  height: 20px;
  background: url('https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/shortcut_arrow_mint.svg') no-repeat
    center;
}
</style>
