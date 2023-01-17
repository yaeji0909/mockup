<template>
  <div class="md:hidden flex-col mx-2" @click="clickHandler">
    <div
      id="line1"
      ref="line1"
      class="p-[0.1rem] w-5 rounded bg-white"
      :class="`bg-${color}`"
    ></div>
    <div
      id="line2"
      ref="line2"
      class="mt-[0.1rem] p-[0.1rem] w-5 rounded bg-white"
      :class="`bg-${color}`"
    ></div>
    <div
      id="line3"
      ref="line3"
      class="mt-[0.1rem] p-[0.1rem] w-5 rounded bg-white"
      :class="`bg-${color} `"
    ></div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";

import { ref } from "vue";
const line1 = ref(null);
const line2 = ref(null);
const line3 = ref(null);

const props = defineProps({
  color: String,
  showMenu: Boolean,
});

// const emits = defineEmits(["test-emit"]);

const clickHandler = () => {
  if (props.showMenu) {
    gsap.to("#line1", { rotation: 0 });
    gsap.to("#line3", { rotation: 0 });
    gsap.to("#line2", { display: "block" });
  }
  if (!props.showMenu) {
    gsap.to("#line2", { display: "none" });
    gsap.to("#line1", {
      rotation: 45,
      transformOrigin: "center center",
      stagger: 1,
    });
    gsap.to("#line3", { rotation: -45, transformOrigin: "20% 0%" });
  }
};
</script>
