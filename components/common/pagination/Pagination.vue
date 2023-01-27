<template>
  <div class="flex justify-center items-center">
    <button
      :class="[
        'cursor-pointer w-[20px] h-[20px] bg-no-repeat bg-center',
        previousButtonDisabled
          ? 'bg-pagination-gray cursor-not-allowed rotate-180'
          : 'bg-pagination-bk hover:bg-pagination-mint rotate-180',
      ]"
      :disabled="previousButtonDisabled"
      @click="previous"
    ></button>
    <span class="ml-2 mr-4"></span>
    <ul
      class="flex justify-center items-center gap-2 text-xs md:text-base font-medium"
    >
      <li
        v-for="number in pageList"
        :key="number"
        class="flex justify-center items-center w-[26px] h-[26px] md:w-[34px] md:h-[34px] xl:w-[40px] xl:h-[40px] rounded-[6px] active:bg-primary-aqua active:text-white"
        :class="[currentPage === number ? 'bg-primary-aqua text-white' : '']"
      >
        <button @click="change(number)">{{ number }}</button>
      </li>
    </ul>
    <span class="ml-4 mr-2"></span>
    <button
      :class="[
        'cursor-pointer w-[20px] h-[20px] bg-no-repeat bg-center',
        nextButtonDisabled
          ? 'bg-pagination-gray cursor-not-allowed'
          : 'bg-pagination-bk hover:bg-pagination-mint',
      ]"
      :disabled="nextButtonDisabled"
      @click="next"
    ></button>
  </div>
</template>

<script setup>
import _ from 'lodash';

const props = defineProps({
  // 현재 페이지
  currentPage: {
    type: Number,
    default: 1,
  },
  // 총 페이지
  totalPage: {
    type: Number,
    default: 10,
  },
  // 보여줄 페이지 수
  pageDisplayCount: {
    type: Number,
    default: 5,
  },
});

// 현재 페이지의 그룹 번호 (현재 페이지 / 보여줄 페이지의 수)
const currentPageGroup = computed(() =>
  Math.ceil(props.currentPage / props.pageDisplayCount)
);

// 첫번째 페이지 번호
const firstPageNumber = computed(() => {
  // 끝 번호가 26,27 이렇게 끝날 경우 페이지를 [26,27] 이렇게 보여줘야 하기에 존재하는 로직
  if (lastPageNumber.value == props.totalPage) {
    const multipleOfPageDisplayCount =
      lastPageNumber.value % props.pageDisplayCount === 0;
    return multipleOfPageDisplayCount
      ? lastPageNumber.value - props.pageDisplayCount + 1
      : lastPageNumber.value -
          (lastPageNumber.value % props.pageDisplayCount) +
          1;
  }
  return lastPageNumber.value - (props.pageDisplayCount - 1);
});

// 마지막 페이지 번호
const lastPageNumber = computed(() => {
  const lastNumber = currentPageGroup.value * props.pageDisplayCount;
  if (lastNumber > props.totalPage) return props.totalPage;
  return lastNumber;
});
console.log('firstPageNumber', firstPageNumber.value);
console.log('lastPageNumber', lastPageNumber.value);

// 페이지 리스트 (pageDisplayCount가 5일 경우 [1~5], [6~10]...)
const pageList = computed(() => {
  const list = [];
  for (let i = firstPageNumber.value; i <= lastPageNumber.value; i++) {
    list.push(i);
  }
  return list;
});
console.log('pageList.value', pageList.value);

// 다음 버튼 비활성화 조건
const nextButtonDisabled = computed(
  () => lastPageNumber.value >= props.totalPage
);

// 이전 버튼 비활성화 조건
const previousButtonDisabled = computed(() => firstPageNumber.value <= 1);

// 사용자가 번호를 변경하는 경우 상위 컴포넌트로 값 전달
const emit = defineEmits(['change']);
const change = (clickNumber) => {
  if (clickNumber === props.currentPage) return false;
  emit('change', clickNumber);
};

// 이전 버튼 클릭 시 이전 페이지의 첫번째 값으로 설정
const previous = () => {
  emit('change', firstPageNumber.value - props.pageDisplayCount);
};

// 다음 버튼 클릭 시 이후 페이지의 첫번째 값으로 설정
const next = () => {
  emit('change', lastPageNumber.value + 1);
};

// // ...버튼
// const showLessDots = computed(() => {
//   if (props.currentPage > 10) {
//     return true;
//   }
//   return false;
// });
// const showMoreDots = computed(() => {
//   if (this.pageCount > 11 && this.endPaginatorIndex !== this.pageCount) {
//     return true;
//   }
//   return false;
// });
</script>
