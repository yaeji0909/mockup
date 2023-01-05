<template>
  <div class="md:hidden flex-col mx-2" @click="clickHandler">
    <div ref="line1" class="p-[0.1rem] w-5 bg-white rounded"></div>
    <div ref="line2" class="mt-[0.1rem] p-[0.1rem] w-5 bg-white rounded"></div>
    <div ref="line3" class="mt-[0.1rem] p-[0.1rem] w-5 bg-white rounded"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isClicked = ref(false);
const line1 = ref(null);
const line2 = ref(null);
const line3 = ref(null);

const clickHandler = (e) => {
  isClicked.value = !isClicked.value;
  console.log(isClicked.value);

  if (isClicked.value) {
    line1.value.classList.remove("rotate-end");
    line3.value.classList.remove("rotate-end");
    line2.value.classList.add("hidden");
    line1.value.classList.add("rotate");
    line3.value.classList.add("rotate-reverse");
  }
  if (!isClicked.value) {
    line2.value.classList.remove("hidden");
    line1.value.classList.remove("rotate");
    line3.value.classList.add("rotate-end");
    line3.value.classList.remove("rotate-reverse");
    line1.value.classList.add("rotate-end");
  }
};
</script>

<style scoped>
.rotate {
  transform: rotate(45deg);
  transition: all 400ms cubic-bezier(0.47, 1.64, 0.41, 0.8);
}
.rotate-reverse {
  transition: all 400ms cubic-bezier(0.47, 1.64, 0.41, 0.8);
  transform: rotate(-45deg);
  transform-origin: 20% -20%;
}
.rotate-end {
  transition: all 400ms cubic-bezier(0.47, 1.64, 0.41, 0.8);
  transform: rotate(0deg);
  transform-origin: 20% 0%;
}
</style>
