<template>
  <div>
    <hr class="mt-[25px] md:mt-[20px] xl:mt-[30px] bg-gray-sub h-[2px]" />
    <ul class="w-full text-black">
      <li
        v-for="recruit in recruits"
        :key="recruit.pid"
        class="md:flex md:justify-between md:items-center border-b border-gray-border py-[25px] cursor-pointer"
        @click="moveToRecruit(recruit.recruitUrl)"
      >
        <div class="flex-row items-center lg:flex pb-[20px] md:pb-0">
          <h3 class="text-base md:text-xl xl:text-2xl font-medium w-40 text-left pb-[20px] md:pb-0">
            {{ recruit.department }}
          </h3>
          <div class="text-left md:w-[40rem] lg:w-[30rem] xl:w-[60rem]">
            <h1 ref="recruitTitle" class="recruit-title text-2xl xl:text-3xl font-bold pb-[10px] truncate">
              {{ recruit.title }}
            </h1>
            <div class="flex items-center gap-[15px]">
              <h5 class="text-base md:text-xl xl:text-2xl font-medium text-primary-aqua">D-{{ recruit.dDay }}</h5>
              <h5 class="text-xs md:text-sm xl:text-base text-gray-sub">{{ recruit.startAt }} ~ {{ recruit.endAt }}</h5>
            </div>
          </div>
        </div>
        <p
          class="flex justify-center items-center w-[60px] h-[30px] text-xs md:text-sm xl:text-base border border-gray-sub rounded-full"
        >
          {{ recruit.career }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const props = defineProps({
  recruits: Array,
  searchWord: String,
});

/**
 * 모바일 자세히 보기 버튼 삭제
 */
const breakpoints = useBreakpoints(breakpointsTailwind);
const largerThanSm = breakpoints.greater('sm'); // only larger than sm

/**
 * 해당 공고로 이동
 */
const moveToRecruit = url => {
  console.log('리크루트로 이동');
  if (!url) return;
};

/**
 * d-day 계산 (endAt - today)
 */
const diffDay = due => {
  const diff = new Date(due) - new Date();
  const remainDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  return `${remainDay}`;
};

props.recruits.map(d => {
  d.dDay = diffDay(d.endAt);
});

diffDay();
setInterval(diffDay, 1000 * 60 * 60 * 24);

/**
 * 검색어 색상 변경
 */
const recruitTitle = ref(null);

watch(
  () => props.searchWord,
  (newVal, oldVal) => {
    let uniCode = ref('');
    for (const char of newVal) {
      uniCode = char.charCodeAt();
    }

    // console.log('newVal', newVal);
    // console.log('uniCode:', uniCode);

    if (newVal !== '') {
      changeColor(newVal, uniCode);
    }
  },
);

const changeColor = (coloredWord, uniCode) => {
  console.log('coloredWord', coloredWord, 'uniCode', uniCode);

  recruitTitle.value.map(el => {
    // for (const char of el.innerHTML) {
    //   const code = char.charCodeAt();
    //   console.log('code', code);
    // }

    if (el.innerHTML.includes(coloredWord)) {
      console.log('있음');
      if (coloredWord !== '') {
        let word = new RegExp(coloredWord, 'g'); // search for all instances
        let coloredText = el.innerHTML.replace(word, `<span class="text-primary-aqua">${coloredWord}</span>`);
        el.innerHTML = coloredText;
      }
      console.log('el', el);
    }
  });
};
</script>
