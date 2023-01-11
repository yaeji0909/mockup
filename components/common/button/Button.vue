<template>
  <button
    :class="[
      'text-xs md:text-base font-bold rounded-full',
      icon
        ? 'flex justify-center items-center gap-2.5 w-[180px] h-[45px] md:h-[50px] hover:bg-white hover:text-black'
        : 'w-[190px] h-[45px] md:h-[58px] hover:bg-gradient-to-r from-primary-aqua to-primary-mint hover:border-none',
      ,
      bgColor ? `bg-${bgColor}` : 'bg-white/30',
      bdColor ? `border-${bdColor}` : 'border',
      textColor ? `text-${textColor}` : 'text-white',
    ]"
    @click="$emit('click', $event)"
  >
    <slot name="icon" />
    <p>{{ text }}</p>
  </button>
</template>

<script setup>
const props = defineProps({
  text: String,
  icon: Boolean,
  bgColor: String,
  bdColor: String,
  textColor: String,
});
</script>
