<template>
  <form
    :class="[
      !largerThanSm
        ? 'h-screen w-screen rounded-none'
        : 'h-[750px] bg-white rounded-[20px] overflow-auto',
    ]"
  >
    <section>
      <div class="flex justify-between items-center px-5 py-6">
        <img
          v-if="!largerThanSm"
          :src="ARROW"
          alt="CLOSE"
          class="w-[20px]"
          @click="$emit('close')"
        />
        <h1
          :class="[
            'text-xl md:text-4xl xl:text-5xl font-bold',
            !largerThanSm ? 'm-auto ' : '',
          ]"
        >
          {{ $t('dialog.title') }}
        </h1>
        <img
          v-if="largerThanSm"
          :src="CLOSE"
          alt="CLOSE"
          class="w-[19px] cursor-pointer"
          @click="$emit('close')"
        />
      </div>
      <hr v-if="!largerThanSm" class="border-gray-border" />
    </section>
    <section class="px-5 py-6">
      <div v-for="input in inputList" :key="input.label" class="mb-5">
        <label for="company" class="text-base xl:text-xl font-medium">
          {{ input.label }}
        </label>
        <SelectBox v-if="input.label === '문의 유형'" />
        <CommonInput
          v-else
          :placeholder="input.placeholder"
          class="mt-[10px] w-full"
          v-model:input.content="value"
        />
      </div>
      <CheckBox :text="$t('dialog.agreeText')" />
    </section>
    <section class="px-5 pb-6 flex justify-center">
      <CommonButton
        :text="$t('dialog.submit')"
        bgColor="primary-aqua"
        :icon="false"
        class="w-1/2"
      />
    </section>
    <!-- <CommonDialogAlert /> -->
    <!-- <CommonDialogSuccess /> -->
  </form>
</template>

<script setup>
import CheckBox from '/components/common/checkbox/CheckBox';
import SelectBox from '/components/common/selectbox/SelectBox';
import { useI18n } from 'vue-i18n';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const CLOSE =
  'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/dialog_close.svg';
const ARROW =
  'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/dialog_arrow.svg';

const company = ref('');

/**
 * setting forma
 */
const { t } = useI18n();

const inputList = ref([
  {
    label: t('dialog.company'),
    placeholder: t('dialog.companyPlaceholder'),
    content: '',
  },
  {
    label: t('dialog.name'),
    placeholder: t('dialog.namePlaceholder'),
    content: '',
  },
  {
    label: t('dialog.mobile'),
    placeholder: t('dialog.mobilePlaceholder'),
    content: '',
  },
  {
    label: t('dialog.email'),
    placeholder: t('dialog.emailPlaceholder'),
    content: '',
  },
  {
    label: t('dialog.type'),
    placeholder: t('dialog.typePlaceholder'),
    content: '',
  },
  {
    label: t('dialog.content'),
    placeholder: t('dialog.contentPlaceholder'),
    content: '',
  },
  {
    label: t('dialog.privacy'),
    placeholder: t('dialog.privacyText'),
    content: '',
  },
]);

/**
 * setting input
 */
const content = ref('');

const breakpoints = useBreakpoints(breakpointsTailwind);
const largerThanSm = breakpoints.greater('sm'); // only larger than sm
</script>
