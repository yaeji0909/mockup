<template>
  <div class="bg-black text-white" ref="navigationBox">
    <nav
      class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <NuxtLink to="/">
          <nuxt-img
            :src="`https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/logo-${imageColor}.svg`"
          />
        </NuxtLink>

        <!-- Mobile menu button -->
        <div class="hidden xs:block sm:pl-40 md:hidden text-white text-xs">
          <button class="hover:text-primary-aqua">KOR&nbsp;&nbsp;|</button>
          <button class="hover:text-primary-aqua">&nbsp;&nbsp;ENG</button>
        </div>
        <div class="flex justify-center items-center">
          <button class="xs:hidden w-4 h-4 relative">
            <img
              @click="clickHandler"
              :src="`https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/lang${langIcon}.svg`"
            />
          </button>
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <CommonNavigationBarHamburger
              :color="props.color ? 'black' : 'white'"
              :showMenu="showMenu"
            />
          </div>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li
          class="mx-3 hover:text-primary-aqua cursor-pointer font-semibold text-xs md:text-xl xl:tex-=2xl"
          v-for="value in menu"
          :key="value"
        >
          {{ value }}
        </li>
      </ul>
      <div class="hidden md:block text-xs">
        <button class="hover:text-primary-aqua">KOR&nbsp;&nbsp;|</button>
        <button class="hover:text-primary-aqua">&nbsp;&nbsp;ENG</button>
      </div>
      <div
        v-if="langBtnIsClicked"
        class="bg-white w-11 h-[52px] absolute top-11 right-10 z-10 rounded-sm flex flex-col justify-center text-black"
      >
        <button class="text-xs hover:text-primary-aqua p-1">KOR</button>
        <button class="text-xs hover:text-primary-aqua p-1">ENG</button>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { onMounted, defineProps, ref } from "vue";
const langIcon = ref("");
const showMenu = ref(false);
const imageColor = ref("white");
const langBtnIsClicked = ref(false);
const navigationBox = ref(null);
const menu = ["Service", "Company", "News", "Recruit", "Contact"];

const props = defineProps({
  color: String,
});

const clickHandler = () => {
  langBtnIsClicked.value = !langBtnIsClicked.value;
};

onMounted(() => {
  if (props.color === "white") {
    imageColor.value = "mint";
    langIcon.value = "-black";
    navigationBox.value.classList.add("bg-white");
    navigationBox.value.classList.add("text-black");
  }
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
