<template>
  <vue-final-modal class="flex justify-center items-center">
    <div
      class="flex flex-col justify-between bg-white w-[345px] px-[35px] py-[30px] h-[210px] rounded-[20px] text-center"
    >
      <p class="text-2xl font-bold my-[30px]">{{ $t('dialog.confirmMsg') }}</p>
      <div class="flex gap-3">
        <CommonButtonPopupBtn :text="$t('dialog.cancel')" :isCancel="true" @click="$emit('success', false)" />
        <CommonButtonPopupBtn :text="$t('dialog.confirm')" :isCancel="false" @click="$emit('success', true)" />
      </div>
    </div>
  </vue-final-modal>
</template>

<script setup></script>
