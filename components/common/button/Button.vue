<template>
  <button
    class="w-[180px] h-[45px] md:h-[50px] text-xs md:text-base font-bold border rounded-full bg-white/30 hover:bg-white hover:text-black"
    :class="props.icon ? 'flex justify-center items-center gap-2.5' : ''"
    @click="$emit('click', $event)"
  >
    <slot />
    <p>{{ props.text }}</p>
  </button>
</template>

<script setup>
const props = defineProps({
  text: String,
  icon: Boolean,
});
</script>
