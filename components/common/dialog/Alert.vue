<template>
  <div
    class="flex flex-col justify-between bg-white w-[345px] px-[35px] py-[30px] h-[210px] rounded-[20px] text-center"
  >
    <p class="text-2xl font-bold my-[30px]">{{ $t('contact.confirmMsg') }}</p>
    <div class="flex gap-3">
      <CommonButtonPopupBtn :text="$t('contact.cancel')" :isCancel="true" />
      <CommonButtonPopupBtn :text="$t('contact.confirm')" :isCancel="false" />
    </div>
  </div>
</template>

<script setup></script>
