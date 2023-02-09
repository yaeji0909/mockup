<template>
  <div
    :class="[
      !largerThanSm
        ? 'h-screen w-screen rounded-none'
        : 'h-full bg-white rounded-[20px] overflow-auto',
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
          {{ $t("dialog.title") }}
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
        <div v-if="input.label === '문의 유형'">
          <CommonSelectBox
            :placeholder="$t('dialog.type')"
            :options="inquiryList"
            class="mt-[10px] w-full"
            @changeOptions="changeOptions"
          />
        </div>
        <div v-else>
          <CommonInput
            :placeholder="input.placeholder"
            :value="input.content"
            class="mt-[10px] w-full"
            :disabled="input.label === '개인정보수집 동의' ? true : false"
            @input="(e) => (input.content = e.target.value)"
          />
          <CommonCheckBox
            v-if="input.label === '개인정보수집 동의'"
            :text="$t('dialog.agreeText')"
            :value="input.privacy"
            class="mt-[10px] w-full"
            @toggleCheck="(e) => changeCheck(e)"
          />
        </div>
      </div>
      <!-- <CommonCheckBox
        :text="$t('dialog.agreeText')"
        :value="checkValue"
        @toggleCheck="(e) => changeCheck(e)"
      /> -->
    </section>
    <section class="px-5 pb-6 flex justify-center">
      <CommonButton
        :text="$t('dialog.submit')"
        bgColor="primary-aqua"
        textColor="white"
        :icon="false"
        class="w-1/2"
        @click="submit"
      />
    </section>
    <!-- <CommonDialogAlert /> -->
    <!-- <CommonDialogSuccess /> -->
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { ref, watch, onMounted } from "vue";

const CLOSE =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/dialog_close.svg";
const ARROW =
  "https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/dialog_arrow.svg";

/**
 * setting forma
 */
const { t } = useI18n();

const inputList = ref([
  {
    label: t("dialog.company"),
    placeholder: t("dialog.companyPlaceholder"),
    content: "",
  },
  {
    label: t("dialog.name"),
    placeholder: t("dialog.namePlaceholder"),
    content: "",
  },
  {
    label: t("dialog.mobile"),
    placeholder: t("dialog.mobilePlaceholder"),
    content: "",
  },
  {
    label: t("dialog.email"),
    placeholder: t("dialog.emailPlaceholder"),
    content: "",
  },
  {
    label: t("dialog.type"),
    placeholder: t("dialog.typePlaceholder"),
    content: "",
  },
  {
    label: t("dialog.content"),
    placeholder: t("dialog.contentPlaceholder"),
    content: "",
  },
  {
    label: t("dialog.privacy"),
    placeholder: t("dialog.privacyText"),
    content: "",
    privacy: false,
  },
]);

const breakpoints = useBreakpoints(breakpointsTailwind);
const largerThanSm = breakpoints.greater("sm"); // only larger than sm

/**
 * filter list method according to selected option
 */
const inquiryList = ref(["제휴", "광고", "입점"]);

const changeOptions = (type, options) => {
  inputList.value[4].content = type;
};

/**
 * check box
 */
const changeCheck = (check) => {
  inputList.value[6].privacy = check;
};

/**
 * 문의 하기 제출
 */
const submit = () => {
  const reqObj = {
    company: inputList.value[0].content,
    name: inputList.value[1].content,
    mobile: inputList.value[2].content,
    email: inputList.value[3].content,
    type: inputList.value[4].content,
    content: inputList.value[5].content,
    privacy: inputList.value[6].privacy,
  };

  console.log("reqObj", reqObj);
};
</script>
