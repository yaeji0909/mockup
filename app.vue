<template>
  <div class="text-lg">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { createPinia, setActivePinia } from 'pinia';
const pinia = createPinia();
setActivePinia(pinia);
</script>
