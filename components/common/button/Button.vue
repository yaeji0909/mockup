<template>
  <button
    class="text-xs md:text-base font-bold rounded-full"
    :class="[
      props.icon
        ? 'flex justify-center items-center gap-2.5 w-[180px] h-[45px] md:h-[50px] hover:bg-white hover:text-black'
        : 'w-[190px] h-[45px] md:h-[58px] hover:bg-gradient-to-r from-primary-aqua to-primary-mint hover:border-none hover:shadow-[0px 8px 20px rgba(14, 31, 53, 0.12)]',
      ,
      props.bgColor ? `bg-${props.bgColor}` : 'bg-white/30',
      props.bdColor ? `bg-${props.bdColor}` : 'border',
    ]"
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
  bgColor: String,
  bdColor: String,
});
console.log('bgColor', props.bgColor, 'bdColor', props.bdColor);
</script>
