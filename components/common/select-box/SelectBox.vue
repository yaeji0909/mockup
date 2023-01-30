<template>
  <div>
    <div class="relative">
      <!-- Dropdown toggle button -->
      <button
        @click="clickHandler"
        class="flex items-center p-2 text-base text-indigo-100 bg-gray-bg focus:bg-white focus:shadow-mint border-[1.5px] border-gray-border focus:border-primary-aqua rounded-[10px] w-full"
        :class="onError && 'focus:border-error focus:shadow-error'"
      >
        <span class="mr-4 text-gray-caption">{{ text }}</span>
      </button>

      <!-- Dropdown menu -->
      <div
        id="drop-box"
        v-show="show"
        class="absolute left-0 p-1 mt-2 bg-white border border-primary-aqua shadow-mint rounded-[10px] w-full"
      >
        <ul class="p-1" v-for="option in options" :key="option">
          <li
            @click="(e) => changeOption(e)"
            class="text-left block px-4 py-2 text-base text-gray-sub hover:bg-primary-aqua hover:bg-opacity-10 rounded-[10px] hover:text-gray-sub cursor-pointer"
          >
            <div class="text-xs text-gray-sub">
              <div>
                {{ option.label }} <span>({{ option.count }}건)</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { ref, onMounted } from 'vue';

const props = defineProps({
  onError: Boolean,
  placeholder: String,
  options: Object,
});

const options = ref(props.options);
const show = ref(false);
const text = ref(props.placeholder);

const clickHandler = () => {
  show.value = !show.value;
  gsap.fromTo('#drop-box', { y: -3 }, { y: 0 });
};

const emit = defineEmits(['changeOptions']);
const changeOption = (e) => {
  text.value = e.target.innerText;
  show.value = false;

  emit('changeOptions', e.target.innerText, props.options);
};

onMounted(() => {
  if (props.onError) {
    show = false;
  }
});
</script>
