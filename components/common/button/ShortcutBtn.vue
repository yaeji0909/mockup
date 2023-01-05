<template>
  <button
    :class="[
      'shortcut-btn flex justify-center items-center gap-2 font-base font-bold',
      optionObj.color,
      optionObj.hoverColor,
      optionObj.color === 'gray-caption' ? 'hover:text-gray-caption' : 'hover:primary-aqua',
    ]"
    @click="$emit('click', $event)"
  >
    <p>{{ text }}</p>
    <img class="shortcut-btn-icon" :src="ARROW_GRAY" />
  </button>
</template>

<script setup>
const ARROW_GRAY = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/shortcut_arrow_gray.svg';
const ARROW_WHITE = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/shortcut_arrow_white.svg';
const ARROW_BLACK = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/shortcut_arrow_black.svg';
const ARROW_MINT = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/shortcut_arrow_mint.svg';

const props = defineProps({
  text: String,
  color: String,
  hoverColor: String,
});

const optionObj = reactive({
  color: 'text-gray-caption',
  hoverColor: 'text-black',
});

const changeColor = color => {
  optionObj.color = color ? 'text-' + color : 'text-gray-caption';
};
const changeHoverColor = color => {
  optionObj.hoverColor = color ? 'hover:text-' + color : 'text-black';
};

onMounted(() => {
  changeColor(props.color);
  changeHoverColor(props.hoverColor);
});

/**
 * hover 시 ARROW_BLACK or ARROW_MINT 적용
 */
onMounted(() => {
  const el = document.querySelector('.shortcut-btn');
  el.addEventListener('mouseover', e => {
    document.querySelector('.shortcut-btn-icon').src = ARROW_BLACK;
  });
  el.addEventListener('mouseout', e => {
    document.querySelector('.shortcut-btn-icon').src = ARROW_GRAY;
  });
});
</script>
