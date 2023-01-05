<template>
  <div>
    <p>원하는 이동수단을 찜카와 함께!</p>
    <PopupBtn text="확인" />
    <PopupBtn text="취소" :isCancel="true" />
  </div>
</template>

<script setup>
import PopupBtn from '/components/common/button/PopupBtn';
</script>
