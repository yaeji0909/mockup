<template>
  <button
    :class="[
      'text-xs md:text-base font-bold rounded-full',
      icon
        ? 'flex justify-center items-center gap-2.5 w-[180px] h-[45px] md:h-[50px] bg-white/30 hover:bg-white hover:text-black '
        : 'w-[190px] h-[45px] md:h-[58px] hover:bg-gradient-to-r from-primary-aqua to-primary-mint hover:border-none hover:text-white ',
      ,
      `bg-${bgColor}` || 'bg-white/30',
      `border border-${bdColor}` || 'border',
      `text-${textColor}` || 'text-white',
      'transition-[1s] ease-linear',
    ]"
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
