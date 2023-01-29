<template>
  <div>
    <input
      :placeholder="placeholder"
      type="text"
      class="text-base flex items-center p-2 text-indigo-100 bg-gray-bg focus:bg-white focus:shadow-mint border-[1.5px] border-gray-border focus:text-gray-caption focus:border-primary-aqua rounded-[10px] w-full min-w-[335px] outline-none"
      :class="onError && 'focus:border-error focus:shadow-error'"
      :value="value"
      @input="$emit('input', $event)"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, defineProps } from 'vue';

const show = ref(false);
const props = defineProps({
  onError: Boolean,
  placeholder: String,
  value: String,
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
</script>
