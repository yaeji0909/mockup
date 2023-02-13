<template>
  <div class="md:hidden flex-col mx-2" @click="clickHandler">
    <div id="line1" ref="line1" class="p-[0.1rem] w-5 rounded bg-white" :class="`bg-${color}`"></div>
    <div id="line2" ref="line2" class="mt-[0.1rem] p-[0.1rem] w-5 rounded bg-white" :class="`bg-${color}`"></div>
    <div id="line3" ref="line3" class="mt-[0.1rem] p-[0.1rem] w-5 rounded bg-white" :class="`bg-${color} `"></div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';

import { ref } from 'vue';
const line1 = ref(null);
const line2 = ref(null);
const line3 = ref(null);

const props = defineProps({
  color: String,
  showMenu: Boolean,
});

watch(
  () => props.showMenu,
  newShowMenu => {
    clickHandler(newShowMenu);
  },
);

const clickHandler = show => {
  if (!show) {
    gsap.to('#line1', { rotation: 0 });
    gsap.to('#line3', { rotation: 0 });
    gsap.to('#line2', { display: 'block', duration: 0.01 });
  } else {
    gsap.to('#line2', { display: 'none', duration: 0.01 });
    gsap.to('#line1', {
      rotation: 45,
      // transformOrigin: 'center center',
      stagger: 1,
      duration: 0.1,
    });
    gsap.to('#line3', {
      rotation: -45,
      transformOrigin: '20% 0%',
      duration: 0.1,
    });
  }
};
</script>
