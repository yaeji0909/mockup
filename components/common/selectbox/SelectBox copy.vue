<template>
  <div>
    <div class="relative">
      <!-- Dropdown toggle button -->
      <button
        @click="show = !show"
        class="flex items-center p-2 text-indigo-100 bg-gray-bg focus:bg-white focus:shadow-mint border-[1.5px] border-gray-border focus:border-primary-aqua rounded-[10px] w-80"
        :class="onError && 'focus:border-error focus:shadow-error'"
      >
        <span class="mr-4 text-gray-caption">문의 유형을 선택해 주세요</span>
        <svg
          class="w-5 h-5 text-indigo-100 dark:text-white"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div
        v-show="show"
        class="absolute left-0 p-1 mt-2 bg-white border border-primary-aqua shadow-mint rounded-[10px] w-80"
      >
        <ul class="p-1">
          <li
            to="/"
            class="block px-4 py-2 text-sm text-gray-sub hover:bg-primary-aqua hover:bg-opacity-10 rounded-[10px] hover:text-gray-sub"
          >
            Option1
          </li>
          <li
            to="/"
            class="block px-4 py-2 text-sm text-gray-sub hover:bg-primary-aqua hover:bg-opacity-10 rounded-[10px] hover:text-gray-sub"
          >
            Option2
          </li>
          <li
            to="/"
            class="block px-4 py-2 text-sm text-gray-sub hover:bg-primary-aqua hover:bg-opacity-10 rounded-[10px] hover:text-gray-sub"
          >
            Option3
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const show = ref(false);
const props = defineProps({
  onError: Boolean,
});

onMounted(() => {
  if (props.onError) {
    show = false;
  }
});

console.log(props.onError);
</script>
