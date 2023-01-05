<template>
  <button
    class="w-[137px] h-[52px] text-base md:text-base font-bold rounded-[15px]"
    :class="[
      isCancel
        ? 'bg-gray-bg text-gray-caption hover:bg-gray-border '
        : 'bg-primary-aqua text-white hover:bg-primary-mint',
    ]"
    @click="$emit('click', $event)"
  >
    <p>{{ text }}</p>
  </button>
</template>

<script setup>
const props = defineProps({
  text: String,
  isCancel: Boolean,
});
</script>
