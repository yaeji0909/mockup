<template>
  <button
    class="text-xs md:text-base font-bold rounded-full"
    :class="[
      icon
        ? 'flex justify-center items-center gap-2.5 w-[180px] h-[45px] md:h-[50px] hover:bg-white hover:text-black'
        : 'w-[190px] h-[45px] md:h-[58px] hover:bg-gradient-to-r from-primary-aqua to-primary-mint',
      ,
      optionObj.bgColor,
      optionObj.bdColor,
      optionObj.textColor,
    ]"
    @click="$emit('click', $event)"
  >
    <slot name="icon" />
    <p>{{ text }}</p>
  </button>
</template>

<script setup>
import { onMounted, reactive } from 'vue';

const props = defineProps({
  text: String,
  icon: Boolean,
  bgColor: String,
  bdColor: String,
  textColor: String,
});

const optionObj = reactive({
  bgColor: 'bg-white/30',
  bdColor: 'border',
  textColor: 'text-white',
});

const changeBgColor = color => {
  optionObj.bgColor = color ? 'bg-' + color : 'bg-white/30';
};
const changeBdColor = color => {
  optionObj.bdColor = color ? 'bd-' + color : 'border';
};
const changeTextColor = color => {
  optionObj.textColor = color ? 'text-' + color : 'text-white';
};

onMounted(() => {
  changeBgColor(props.bgColor);
  changeBdColor(props.bdColor);
  changeTextColor(props.textColor);
});
</script>
