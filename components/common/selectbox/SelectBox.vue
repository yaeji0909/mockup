<template>
  <div>
    <div class="relative">
      <!-- Dropdown toggle button -->
      <button
        @click="clickHandler"
        class="flex items-center p-2 text-base text-indigo-100 bg-gray-bg focus:bg-white focus:shadow-mint border-[1.5px] border-gray-border focus:border-primary-aqua rounded-[10px] w-80"
        :class="onError && 'focus:border-error focus:shadow-error'"
      >
        <span class="mr-4 text-gray-caption">{{ text }}</span>
      </button>

      <!-- Dropdown menu -->
      <div
        id="drop-box"
        v-show="show"
        class="absolute left-0 p-1 mt-2 bg-white border border-primary-aqua shadow-mint rounded-[10px] w-80"
      >
        <ul class="p-1" v-for="option in options" :key="option">
          <li
            @click="changeOption"
            class="block px-4 py-2 text-base text-gray-sub hover:bg-primary-aqua hover:bg-opacity-10 rounded-[10px] hover:text-gray-sub"
          >
            {{ option }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ref, onMounted } from "vue";
const options = ["Option1", "Option2", "Option3"];
const show = ref(false);
const text = ref("문의 유형을 선택해 주세요");
const props = defineProps({
  onError: Boolean,
});

const clickHandler = () => {
  show.value = !show.value;
  gsap.fromTo("#drop-box", { y: -3 }, { y: 0 });
};

const changeOption = (e) => {
  const value = e.target.innerHTML;
  text.value = value;
  show.value = false;
};

onMounted(() => {
  if (props.onError) {
    show = false;
  }
});
</script>
