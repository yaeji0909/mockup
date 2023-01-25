<template>
  <div
    class="search-bar flex items-center min-w-[335px] max-w-[800px] rounded-[50px] m-auto border border-gray-border focus-within:shadow-mint focus-within:border-primary-aqua"
  >
    <div
      class="flex justify-center items-center w-[90px] px-[15px] ml-[25px] mr-[15px] text-gray-sub text-xs md:text-xl font-medium border-r border-gray-border"
    >
      {{ $t('news.total') }}
      <span class="text-primary-aqua ml-1"> {{ total }}</span>
      {{ $t('news.case') }}
    </div>
    <input
      placeholder="검색어를 입력하세요."
      type="text"
      class="search-input text-base flex items-center py-2 bg-white w-full outline-none text-gray-caption focus:text-gray-sub"
      :class="onError && 'focus:border-error focus:shadow-error'"
      :modelValue="value"
      @update:modelValue="value = $event"
    />
    <button
      class="md:w-[40px] md:h-[40px] md:w-[58px] md:h-[58px] px-4 mx-4"
    ></button>
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

/**
 * 총 건수
 */
const total = ref(12);
</script>

<style scoped>
button {
  background: url('https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/search_icon_bk.svg')
    no-repeat center;
}
.search-bar:focus-within button {
  background: url('https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/search_icon_mint.svg')
    no-repeat center;
}
</style>
