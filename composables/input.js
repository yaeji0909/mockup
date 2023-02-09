import { ref } from 'vue';

export function useInput(defaultValue) {
  const input = ref(defaultValue);
  const onChange = e => {
    input.value = e.target.value;
  };
  const onReset = (input.value = '');
  return [input, onChange, onReset];
}

export const changeTextColor = (e, arr) => {
  const text = e.target.value;
  const filteredList = [...arr].filter(r => r.title.includes(text));

  for (const item of filteredList) {
    // text 없을때 색상 초기화
    item.colorTitle = '';
    // if (text === '') return;
    // title에서 text의 시작 index
    const startIdx = item.title.indexOf(text);
    // title에서 text의 마지막 index
    const endIdx = startIdx + text.length;
    if (startIdx >= 0 && endIdx >= 0)
      item.colorTitle = `
    ${item.title.substr(0, startIdx)}<span class="text-primary-aqua">${text}</span>${item.title.substr(endIdx)}`;
  }
  return filteredList;
};
