<template>
  <div>
    <div class="w-[500px] mt-5 border-2 rounded-xl">
      <h1 class="text-center my-5 font-bold">BUTTONS</h1>
      <div class="p-2"><PopupBtn text="확인" /></div>
      <div class="p-2"><PopupBtn text="취소" :isCancel="true" /></div>
      <div class="p-2">
        <ShortcutBtn
          text="자세히 보기"
          color="gray-caption"
          hoverColor="black"
        />
      </div>
      <div class="p-2 bg-black">
        <ShortcutBtn
          text="자세히 보기"
          color="white"
          hoverColor="primary-aqua"
        />
      </div>
      <div class="p-2"><ApplyBtn /></div>
      <div class="bg-black p-2">
        <Button
          class="g-btn"
          text="Google Play"
          :icon="true"
          @click="ClickBtn(GOOGLE_PLAY_URL)"
        >
          <template #icon>
            <img
              src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/playstore.svg"
            />
          </template>
        </Button>
      </div>
    </div>
    <div class="w-[500px] mt-5 border-2 rounded-xl">
      <h1 class="text-center my-5 font-bold">CHECKBOX</h1>
      <div class="p-2"><CheckBox /></div>
    </div>
  </div>
</template>

<script setup>
import Button from "/components/common/button/Button";
import PopupBtn from "/components/common/button/PopupBtn.vue";
import ShortcutBtn from "/components/common/button/ShortcutBtn";
import ApplyBtn from "/components/common/button/ApplyBtn";
import CheckBox from "/components/common/checkbox/CheckBox";
</script>

<style></style>
