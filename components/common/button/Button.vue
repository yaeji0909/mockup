<template>
  <button
    class="text-xs md:text-base font-bold rounded-full"
    :class="[
      props.icon
        ? 'flex justify-center items-center gap-2.5 w-[180px] h-[45px] md:h-[50px] hover:bg-white hover:text-black'
        : 'w-[190px] h-[45px] md:h-[58px] hover:bg-gradient-to-r from-primary-aqua to-primary-mint hover:border-none hover:shadow-[0px 8px 20px rgba(14, 31, 53, 0.12)] hover:text-white',
      ,
      props.bgColor ? `bg-${bgColor}` : 'bg-white/30',
      props.bdColor ? `border-${bdColor}` : 'border',
      props.textColor ? `text-${textColor}` : 'text-white',
    ]"
    @click="$emit('click', $event)"
  >
    <slot name="icon" />
    <p>{{ text }}</p>
  </button>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  text: String,
  icon: Boolean,
  bgColor: String,
  bdColor: String,
  textColor: String,
});

const bgColor = ref("bg-white/30");
function changeBgColor(props) {
  bgColor.value = props;
}

const bdColor = ref("bg-white");
function changeBdColor(props) {
  bdColor.value = props;
}

const textColor = ref("bg-white");
function changeTextColor(props) {
  textColor.value = props;
}

onMounted(() => {
  changeBgColor(props.bgColor);
  changeBdColor(props.bdColor);
  changeTextColor(props.textColor);
});
</script>
