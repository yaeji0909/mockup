<template>
  <nav>
    <div
      class="nav-bar flex justify-around p-4 bg-black text-white"
      ref="navigationBox"
    >
      <div class="logo-box flex items-center">
        <NuxtLink to="/">
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/logo-white.svg"
          />
        </NuxtLink>
      </div>
      <div class="menu-box">
        <ul class="flex">
          <li
            class="mx-3 hover:text-primary-aqua cursor-pointer font-semibold"
            v-for="value in menu"
            :key="value"
          >
            {{ value }}
          </li>
        </ul>
      </div>
      <div ref="langBox" class="flex justify-center items-center">
        <div class="hidden md:block">
          <button class="hover:text-primary-aqua">KOR&nbsp;&nbsp;|</button>
          <button class="hover:text-primary-aqua">&nbsp;&nbsp;ENG</button>
        </div>
        <div class="md:hidden">
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/lang.svg"
          />
        </div>
        <div class="lg:hidden mx-3">
          <nuxt-img
            src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/menu.svg"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, defineProps } from "vue";
const menu = ["Service", "Company", "News", "Recruit", "Contact"];
const props = defineProps({
  color: String,
});

const langBox = ref(null);
const navigationBox = ref(null);

onMounted(() => {
  console.log(navigationBox.value);
  if (props.color === "white") {
    navigationBox.value.classList.add("bg-white");
    navigationBox.value.classList.add("text-primary-aqua");
  }
  console.log(langBox.value);
});
</script>
