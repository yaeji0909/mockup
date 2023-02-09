<template>
  <div
    class="group search-bar flex items-center w-[335px] md:w-[580px] lg:w-[800px] rounded-[50px] m-auto border border-gray-border focus-within:shadow-mint focus-within:border-primary-aqua transition"
  >
    <div
      class="flex justify-center items-center w-[90px] px-[15px] ml-[25px] mr-[15px] text-gray-sub text-xs md:text-xl font-medium border-r border-gray-border"
    >
      {{ $t('news.total') }}
      <span class="text-primary-aqua ml-1"> {{ props.total }}</span>
      {{ $t('news.case') }}
    </div>
    <input
      placeholder="검색어를 입력하세요."
      type="text"
      class="search-input text-base flex items-center py-2 bg-white w-full outline-none text-gray-caption focus:text-gray-sub"
      :class="onError && 'focus:border-error focus:shadow-error'"
      :value="value"
      @input="$emit('input', $event)"
    />
    <button
      class="w-[40px] h-[40px] md:w-[58px] md:h-[58px] px-4 mx-4 bg-search-black bg-no-repeat bg-center group-focus-within:bg-search-mint group-focus-within:transition-all group-focus-within:ease-in-out duration-150"
    ></button>
  </div>
</template>

<script setup>
const show = ref(false);
const props = defineProps({
  onError: Boolean,
  placeholder: String,
  value: String,
  total: Number,
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
