<template>
  <div class="search-wrapper flex rounded-[50px] border border-gray-border">
    <div class="w-[150px]">총 12건</div>
    <input
      placeholder="검색어를 입력하세요."
      type="text"
      class="search-input text-base flex items-center p-2 text-indigo-100 bg-white focus:shadow-mint focus:text-gray-caption focus:border-primary-aqua rounded-[10px] w-full min-w-[335px] outline-none"
      :class="onError && 'focus:border-error focus:shadow-error'"
      :modelValue="value"
      @update:modelValue="value = $event"
    />
    <button type="submit"></button>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, defineProps } from 'vue';

const SEARCH_BK = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/search_icon_bk.svg';
const SEARCH_MINT = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/search_icon_mint.svg';

const show = ref(false);
const props = defineProps({
  onError: Boolean,
  placeholder: String,
  value: String,
});

const debouncedSearch = () => {
  return debounce(1000, keyword => {
    onSearch(keyword);
  });
};
onMounted(() => {
  if (props.onError) {
    show = false;
  }
});
</script>

<style scoped>
.search-wrapper {
  /* border: 1px solid currentColor; */
}
button[type='submit'] {
  text-indent: -999px;
  overflow: hidden;
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  background: transparent url('https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/search_icon_bk.svg')
    no-repeat center;
  cursor: pointer;
  opacity: 0.7;
}
</style>
