<template>
  <div class="text-lg">
    <NuxtLayout>
      <ClientOnly>
        <NuxtPage />
      </ClientOnly>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { createPinia, setActivePinia } from 'pinia';
const pinia = createPinia();
setActivePinia(pinia);
</script>
