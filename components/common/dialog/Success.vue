<template>
  <vue-final-modal class="flex justify-center items-center">
    <div
      class="flex flex-col justify-between items-center bg-white w-[345px] md:w-[480px] h-[480px] md:h-[540px] xl:h-[560px] px-[35px] py-[30px] rounded-[20px] m-auto"
    >
      <nuxt-img :src="CS_CENTER" alt="CS_CENTER" />
      <h3 class="text-2xl xl:text-3xl font-bold">
        {{ $t('dialog.successMsg') }}
      </h3>
      <h5 class="text-base md:text-sm xl:text-xl mt-[10px] text-center whitespace-pre-line">
        {{ $t('dialog.successSubMsg') }}
      </h5>
      <CommonButtonPopupBtn
        class="mt-5 w-full"
        :text="$t('dialog.confirm')"
        :isCancel="false"
        @click="$emit('successDialog', false)"
      />
    </div>
  </vue-final-modal>
</template>

<script setup>
import { ModalsContainer, VueFinalModal, useModal } from 'vue-final-modal';

components: {
  VueFinalModal, ModalsContainer;
}

const CS_CENTER = 'https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/cs_center.svg';
</script>
