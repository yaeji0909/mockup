<template>
  <nav>
    <div class="nav-bar flex justify-around p-4">
      <div class="logo-box">
        <NuxtLink to="/">
          <nuxt-img src="/logo-white.svg" />
        </NuxtLink>
      </div>
      <div class="menu-box">
        <ul class="flex">
          <li class="mx-1" v-for="value in menu" :key="value">{{ value }}</li>
        </ul>
      </div>
      <div class="lang-box flex">
        <button>KOR</button>
        <span>|</span>
        <button>ENG</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
const menu = ["Service", "Company", "News", "Recruit", "Contact"];
</script>
