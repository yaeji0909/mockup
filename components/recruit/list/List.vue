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
          <h3
            class="text-base md:text-xl xl:text-2xl font-medium w-40 text-left pb-[20px] md:pb-0"
          >
            {{ recruit.department }}
          </h3>
          <div class="text-left md:w-[40rem] lg:w-[30rem] xl:w-[60rem]">
            <!-- <h1
              ref="recruitTitle"
              class="recruit-title text-2xl xl:text-3xl font-bold pb-[10px] truncate"
            >
              {{ recruit.title }}
            </h1> -->
            <!--  -->
            <template v-for="result in highlights">
              <template v-if="result.match">
                <span class="text-primary-aqua font-bold">
                  {{ result.text }}
                </span>
              </template>
              <template v-else>
                <span class="font-bold">{{ result.text }}</span>
              </template>
            </template>
            <!--  -->
            <div class="flex items-center gap-[15px]">
              <h5
                class="text-base md:text-xl xl:text-2xl font-medium text-primary-aqua"
              >
                D-{{ recruit.dDay }}
              </h5>
              <h5 class="text-xs md:text-sm xl:text-base text-gray-sub">
                {{ recruit.startAt }} ~ {{ recruit.endAt }}
              </h5>
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
  searchTitle: Array,
});

/**
 * 모바일 자세히 보기 버튼 삭제
 */
const breakpoints = useBreakpoints(breakpointsTailwind);
const largerThanSm = breakpoints.greater('sm'); // only larger than sm

/**
 * 해당 공고로 이동
 */
const moveToRecruit = (url) => {
  console.log('리크루트로 이동');
  if (!url) return;
};

/**
 * d-day 계산 (endAt - today)
 */
const diffDay = (due) => {
  const diff = new Date(due) - new Date();
  const remainDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  return `${remainDay}`;
};

props.recruits.map((d) => {
  d.dDay = diffDay(d.endAt);
});

diffDay();
setInterval(diffDay, 1000 * 60 * 60 * 24);

/**
 * 검색어 색상 변경
 */
let list = ref([]);
onMounted(() => {
  const elements = document.querySelectorAll('.recruit-title');
  list.value = [...elements];
});

let words = ref(props.searchWord);
watch(
  () => props.searchWord,
  (newVal, oldVal) => {
    console.log('newVal', newVal, 'oldVal', oldVal);
    words.value = newVal;
    console.log('list.value', list.value);

    // const sortedList = list.value.filter((item) =>
    //   item.innerHTML.includes(props.searchWord)
    // );
    // console.log('sortedList', sortedList);
    // // searchHighlighter(newVal);

    // sortedList.map((el) => {
    //   // console.log('el.innerHTML', el.innerHTML);
    //   if (props.searchWord !== '') {
    //     let word = new RegExp(props.searchWord, 'g'); // search for all instances
    //     let coloredText = el.innerHTML.replace(
    //       word,
    //       `<span class="text-primary-aqua">${props.searchWord}</span>`
    //     );
    //     el.innerHTML = coloredText;
    //   }
    //   console.log('el', el);
    //   return el;
    // });
    changeColor(newVal);
  }
);

let recruitTitle = ref(null);
const changeColor = (str) => {
  console.log(
    "document.querySelectorAll('.recruit-title')",
    document.querySelectorAll('.recruit-title')
  );

  const sortedList = list.value.filter((item) =>
    item.innerHTML.includes(props.searchWord)
  );
  // searchHighlighter(newVal);

  sortedList.map((el) => {
    // console.log('el.innerHTML', el.innerHTML);
    // if (props.searchWord !== '') {
    let word = new RegExp(props.searchWord, 'g'); // search for all instances
    let coloredText = el.innerHTML.replace(
      word,
      `<span class="text-primary-aqua">${props.searchWord}</span>`
      // `<span style="color:#37D1C7">${props.searchWord}</span>`
    );
    el.innerHTML = coloredText;
    // }
    console.log('el', el);
  });
};
// console.log('list.value', list.value);

const highlights = computed(() => {
  const results = [];
  if (props.searchWord && props.searchWord.length > 0) {
    const regexp = new RegExp(props.searchWord, 'ig');

    // console.log('props.searchTitle', props.searchTitle);

    let start = 0;
    props.searchTitle.map((item) => {
      console.log('item', item);
      for (let match of item.matchAll(regexp)) {
        results.push({
          text: item.substring(start, match.index),
          match: false,
        });
        start = match.index;
        results.push({
          text: item.substr(start, props.searchWord.length),
          match: true,
        });
        start += props.searchWord.length;
      }

      if (start < item.length)
        results.push({
          text: item.substring(start),
          match: false,
        });
    });

    if (results.length === 0) {
      results.push({
        text: item.value,
        match: false,
      });
    }
  }
  console.log('results', results);
  return results;
});
</script>
