<template>
  <div class="check-wrap" @click="$refs.input.click()">
    <label class="check-label">
      <input
        ref="input"
        type="checkbox"
        :disabled="disabled"
        v-model="check"
        @change="$emit('toggleCheck', check)"
      />
      <span :class="['check', disabled ? 'bg-gray-200' : '']"></span>
    </label>
    <label class="cursor-pointer">{{ text }}</label>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
  disabled: Boolean,
});

const check = ref(false);
const emit = defineEmits(['toggleCheck']);
const click = (e) => {
  console.log('click', e.target);
};
</script>

<style scoped>
.check-wrap {
  display: flex;
  align-items: center;
  gap: 5px;
}
.check-label {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
}
.check-label input {
  opacity: 0;
  width: 0;
  height: 0;
}
.check {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.2s;
  border: 1px solid #d5dde5;
  border-radius: 4px;
}
.check:before {
  position: absolute;
  content: '';
  left: 50%;
  transform: translateX(-50%) rotate(40deg);
  transition: 0.2s;
  background: transparent;
  width: 6px;
  height: 12px;
  top: 2px;
}
.check-label input + .check {
  background-color: #fff;
}
.check-label input:checked + .check {
  background-color: #37d1c7;
  border-color: #37d1c7;
}
.check-label input.reverse:checked + .check {
  border-color: #d5dde5;
}
.check-label input:checked + .check:before {
  border: 2px solid #ffffff;
  border-left: none;
  border-top: none;
}
.check-label input:disabled + .check {
  background: #f1f1f1;
  border: 1px solid #d5dde5;
  cursor: not-allowed;
}
</style>
