<template>
  <div>
    <div class="relative">
      <!-- Dropdown toggle button -->
      <button
        @click="clickHandler"
        class="flex items-center pt-2 pb-1 bg-transparent text-xs text-black flex justify-between items-center min-w-24"
        :class="[
          border ? 'border-b border-black p-2' : 'border:none',
          props.title === 'FAMILY SITE' && 'w-full  text-gray-sub',
        ]"
      >
        <span class="mr-1" :class="props.title === 'FAMILY SITE'">{{
          text
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
        class="absolute p-1 bg-white rounded-[10px] min-w-max"
        :class="[
          props.title === 'FAMILY SITE' && 'w-full text-gray-sub',
          props.title === 'FAMILY SITE' || props.title === $t('footer.company')
            ? '-top-20'
            : 'top-10',
        ]"
      >
        <ul class="p-1" v-for="option in options" :key="option">
          <li
            @click="(e) => optionClickHandler(e, option)"
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
import { gsap } from 'gsap';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  title: String,
  border: Boolean,
  fontColor: String,
  options: Array,
});

const options = ref(['Option1', 'Option2']);
options.value = props.options;

const ZZIMCAR_URL = 'https://zzimcar.com/';
const SEIRA_URL = 'https://zzimcar.com/';

const moveToNewsPage = () => {
  navigateTo('/news');
};

const show = ref(false);
const text = ref(props.title);
const router = useRouter();

const clickHandler = () => {
  show.value = !show.value;
  if (show.value === true) {
    if (props.title === t('recruit.filterSort.newest')) {
      gsap.fromTo('#drop-box', { y: 0 }, { y: 3 });
    } else {
      gsap.fromTo('#drop-box', { y: 3 }, { y: 0 });
    }
  }
};

const emit = defineEmits(['changeFilter']);
const optionClickHandler = (e, option) => {
  const value = e.target.innerText;
  if (value === t('footer.company')) {
    router.push('/');
  }
  if (value === t('footer.news')) {
    router.push('/news');
  }
  if (value === 'ZZIMCAR') {
    window.open(ZZIMCAR_URL);
  }
  if (value === 'SEIRA') {
    window.open(SEIRA_URL);
  }
  if (value === t('recruit.filterSort.newest')) {
    emit('changeFilter', 'registerAt');
    text.value = value;
  }
  if (value === t('recruit.filterSort.byDeadline')) {
    emit('changeFilter', 'endAt');
    text.value = value;
  }
  show.value = false;
};

onMounted(() => {
  if (props.onError) {
    show = false;
  }
});
</script>
