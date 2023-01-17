<template>
  <div>
    <div class="relative">
      <!-- Dropdown toggle button -->
      <button
        @click="clickHandler"
        class="flex items-center p-2 bg-transparent text-xs text-black flex justify-center items-center w-24"
        :class="[
          border ? 'border-b border-gray' : 'border:none',
          props.title === 'FAMILY SITE' && 'w-36  text-gray-sub',
        ]"
      >
        <span class="mr-1" :class="props.title === 'FAMILY SITE' && 'mr-8'">{{
          title
        }}</span>
        <nuxt-img
          class="w-4 h-4"
          :src="
            show ? 'images/common/arrow-up.svg' : 'images/common/arrow-down.svg'
          "
        />
      </button>

      <!-- Dropdown menu -->
      <div
        id="drop-box"
        v-show="show"
        class="absolute p-1 -top-20 bg-white rounded-[10px] w-24"
        :class="props.title === 'FAMILY SITE' && 'w-36 text-gray-sub'"
      >
        <ul class="p-1" v-for="option in options" :key="option">
          <li
            @click="optionClickHandler"
            class="block py-1 text-gray-sub hover:bg-gray rounded-[5px] text-xs text-black flex justify-center font-normal cursor-pointer"
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

const options = ref(["Option1", "Option2"]);

const ZZIMCAR_URL = "https://zzimcar.com/";
const SEIRA_URL = "https://zzimcar.com/";

const moveToNewsPage = () => {
  navigateTo("/news");
};

if (props.title === "회사소개") {
  options.value = ["회사소개", "보도자료"];
}

if (props.title === "FAMILY SITE") {
  options.value = ["ZZIMCAR", "SEIRA"];
}

const show = ref(false);

const props = defineProps({
  title: String,
  border: Boolean,
  fontColor: String,
});

const clickHandler = () => {
  show.value = !show.value;
  if (show.value === true) {
    gsap.fromTo("#drop-box", { y: 3 }, { y: 0 });
  }
};

const optionClickHandler = (e) => {
  const value = e.target.innerHTML;
  if (value === "ZZIMCAR") {
    window.open(ZZIMCAR_URL);
  }
  if (value === "SEIRA") {
    window.open(SEIRA_URL);
  }
  show.value = false;
};

onMounted(() => {
  if (props.onError) {
    show = false;
  }
});
</script>
