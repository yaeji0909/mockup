<template>
  <div>
    <p>원하는 이동수단을 찜카와 함께!</p>
    <PopupBtn text="확인" />
    <PopupBtn text="취소" :isCancel="true" />
    <ShortcutBtn text="자세히 보기" color="gray-caption" hoverColor="black" />
    <ShortcutBtn text="자세히 보기" color="white" hoverColor="primary-aqua" />
    <ApplyBtn />
  </div>
</template>

<script setup>
import PopupBtn from '/components/common/button/PopupBtn';
import ShortcutBtn from '/components/common/button/ShortcutBtn';
import ApplyBtn from '/components/common/button/ApplyBtn';
</script>
