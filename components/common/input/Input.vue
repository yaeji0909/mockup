<template>
  <div>
    <input
      placeholder="입력해주세요."
      type="text"
      class="text-base flex items-center text-gray-sub p-2 text-indigo-100 bg-gray-bg focus:bg-white focus:shadow-mint border-[1.5px] border-gray-border focus:border-primary-aqua rounded-[10px] w-80 outline-none"
      :class="onError && 'focus:border-error focus:shadow-error'"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const show = ref(false);
const props = defineProps({
  onError: Boolean,
});

const debouncedSearch = () => {
  return debounce(1000, (keyword) => {
    onSearch(keyword);
  });
};
onMounted(() => {
  if (props.onError) {
    show = false;
  }
});

console.log(props.onError);
</script>
