<template>
  <div
    class="bg-black text-white w-screen fixed z-10"
    :class="showMenu && 'bg-white h-screen text-black'"
    ref="navigationBox"
  >
    <nav class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <NuxtLink to="/">
          <nuxt-img :src="`https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/logo-${logoColor.main}.svg`" />
        </NuxtLink>

        <!-- Mobile menu button -->
        <div class="hidden xs:block sm:pl-40 md:hidden text-white text-xs">
          <button class="hover:text-primary-aqua">KOR&nbsp;&nbsp;</button>
          <span>|</span>
          <button class="hover:text-primary-aqua">&nbsp;&nbsp;ENG</button>
        </div>
        <div class="flex justify-center items-center">
          <button class="xs:hidden w-4 h-4 relative">
            <img
              @click="langBtnClickHandler"
              :src="`https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/lang${logoColor.lang}.svg`"
            />
          </button>
          <div @click="showMenuHandler" class="flex md:hidden">
            <CommonNavigationBarHamburger
              :color="props.color ? 'black' : 'white'"
              :changedColor="showMenu ? 'black' : ''"
              :showMenu="showMenu"
            />
          </div>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex text-black' : 'hidden'"
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
        <button class="hover:text-primary-aqua">KOR&nbsp;&nbsp;</button>
        <span>|</span>
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
import { onMounted, ref, reactive } from 'vue';

const menu = ['Service', 'Company', 'News', 'Recruit', 'Contact'];

const showMenu = ref(false);
const langBtnIsClicked = ref(false);
const navigationBox = ref(null);

const props = defineProps({
  color: String,
});

// const checkEmit = (value) => {
//   console.log(value);
//   return value;
// };

const showMenuHandler = () => {
  showMenu.value = !showMenu.value;
};

const langBtnClickHandler = () => {
  langBtnIsClicked.value = !langBtnIsClicked.value;
};

const logoColor = reactive({
  main: 'white',
  lang: '',
});

const changeColor = prevValue => {
  console.log('parents', showMenu.value);
  if (prevValue === true) {
    logoColor.main = 'mint';
    logoColor.lang = '-black';
  }
  if (prevValue === false) {
    logoColor.main = 'white';
    logoColor.lang = '';
  }
};

watch(showMenu, newValue => {
  changeColor(newValue);
});

onMounted(() => {
  if (props.color === 'white') {
    logoColor.main = 'mint';
    logoColor.lang = '-black';
    navigationBox.value.classList.add('bg-white');
    navigationBox.value.classList.add('text-black');
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
