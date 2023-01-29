<template>
  <div
    :class="[
      showMenu || color === 'white'
        ? 'text-black bg-white opacity-0'
        : 'bg-black text-white',
      largerThanSm ? 'h-screen' : 'h-auto',
    ]"
    ref="navigationBox"
  >
    <nav
      class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <NuxtLink to="/">
          <nuxt-img
            :src="`https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/logo-${logoColor.main}.svg`"
          />
        </NuxtLink>

        <div
          class="hidden xs:block sm:pl-40 md:hidden text-xs"
          :class="showMenu || color === 'white' ? ' text-black' : 'text-white'"
        >
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
              :color="showMenu || color === 'white' ? 'black' : 'white'"
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
          :class="color === 'white' && 'text-black'"
          @click="(e) => moveTo(e, value)"
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
        class="bg-white w-11 h-[52px] absolute top-14 right-11 z-10 rounded-sm flex flex-col justify-center text-black sm:hidden"
      >
        <button class="text-xs hover:text-primary-aqua p-1">KOR</button>
        <button class="text-xs hover:text-primary-aqua p-1">ENG</button>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const menu = ['Service', 'Company', 'News', 'Recruit', 'Contact'];

const breakpoints = useBreakpoints(breakpointsTailwind);
const largerThanSm = breakpoints.greater('sm'); // only larger than sm

const showMenu = ref(false);
const langBtnIsClicked = ref(false);
const navigationBox = ref(null);

const props = defineProps({
  color: String,
  elementTop: Array,
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

const changeColor = (prevValue) => {
  if (prevValue === true) {
    logoColor.main = 'mint';
    logoColor.lang = '-black';
  }
  if (prevValue === false) {
    logoColor.main = 'white';
    logoColor.lang = '';
  }
};

watch(showMenu, (newValue) => {
  changeColor(newValue);
});

const logoColor = reactive({
  main: 'white',
  lang: '',
});

onMounted(() => {
  if (props.color === 'white') {
    logoColor.main = 'mint';
    logoColor.lang = '-black';
    console.log(navigationBox.value.classList);
    navigationBox.value.classList.add('bg-white');
    navigationBox.value.classList.add('text-black');
  }
});
/**
 * navigation scroll
 */
const moveTo = (e, value) => {
  console.log('props.elementTop', props.elementTop);
  console.log('e', e, 'value', value);

  if (e.target.innerText === 'Service') {
    window.scrollTo({ top: props.elementTop[0], behavior: 'smooth' });
  } else if (e.target.innerText === 'Company') {
    window.scrollTo({ top: props.elementTop[1], behavior: 'smooth' });
  } else if (e.target.innerText === 'News') {
    window.scrollTo({ top: props.elementTop[2], behavior: 'smooth' });
  } else if (e.target.innerText === 'Recruit') {
    window.scrollTo({ top: props.elementTop[3], behavior: 'smooth' });
  } else if (e.target.innerText === 'Contact') {
    window.scrollTo({ top: props.elementTop[4], behavior: 'smooth' });
  }
};
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
