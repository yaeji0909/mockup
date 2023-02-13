<template>
  <vue-final-modal>
    <div
      :class="[
        'bg-white relative max-w-[580px] md:mt-10 xl:mt-40 mx-auto',
        !largerThanSm ? 'h-full w-screen rounded-none' : 'h-full rounded-[20px] overflow-auto',
      ]"
    >
      <section>
        <div class="flex justify-between items-center px-5 py-6">
          <nuxt-img v-if="!largerThanSm" :src="ARROW" alt="CLOSE" class="w-[20px]" @click="$emit('close')" />
          <h1 :class="['text-xl md:text-4xl xl:text-5xl font-bold', !largerThanSm ? 'm-auto ' : '']">
            {{ $t('dialog.title') }}
          </h1>
          <nuxt-img
            v-if="largerThanSm"
            :src="CLOSE"
            alt="CLOSE"
            class="w-[19px] cursor-pointer"
            @click="$emit('close')"
          />
        </div>
        <hr v-if="!largerThanSm" class="border-gray-border" />
      </section>
      <section class="px-5 py-6 max-h-[600px] md:max-h-[750px] lg:max-h-[600px] xl:max-h-[750px] overflow-scroll">
        <div v-for="input in inputList" :key="input.label" class="mb-5">
          <label for="company" class="text-base xl:text-xl font-medium">
            {{ input.label }}
          </label>
          <div v-if="input.type !== 'input'">
            <!-- 문의 유형 -->
            <div v-if="input.label === t('dialog.type')">
              <CommonSelectBox
                :placeholder="input.placeholder"
                :options="inquiryList"
                class="mt-[10px] w-full"
                @changeOptions="changeOptions"
              />
            </div>
            <!-- 문의 내용 -->
            <div v-if="input.label === t('dialog.content')">
              <textarea
                rows="8"
                class="resize-none text-base flex items-center p-2 text-indigo-100 bg-gray-bg focus:bg-white focus:shadow-mint border-[1.5px] border-gray-border focus:text-gray-caption focus:border-primary-aqua rounded-[10px] w-full min-w-[335px] outline-none"
                :placeholder="input.placeholder"
                maxlength="500"
                :value="input.content"
                @input="e => (input.content = e.target.value)"
              />
            </div>
            <!-- 개인정보수집 동의 -->
            <div v-if="input.label === t('dialog.privacy')">
              <textarea
                rows="8"
                class="resize-none text-base flex items-center p-2 text-indigo-100 bg-gray-bg focus:bg-white focus:shadow-mint border-[1.5px] border-gray-border focus:text-gray-caption focus:border-primary-aqua rounded-[10px] w-full min-w-[335px] outline-none"
                :placeholder="input.placeholder"
                maxlength="500"
                disabled="true"
              />
              <CommonCheckBox
                v-if="input.label === t('dialog.privacy')"
                :text="$t('dialog.agreeText')"
                :value="input.privacy"
                class="mt-[10px] w-full text-xs"
                @toggleCheck="e => changeCheck(e)"
              />
            </div>
          </div>
          <div v-else>
            <CommonInput
              :placeholder="input.placeholder"
              :value="input.content"
              class="mt-[10px] w-full text-sm"
              :disabled="input.label === t('dialog.privacy') ? true : false"
              @input="e => (input.content = e.target.value)"
            />
          </div>
        </div>
        <div class="px-5 pb-6 flex justify-center">
          <CommonButton
            :text="$t('dialog.submit')"
            :bgColor="disableSubmit ? 'gray-border' : 'primary-aqua'"
            textColor="white"
            :icon="false"
            class="w-1/2"
            @click="submit"
          />
        </div>
      </section>
      <section>
        <div class="absolute top-1/2 left-0">
          <CommonDialogAlert v-if="submitAvailable" @success="successSubmit" />
        </div>
      </section>
    </div>
    <!-- <span class="bg-white"># Simple modal</span>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <button class="modal-close" @click="showModal = false">x</button> -->
  </vue-final-modal>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { ModalsContainer, VueFinalModal, useModal } from 'vue-final-modal';

const CLOSE = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/dialog_close.svg';
const ARROW = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/dialog_arrow.svg';

/**
 * vue-final-modal
 */
let showModal = ref(false);

/**
 * setting forma
 */
const { t } = useI18n();

const inputList = ref([
  {
    label: t('dialog.company'),
    placeholder: t('dialog.companyPlaceholder'),
    content: '',
    type: 'input',
  },
  {
    label: t('dialog.name'),
    placeholder: t('dialog.namePlaceholder'),
    content: '',
    type: 'input',
  },
  {
    label: t('dialog.mobile'),
    placeholder: t('dialog.mobilePlaceholder'),
    content: '',
    type: 'input',
  },
  {
    label: t('dialog.email'),
    placeholder: t('dialog.emailPlaceholder'),
    content: '',
    type: 'input',
  },
  {
    label: t('dialog.type'),
    placeholder: t('dialog.typePlaceholder'),
    content: '',
    type: '',
  },
  {
    label: t('dialog.content'),
    placeholder: t('dialog.contentPlaceholder'),
    content: '',
    type: '',
  },
  {
    label: t('dialog.privacy'),
    placeholder: t('dialog.privacyText'),
    content: '',
    privacy: false,
    type: '',
  },
]);

const breakpoints = useBreakpoints(breakpointsTailwind);
const largerThanSm = breakpoints.greater('sm'); // only larger than sm
/**
 * filter list method according to selected option
 */
const inquiryList = ref(['제휴', '광고', '입점']);

const changeOptions = (type, options) => {
  inputList.value[4].content = type;
};

/**
 * check box
 */
const changeCheck = check => {
  inputList.value[6].privacy = check;
};

/**
 * 문의 하기 제출
 */
const disableSubmit = ref(true);
let submitAvailable = ref(false);
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

  const { company, name, mobile, email, type, content, privacy } = reqObj;
  if (!company || !name || !mobile || !email || !type || !content || !privacy) {
    submitAvailable.value = false;
  } else {
    submitAvailable.value = true;
  }
};

/**
 * 모두 입력 한 후 버튼 활성화
 */
watch(
  inputList.value,
  newInput => {
    let isEmpty = true;
    let agree = false;

    for (let i = 0; i < newInput.length; i++) {
      const element = newInput[i];
      if (element.label !== '개인정보수집 동의') {
        if (element.content === '') {
          isEmpty = true;
          break;
        } else {
          isEmpty = false;
        }
      } else {
        agree = element.privacy === false ? false : true;
      }
    }
    disableSubmit.value = !isEmpty && agree ? false : true;
  },
  { deep: true },
);

/**
 * close dialog
 */
const emit = defineEmits(['close', 'successDialog']);
const successSubmit = param => {
  submitAvailable.value = false;
  if (param) {
    emit('successDialog', true);
    emit('close');
  } else {
    emit('successDialog', false);
  }
};
</script>
