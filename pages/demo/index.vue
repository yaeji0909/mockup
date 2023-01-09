<template>
  <div>
    <!-- button -->
    <div class="w-[500px] mt-5 border-2 rounded-xl">
      <h1 class="text-center my-5 font-bold">BUTTONS</h1>
      <div class="bg-black p-2">
        <CommonButton
          class="g-btn"
          :text="$t('button.googlePlay')"
          :icon="true"
          @click="ClickBtn(GOOGLE_PLAY_URL)"
        >
          <template #icon>
            <img
              src="https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/playstore.svg"
            />
          </template>
        </CommonButton>
      </div>
      <div class="p-2"><PopupBtn :text="$t('button.confirm')" /></div>
      <div class="p-2">
        <PopupBtn :text="$t('button.cancel')" :isCancel="true" />
      </div>
      <div class="p-2">
        <ShortcutBtn
          :text="$t('button.moreDetail')"
          color="gray-caption"
          hoverColor="black"
        />
      </div>
      <div class="p-2 bg-black">
        <ShortcutBtn
          :text="$t('button.moreDetail')"
          color="white"
          hoverColor="primary-aqua"
        />
      </div>
      <div class="p-2"><RecruitApplyButton :text="$t('button.apply')" /></div>
    </div>
    <!-- checkbox -->
    <div class="w-[500px] mt-5 border-2 rounded-xl">
      <h1 class="text-center my-5 font-bold">CHECKBOX</h1>
      <div class="p-2"><CheckBox :text="$t('button.confirm')" /></div>
      <div class="p-2">
        <CheckBox :text="$t('button.cancel')" :disabled="true" />
      </div>
    </div>
    <div class="w-[500px] mt-5 border-2 rounded-xl">
      <h1 class="text-center my-5 font-bold">SELECTBOX</h1>
      <div class="p-2">
        <SelectBox />
      </div>
    </div>
    <!-- input -->
    <div class="w-[500px] mt-5 border-2 rounded-xl">
      <h1 class="text-center my-5 font-bold">Input</h1>
      <div class="p-2">
        <Input />
      </div>
    </div>
    <!-- review card -->
    <ReviewCard />
  </div>
</template>

<script setup>
import PopupBtn from "/components/common/button/PopupBtn.vue";
import ShortcutBtn from "/components/common/button/ShortcutBtn";
import CheckBox from "/components/common/checkbox/CheckBox";
import SelectBox from "/components/common/selectbox/SelectBox";
import Input from "/components/common/input/Input";
import ReviewCard from "/components/main/company/review-card/ReviewCard";
</script>
