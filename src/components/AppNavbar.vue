<template>
  <div class="navbar navbar-text-settings">
    <div class="navbar-container">
    <div class="nav-left">
      <button class="nav-item navbar-text-settings" :disabled="activePage === '/'" @click="navigatePage('/')">
        <img class="nav-item-icon" src="@/images/burger.svg" alt="Бургер">
        <p class="nav-item-description">Конструктор</p>
      </button>
      <button class="nav-item navbar-text-settings" :disabled="activePage === '/feed'" @click="navigatePage('/feed')">
        <img class="nav-item-icon" src="@/images/orderList.svg" alt="Меню">
        <p class="nav-item-description">Лента заказов</p>
      </button>
    </div>
    <div class="page_logo-container">
      <img class="page_logo-image" src="@/images/logo.svg" alt="Логотип">
    </div>
    <button class="nav-item navbar-text-settings" :disabled="activePage === '/login'" @click="navigatePage('/login')">
      <img class="nav-item-icon" src="@/images/profile.svg" alt="Профиль">
      <p class="nav-item-description">Личный кабинет</p>
    </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { ref } from 'vue';

const activePage = ref('')

const navigatePage = (page) => {
  if (activePage.value !== page) {
    activePage.value = page
    router.push(page)
  }


}

</script>

<style scoped>

@import url('@/styles/App/AppNavbar.css');

</style>