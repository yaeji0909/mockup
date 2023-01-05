<template>
  <nav>
    <div
      class="nav-bar flex justify-around p-4 bg-black text-white flex items-center"
      ref="navigationBox"
    >
      <div class="logo-box flex">
        <NuxtLink to="/">
          <nuxt-img
            ref="logoImage"
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/logo-white.svg"
          />
        </NuxtLink>
      </div>
      <div class="menu-box">
        <ul class="flex">
          <li
            class="mx-3 hover:text-primary-aqua cursor-pointer font-semibold text-xs md:text-xl xl:tex-=2xl"
            v-for="value in menu"
            :key="value"
          >
            {{ value }}
          </li>
        </ul>
      </div>
      <div ref="buttonBox" class="flex justify-center items-center text-xs">
        <div class="hidden md:block">
          <button class="hover:text-primary-aqua">KOR&nbsp;&nbsp;|</button>
          <button class="hover:text-primary-aqua">&nbsp;&nbsp;ENG</button>
        </div>
        <div class="flex items-center">
          <button class="xs:hidden w-4 h-4">
            <img
              @click="clickHandler"
              class="relative"
              src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/lang.svg"
            />
          </button>
          <CommonNavigationBarHamburger />
        </div>
      </div>
      <div
        v-if="langBtnIsClicked"
        class="bg-white w-11 h-[52px] absolute top-11 right-10 z-10 rounded-sm flex flex-col justify-center text-black"
      >
        <button class="text-xs hover:text-primary-aqua p-1">KOR</button>
        <button class="text-xs hover:text-primary-aqua p-1">ENG</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, defineProps, ref } from "vue";
const menu = ["Service", "Company", "News", "Recruit", "Contact"];
const props = defineProps({
  color: String,
});
const langBtnIsClicked = ref(false);
const buttonBox = ref(null);
const navigationBox = ref(null);
const logoImage = ref(null);
const clickHandler = () => {
  langBtnIsClicked.value = !langBtnIsClicked.value;
};

onMounted(() => {
  if (props.color === "white") {
    navigationBox.value.classList.add("bg-white");
    navigationBox.value.classList.add("text-primary-aqua");
  }
  // console.log(langBox.value);
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
