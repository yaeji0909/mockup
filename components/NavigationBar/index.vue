<template>
  <nav>
    <div class="flex w-2/3">
      <div>
        <NuxtLink to="/">
          <nuxt-img src="/logo-mint.svg" />
        </NuxtLink>
      </div>
      <div class="navigation">
        <ul>
          <li v-for="value in menu" :key="value">{{ value }}</li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
const menu = ["Service", "Company", "News", "Recruit", "Contact"];
</script>
