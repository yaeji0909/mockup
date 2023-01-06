import { ref } from "vue";

export default function useInput(defaultValue) {
  const input = ref(defaultValue);
  const onChange = (e) => {
    input.value = e.target.value;
  };
  const onReset = (input.value = "");
  return [input, onChange, onReset];
}
