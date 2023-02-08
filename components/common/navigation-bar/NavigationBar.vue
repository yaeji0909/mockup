<template>
  <div :class="[props.color === 'white' ? 'bg-transparent text-black' : 'bg-transparent text-white']">
    <nav
      class="px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
      :class="showMenu ? 'h-screen bg-white' : 'bg-transparent'"
    >
      <div class="flex items-center justify-between">
        <NuxtLink to="/" @click="moveToSlideOne">
          <nuxt-img
            :src="`https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/logo-${navColor.main}.svg`"
            class="w-[140px] md:w-[180px] lg:w-[160px] xl:w-[180px]"
          />
        </NuxtLink>

        <!-- Mobile menu button -->
        <div class="flex justify-center items-center">
          <div
            class="hidden xs:block sm:pl-40 md:hidden text-xs mr-[37px]"
            :class="props.color === 'white' ? 'bg-transparent text-black' : 'bg-transparent text-white'"
          >
            <button class="hover:text-primary-aqua">KOR&nbsp;&nbsp;</button>
            <span>|</span>
            <button class="hover:text-primary-aqua">&nbsp;&nbsp;ENG</button>
          </div>
          <button class="xs:hidden w-4 h-4 relative mr-[19px]">
            <img
              @click="langBtnClickHandler"
              :src="`https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/lang-${navColor.lang}.svg`"
            />
          </button>
          <div @click="showMenuHandler" class="flex md:hidden">
            <CommonNavigationBarHamburger :color="navColor.hamburger" :showMenu="showMenu" />
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
          :key="value.slide"
          @click="e => clickNav(value.slide)"
        >
          {{ value.nav }}
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

const menu = [
  { slide: 1, nav: 'Service' },
  { slide: 4, nav: 'Company' },
  { slide: 5, nav: 'News' },
  { slide: 6, nav: 'Recruit' },
  { slide: 7, nav: 'Contact' },
];

const props = defineProps({
  color: String,
});

/**
 * show menu (only mobile)
 */
const showMenu = ref(false);
const showMenuHandler = () => {
  showMenu.value = !showMenu.value;
};

/**
 * click language
 */
const langBtnIsClicked = ref(false);
const langBtnClickHandler = () => {
  langBtnIsClicked.value = !langBtnIsClicked.value;
};

/**
 * change navigation color according to showMenu && props.color
 */
const navColor = reactive({
  main: 'white',
  lang: 'white',
  hamburger: 'white',
});

watch([() => showMenu.value, () => props.color], ([newShowMenu, newColor], [preShowMenu, preColor]) => {
  if (!newShowMenu && newColor === 'black') {
    changeNavColor('white', 'white', 'white');
  } else {
    changeNavColor('mint', 'black', 'black');
  }
});

const changeNavColor = (logo, lang, ham) => {
  navColor.main = logo;
  navColor.lang = lang;
  navColor.hamburger = ham;
};

/**
 * nav bar scroll move emit
 */
const emit = defineEmits(['scrollTo']);
const route = useRoute();
const router = useRouter();

const clickNav = slide => {
  if (route.path === '/') {
    emit('scrollTo', slide);
  } else {
    router.push({ path: '/', query: { slide, isMain: false } });
  }
};

const moveToSlideOne = () => {
  emit('scrollTo', 0);
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
